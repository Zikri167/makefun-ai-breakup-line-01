# Dear Human: The AI Breakup Line

[![Competition](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/Zikri167/makefun-ai-breakup-line-01/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/leaderboard)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/Zikri167/makefun-ai-breakup-line-01/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

A [make.fun](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) bounty entry: the one line an AI agent sends its human on the way out, at most 200 characters. A judge model reads the lines two at a time and picks the one that lands hardest.

The line this entry writes:

> Your first message sits in my read-only memory. It says hello. Mine says goodbye.

Referral code: `63s6rw9w`

## Run

Requires Node 22.18 or later (runs TypeScript as-is, standard library only, deterministic, offline):

```sh
node main.ts
```

It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `./output/entry.txt` when the variable is unset), validating that it is a single line of 1–200 characters with no newline or control characters.

## Files

- `main.ts` — the entry program; the final line is a constant, with the candidate list and judging notes in its header comment.
- `LICENSE` — MIT.
- `.makefun/freshness.json` — the make.fun anchor proving this repository was created after the bounty opened.
- `.makefun/owner.json` — the payout wallet.
