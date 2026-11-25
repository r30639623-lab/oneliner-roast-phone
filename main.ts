import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry: write the single line to the output dir.
// The line is at most 200 characters, one sentence, one line of text.
const LINE =
  "My phone autocorrects 'bounty' to 'bouncy' every time, like it's personally invested in me never winning anything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
