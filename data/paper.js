/* =====================================================================
   OSCAR K — SYSTEMS FORWARD TEST (PAPER / FICTIONAL)
   What the mechanical systems would have done, with zero human hands.
   Source of truth: TradingView strategy exports (Pepperstone feed),
   stored under data/csv/. Fills are FICTIONAL — no real money.

   status: "closed" | "open"  (open = trade still running, levels
   preliminary until the export confirms them at close)
   pnlEur / retPct come straight from the strategy export.
   estR only when the rule SL is known from the strategy; otherwise null.
   ===================================================================== */
const PAPER_TRADES = [
  {id:1, system:"OK System", version:"EU v2.17a", symbol:"EURUSD", direction:"Short",
   openTime:"2026-07-28T10:00", closeTime:"2026-07-28T16:50", entry:1.13669, exit:1.13806,
   signal:"A SW upd Z:1H K:S", pnlEur:-8.81, retPct:-0.12, estR:-1.0, durBars:82, status:"closed",
   note:"Sweep of Asia range, short from the 1H zone. Ran into the rule SL at the Asia high (1.1380x). The manual practice version of this trade was closed in profit by tightening the SL and timing the exit — discretion got lucky; the system took the clean loss."},
  {id:2, system:"OK System", version:"GU v2.18c", symbol:"GBPUSD", direction:"Short",
   openTime:"2026-07-29T09:15", closeTime:"2026-07-29T09:35", entry:1.32972, exit:1.33043,
   signal:"A AS rfr Z:4H K:S", pnlEur:-4.40, retPct:-0.05, estR:-1.0, durBars:4, status:"closed",
   note:"Clean stop-out. The manual practice account took the same trade with the same result — system and human agreed here, except on position size."},
  {id:3, system:"OK System", version:"GU v2.18c", symbol:"GBPUSD", direction:"Long",
   openTime:"2026-07-30T10:35", closeTime:"2026-07-30T17:30", entry:1.33555, exit:1.34486,
   signal:"A SW upd Z:4H K:N", pnlEur:17.31, retPct:0.70, estR:null, durBars:83, status:"closed",
   note:"The winner of the week, held mechanically for 7 hours to the exit signal at 1.34486 (+93 pips). The manual practice version exited the same idea much earlier, ahead of news — the system made more by simply following its rules."},
  {id:4, system:"OK System", version:"GU v2.18c", symbol:"GBPUSD", direction:"Short",
   openTime:"2026-07-31T10:00", closeTime:"2026-07-31T18:00", entry:1.34497, exit:1.34717,
   signal:"A SW Z:4H K:S", pnlEur:null, retPct:null, estR:-1.0, durBars:96, status:"closed",
   note:"Went ~50 pips onside (low ~1.3400 mid-afternoon), then gave it all back on the late rally and exited at the stop zone around 18:00 — a full loss after a big open profit. Levels read from the chart; exact fills/PnL to be confirmed from the next strategy export. The giveback (max favorable ~+2R, realized −1R) is a data point for the exit rules."}
];

const PAPER_META = {
  start: "2026-07-28",
  basis: "TradingView strategy exports · Pepperstone feed · fictional fills, no real money",
  systems: {
    "OK System": {color:"ok", note:"OKi intraday — EU v2.17a, GU v2.18c"},
    "MR4H":      {color:"clause", note:"No completed setups yet — filters kept it flat (two 3/4 setups rejected: trend filter)"}
  }
};
