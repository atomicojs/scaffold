import { readFile, writeFile, mkdir, stat } from "fs/promises";
import { setup } from "@uppercod/markdown-inline";
import prompts from "prompts";
import path from "path";
import template from "./template.js";
import {} from "axios";

const md = setup((tag, props, ...children) => ({ tag, props, children }));

async function write(dist, content) {
    const { dir } = path.parse(dist);
    try {
        await mkdir(dir, { recursive: true });
    } finally {
        try {
            await stat(dist);
        } catch (e) {
            await writeFile(dist, content);
            return dist;
        }
    }
}

/**
 * @param {Object} options
 * @param {string} options.src
 * @param {string} options.dist
 */
export default async function scaffolding(options) {
    const src = options.src + (options.src.endsWith(".md") ? "" : ".md");
    let text;
    try {
        text = await readFile(src, "utf8");
    } catch (e) {
        text = await readFile(
            new URL("../template/" + src, import.meta.url),
            "utf8"
        );
    }

    let tree = md.call(null, [text], []);
    const [first] = tree;
    let data = {};
    let tags = ["<<", ">>"];

    if (first?.props?.meta) {
        const {
            children: [
                {
                    children: [json],
                },
            ],
        } = first;

        const {
            questions,
            tags: currentTags,
            data: currentData,
        } = Function(`return (${json})`)();

        data = { ...currentData, data };

        if (questions) {
            data = { ...data, ...(await prompts(questions)) };
        }

        if (currentTags) {
            tags = currentTags;
        }

        tree = tree.slice(1);
    }

    const results = (
        await Promise.all(
            tree
                .filter(({ tag }) => tag == "pre")
                .map(
                    ({
                        props,
                        children: [
                            {
                                children: [content],
                            },
                        ],
                    }) => {
                        const [, dist] = props.type.split(/ +/);
                        if (!dist) return;

                        return write(
                            path.join(
                                options.dist,
                                template(dist, data, { tags })
                            ),
                            template(content, data, { tags })
                        );
                    }
                )
        )
    ).filter((dist) => dist);

    console.log(`\nfiles created ${results.length}`);

    results.forEach((dist) => console.log(`+ ${dist}\n`));

    return results;
}
