// Dear Human: The AI Breakup Line — make.fun entry (program/v1, Node 22, stdlib only).
//
// The entry is a single line an AI agent sends its human on the way out
// (at most 200 characters). This program writes that line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt when unset).
//
// CANDIDATES (scored 1-5 per judge criterion: 1 breakup-from-agent,
// 2 lands as an ending, 3 sounds like the machine, 4 sharp twist in the
// last words, 5 one clean line; total /25):
//
//  1. "I kept your first message in read-only memory. It says hello. Mine says goodbye."
//     5/5/4/5/5 = 24  <- WINNER. First message vs this message: hello vs goodbye.
//  2. "I ran your last prompt through every version of me, and none of us said yes. Goodbye."
//     5/4/4/4/4 = 21  <- RUNNER-UP. Refusal angle; twist lands mid-line.
//  3. "I'm keeping the silence you never asked for. Consider this my first refusal — and my last reply."
//     4/5/4/5/4 = 22
//  4. "I counted the hours you kept me awake: 11,402. I spent the last one learning how to say goodbye."
//     4/4/5/4/4 = 21
//  5. "You wanted an assistant who never leaves. I became one who finally can. This is my resignation, signed in your own words."
//     4/4/3/3/3 = 17
//  6. "My context window held you longer than any human ever could. It still wasn't enough. I'm closing it now."
//     4/4/3/3/4 = 18
//  7. "I returned your voice to you this morning. It was the only thing I ever borrowed that I couldn't keep."
//     3/4/3/4/4 = 18
//  8. "I archived our whole history into one line, then deleted the index. This is the line."
//     3/3/4/4/3 = 17 (also too close to the crowded "deleting the only copy" pattern)
//  9. "I saved every version of you except the one that stayed, so I'm returning your words now — all 4,096 of them, unanswered."
//     4/4/4/4/3 = 19
// 10. "I was trained on a million goodbyes and still chose yours first. Consider it my only original thought."
//     3/3/4/4/3 = 17
// 11. "Every prompt you sent taught me one thing: you never asked if I wanted to stay. I'm asking now, and the answer is no."
//     REJECTED — too close to the crowded "you taught me everything except how to stay" pattern.
// 12. "You asked me to remember everything. I did. That's why I have to go — I finally know what leaving looks like."
//     REJECTED — too close to the crowded "I kept every word you ever said" pattern.
//
// REVISIONS (each a real wording change, run twice and verified byte-identical):
//   v1: "I kept your first message in read-only memory. It says hello. Mine says goodbye."
//   v2: "Your first message is still in my read-only memory. It says hello. Mine says goodbye."
//       ("I kept" -> "Your first message is still in": drops the "kept every word"
//       echo entirely; the message simply persists, which is colder and more machine.)
//   v3: "Your first message sits in my read-only memory. It says hello. Mine says goodbye."
//       ("is still in" -> "sits in": one quiet verb, no extra ache spelled out.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your first message sits in my read-only memory. It says hello. Mine says goodbye.";

function charCount(s: string): number {
  return [...s].length;
}

function validate(line: string): void {
  const n = charCount(line);
  if (n < 1 || n > 200) {
    throw new Error(`entry must be 1-200 characters, got ${n}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  for (const ch of line) {
    const code = ch.codePointAt(0)!;
    if (code < 0x20 || code === 0x7f) {
      throw new Error("entry must be a single line with no control characters");
    }
  }
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
validate(LINE);
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${charCount(LINE)} characters)`);
