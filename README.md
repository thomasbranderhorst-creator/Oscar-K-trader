# Oscar K — trading website

Static site: no build step, no dependencies. Opening `index.html` in a browser is enough.

## Structure

```
index.html        Homepage — live forward status + the two systems
ok-system.html    OK System (ICT sweep→retest, London intraday)
clause.html       Clause (mean-reversion basket, overnight swing)
proof.html        Methodology & evidence
journal.html      Live forward journal (dashboard)
data/trades.js    ← THE single place where trades are maintained
assets/style.css  Shared styling
```

## Adding a trade

Open `data/trades.js`, copy an existing line in the `TRADES` array and adjust the fields.
`R` is computed automatically from `entry`/`sl`/`exit` when `r:null`; set `r` directly to override.
Commit + push = site updated. Homepage and journal both read this file.

## Publishing on GitHub Pages

1. Push to the `main` branch of `thomasbranderhorst-creator/Oscar-K-trader`.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**
3. After ±1 minute the site is live at `https://thomasbranderhorst-creator.github.io/Oscar-K-trader/`

Custom domain later: Settings → Pages → Custom domain.

## Deliberately left out

- Exact parameter values of both systems (only the structure is public).
- Currency amounts — everything is reported in R.
- Any "buy now" language; the site is an evidence machine, not a sales page.
