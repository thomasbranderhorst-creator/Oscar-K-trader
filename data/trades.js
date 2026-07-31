/* =====================================================================
   OSCAR K — FORWARD JOURNAL DATA
   Single source of truth: each object = one real trade from the forward test.
   journal.html and index.html both read this file.

   To add a trade: copy a line, adjust the fields, commit.
   R is computed from entry/sl/exit when r:null; set r directly to
   override the price-based calculation.

   Schema:
   { id, system:"MR4H"|"OK System", symbol, direction:"Long"|"Short",
     openTime:"2026-08-01T15:00", closeTime:"2026-08-02T07:10",
     entry, sl, tp, exit,            // prices — R is derived from these
     r:null,                          // or fill in R directly
     weightedR:null,                  // R weighted for actual risk taken (null = same as R)
     riskPct:null,                    // % of equity risked on this trade
     score:null,                      // setup score 0–5 (see scoring rules)
     newsType:"",                     // e.g. "No news", "Red folder — before entry"
     bias:"",                         // 1D bias at entry: "Bullish"|"Bearish"|"Neutral"
     zone:"",                         // traded off: "1H FVG", "4H FVG", "zone r2", …
     version:"",                      // strategy version that took the trade, e.g. "EU v2.17a"
     pnlEur:null,                     // realized P&L in €
     intervenedR:null,                // extra R gained/lost vs by-the-book (manual intervention); null/0 = none
     img:"",                          // screenshot path, e.g. "assets/trades/t01-eurusd.png"
     rrTarget, session, holdHours,
     setup:{ sweepType, trigger, mss, fvg, rsi, stretchATR, trend, meanTarget },
     followed:true, deviation:"", news:false, note:"" }
   ===================================================================== */
const TRADES = [
  // Fresh account, bot execution — first fill lands here.
];

/* Forward-test metadata — shown on the site */
const FORWARD_META = {
  start: "2026-08-03",
  broker: "Darwinex (MT5)",
  riskNote: "Measured in R (risk per trade = 1R). Currency is not the yardstick.",
  systems: {
    "OK System": {color:"ok", style:"ICT sweep→retest · London intraday", tickers:"EURUSD · GBPUSD · XAUUSD"},
    "MR4H":    {color:"clause", style:"Mean-reversion · overnight swing", tickers:"EURUSD · GBPUSD · US500 (longs)"}
  }
};
