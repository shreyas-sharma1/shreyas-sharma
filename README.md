# Shreyas Sharma — Portfolio

Source for my portfolio site. BBA student at **Keshav Mahavidyalaya, University of Delhi**,
working on financial analysis, distress prediction, and the policy questions that sit
underneath both.

**Live:** https://shreyas-sharma1.github.io/shreyas-sharma/

## Featured research

**Financial Distress Prediction: Altman Z-Score vs. AI** *(ongoing)*

A comparative study of the classical Z-Score against machine-learning classifiers,
scored on the same Indian filings over the same holdout period. The interest is less in
which model wins than in *where* the classical one breaks: sector drift, asset-light
balance sheets, and coefficients estimated on a market that no longer exists — and what
that implies for lending screens that still treat the score as settled.

The site ships a working implementation of the classical half. It computes both variants
live, from raw line items:

| Model | Formula | Distress / Grey / Safe |
| --- | --- | --- |
| **Z** — listed manufacturers (Altman, 1968) | `1.2·X₁ + 1.4·X₂ + 3.3·X₃ + 0.6·X₄ + 1.0·X₅` | `< 1.81` / `1.81–2.99` / `> 2.99` |
| **Z″** — non-manufacturers & emerging markets (Altman, 1995) | `6.56·X₁ + 3.26·X₂ + 6.72·X₃ + 1.05·X₄` | `< 1.1` / `1.1–2.6` / `> 2.6` |

Where `X₁` = working capital / assets, `X₂` = retained earnings / assets,
`X₃` = EBIT / assets, `X₄` = equity / total liabilities (market value for **Z**, book value
for **Z″**), and `X₅` = sales / assets. The emerging-market credit score adds a constant
of 3.25 to **Z″**.

Alongside the score, the page breaks out each weighted term's contribution — so it shows
*why* a firm lands where it lands, not just that it does. The three sample profiles are
illustrative figures, not real companies.

## Experience

- **Leo Club, Keshav Mahavidyalaya (DU)** — Member, Aug 2025 – present. Coordinated the
  session's first drive end to end; built an interactive financial literacy model for rural
  outreach that was adopted for club-wide use.
- **Project Vitt Vichaar** — Member, Aug 2025 – present. Financial management and literacy
  initiatives across the university circuit.

## Skills & credentials

Excel modeling · financial analysis · data interpretation · policy research ·
financial literacy outreach

Certification: **Vista Equity Partners — Demystifying Private Equity** (job simulation).

## Education

- **Keshav Mahavidyalaya, University of Delhi** — BBA, 2025 – 2028
- **Lancers Convent School** — Commerce with Mathematics

## Running it

`index.html` is the whole site: one file, no build step, no dependencies, no external
requests. Open it directly, or serve the folder:

```sh
python3 -m http.server 8000   # → http://localhost:8000
```

To publish: **Settings → Pages → Deploy from branch → `main` / root.**

## Contact

- **Email:** shreyassharma0502@gmail.com
- **LinkedIn:** [shreyas-sharma-43b577383](https://www.linkedin.com/in/shreyas-sharma-43b577383)
