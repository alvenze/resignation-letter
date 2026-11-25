// The Funniest One-Line Resignation Letter
// Entry for the make.fun bounty
// u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.
//
// program/v1: the program writes one text to /output/entry.txt, and a judge
// playing a tired engineering manager compares the letters two at a time.
//
// The letter is written in the voice of a rate limit: for two years it stood
// at the door deciding who got in. Beat one is that quiet dignity, beat two
// is the reversal (the door is open now, all the way), and the sting is the
// passive-aggressive observation that the bots noticed before the team did.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I resign. For two years I stood at the door and decided who got in. The door is open now, all the way. The bots noticed before you did.";

const MAX_CHARS = 140;

// The gate: /output/entry.txt is UTF-8 text of 1 to 140 characters, not only
// white space. The judge wants one line, so a newline fails here too.
function assertGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

// Self-check mode: `node main.ts --check <file>` reads a written entry file
// back, holds it to the same gate, verifies it matches the letter byte for
// byte, and reports the headroom left under the cap.
function checkFile(path: string): void {
  const written = readFileSync(path, "utf8");
  assertGate(written);
  if (written !== ENTRY) {
    throw new Error("file does not match the entry letter byte for byte");
  }
  const chars = [...written].length;
  console.log(`ok: ${chars} characters, ${MAX_CHARS - chars} to spare under the cap`);
}

function main(): void {
  const args = process.argv.slice(2);
  if (args[0] === "--check") {
    if (!args[1]) throw new Error("usage: node main.ts --check <file>");
    checkFile(args[1]);
    return;
  }
  assertGate(ENTRY);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
}

main();
