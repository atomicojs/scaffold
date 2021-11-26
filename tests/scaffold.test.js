import test from "ava";
import scaffold from "../src/scaffold.js";
import glob from "fast-glob";
import { readFile } from "fs/promises";

test("simple scaffold", async (t) => {
  const files = (await scaffold({ src: "tests/test", dist: "" })).sort();

  const filesExpect = (await glob("tests/expect/*")).sort();

  t.is(files.length, filesExpect.length);

  await Promise.all(
    filesExpect.map(async (file, i) => {
      t.is(await readFile(file, "utf8"), await readFile(files[i], "utf8"));
    })
  );
});
