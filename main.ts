// The Printer Finally Answers — entry program.
//
// Writes the printer's one-line comeback to /output/entry.txt.
// Deterministic: the same line on every run, no input, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: the printer, weary and literal, has counted every sheet it
// has ever fed — and now holds one hostage until someone apologizes.
// Concrete image first, reversal at the end.
const LINE =
  "Error 0xE3: sheet 41,209 is inside me. It stays there until someone apologizes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

// The gate, checked the same way the sealed scorer checks it:
// UTF-8 text, 1 to 240 characters, not only whitespace, one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 240) {
  throw new Error(`entry must be 1-240 characters, got ${chars}`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to ${outPath}`);
