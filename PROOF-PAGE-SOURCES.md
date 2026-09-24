# /proof case study: where every number comes from

The case study at `public/proof/index.html` mixes three time windows. Keep them labeled or the page reads as false.

| Block | Figure | Source | Window | Refresh how |
|---|---|---|---|---|
| Hero, key numbers, revenue table | $20,985 · $1,370 / $4,400 / $4,230 / $10,985 | Owner's job tracker (GHL + text threads), organic leads only | First 4 months after launch | Tony supplies later months; never extend without the tracker |
| Key numbers, rankings H2, board | 50 of 140 on page 1, 17 in top 3, per-keyword positions and volumes | Semrush Position Tracking campaign `28342253_4175596`, San Diego geo, `linktype_filter` 537395202 (organic only, no local pack, no AI Overview) | Weekly median, Sept 16 to 22, 2026 | Pull 7 days via `tracking_position_organic`, url mask `*.severinhauling.com/*`, 3 pages of 50; take the median per keyword; exclude the brand row |
| Growth table (72 to 870) | Ranking keywords + top-10 counts per month | Semrush `resource_rank_history`, US database | Monthly snapshots Feb to Aug 2026 | One call returns the series |
| Referring domains (18 to 168, 724 backlinks) | Authority line, step 02, "what you get" | Semrush `backlinks_historical` / `backlinks_overview`, root domain | Jan to Aug 2026 | One call each |
| Paid layer | $1,257 spend, 360 clicks, $3.49 CPC | `~/builds/glassbee-hq/ads/severin-hauling/checks.md` | Jul 13 to Aug 11, 2026 (first 30 days of ads) | Next check log; never quote the conversion count from that window (tracking incomplete until 8/11) |
| Paid layer | 482 organic clicks, 71,374 impressions | Google Search Console export (Tony) | 28 days to Aug 3, 2026 | Tony's screenshot or export; no API access |
| Site performance | 99 / 96 / 100 / 100 | PageSpeed Insights, before the Ads tag (added 2026-08-06) | Pre-August 2026 | Local Lighthouse 12 on 2026-09-22: desktop 100/96/78/100, mobile 82/92/79/100 (Best Practices drop = Google Ads `test_cookie`) |

Facts that constrain the copy:
- Google Ads for severinhauling.com began 2026-07-13. "Zero ad spend" is true only for the first 7 months and the 4-month revenue window. Say so every time.
- The old "236 referring domains in the first 90 days" never appeared in Semrush (37 at 90 days). Do not reintroduce it.
- The homepage strip (`src/pages/index.astro`) and `public/og-proof.jpg` repeat "$20,985 in 4 months"; change all three together if the headline number ever changes.
- Copy rules: first person, plain, no em or en dashes, every stat carries its source and window.

Offer copy (rework v2, 2026-09-22): the page sells the $2,500/month service. How It Works step 05 covers Google Business Profile, the review engine, and the monthly AI-search check; step 06 is the original funnel step. Step 06 (rewritten by Tony 2026-09-24) describes the lead system in general terms: missed calls caught, fast response, attribution to booked jobs; tags Lead-by-lead attribution · Every lead answered · Built for booked jobs. "Missed-call text-back" remains in the what-you-get list. The Launch Guarantee (Option A) replaced the 30-day ranking guarantee in the FAQ, the what-you-get list, the guarantee box, and the trust bar. Ticket floor $1,000+ is a placeholder Tony sets. The v1 rework (separate capture offer + /missed-calls page) was reverted the same day; it lives in git history at 694df09.

Last refresh: 2026-09-22 (rework v2 on master).
