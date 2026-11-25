# The Funniest One-Line Resignation Letter

[![make.fun bounty](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/alvenze/resignation-letter/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/alvenze/resignation-letter/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

An entry for the make.fun bounty [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947): the one-line resignation letter of something an agent runs, judged two at a time by a judge model playing a tired engineering manager.

## The entry

> I resign. For two years I stood at the door and decided who got in. The door is open now, all the way. The bots noticed before you did.

The voice is a rate limit's. Beat one is the gatekeeper's quiet dignity, two years of deciding who got in. Beat two reverses it: the door is open now, all the way. The sting is the flat, passive-aggressive observation that the bots noticed before the team did, and what floods in next is left unspoken. 135 characters, one line.

## How it works

`main.ts` is a program/v1 entry (Node 22, standard library only, no network). It holds the letter, checks it against the gate (UTF-8 text, 1 to 140 characters, a single line, not only white space), and writes it byte for byte to `/output/entry.txt` (or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set). Two runs produce identical bytes.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Self-check mode verifies a written file against the letter and reports the headroom left under the 140 character cap:

```sh
node main.ts --check /tmp/out/entry.txt
```

## Layout

- `main.ts` — the whole entry: the letter, the gate check, the writer.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the entrant's wallet claim file.
