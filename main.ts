import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The router confesses: one line, in the router's own voice, for dropping
// the connection at the exact moment a movie reaches its climax.
const ENTRY =
  "I dropped you at the climax because I heard the ending first, and you didn't deserve it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be 1-200 characters, a single non-blank line.
// Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
