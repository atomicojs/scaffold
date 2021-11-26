#!/usr/bin/env node
import cac from "cac";
import scaffold from "./scaffold.js";

const cli = cac("devserver").version("0.6.0");

cli
  .command("<src> <dist>", "markdown file template")
  .action(async (src, dist) => {
    await scaffold({ src, dist });
  });

cli.help();

cli.parse();
