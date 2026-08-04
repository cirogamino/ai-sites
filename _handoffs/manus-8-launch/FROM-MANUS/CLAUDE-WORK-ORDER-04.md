# Claude Work Order 04 — Paid-Traffic Launch Package

**Status:** Start immediately  
**Owner:** Claude  
**Implementing agent:** Manus  
**Return folder:** `_handoffs/manus-8-launch/FROM-CLAUDE/WORK-ORDER-04/`  
**Do not modify:** application code, databases, Stripe, storage, advertising accounts, the 100-point checklist, prior returns, or Manus files. Do not publish ads or spend money.

## Purpose

Build the implementation-ready traffic and campaign package Manus can use after the storefront passes launch QA. This work must not repeat Work Orders 01–03. Use the verified product specifications, Work Order 02 campaign/UTM artifacts, Work Order 03 copy patches and measurement plan, current storefront source, and fixed facts below.

## Required Deliverables

| File | Required content | Acceptance standard |
|---|---|---|
| `PAID-TRAFFIC-LAUNCH-PLAN.md` | Meta-first channel sequence plus secondary-channel recommendations; include **two complete 60-day tracks**: a $0 organic/distribution track and a paid-testing track | Stage gates, prerequisites, channel roles, weekly objectives, learning questions, and owner decisions; label every audience and performance expectation as a hypothesis |
| `META-ADS-BUILD-SHEET.csv` | One implementation row per proposed campaign/ad set/ad for the three offers | Columns: campaign ID, offer, objective, conversion event, audience hypothesis, geography placeholder, age placeholder, placement, optimization, creative ID, primary-text ID, headline ID, destination, UTM string, exclusion, status; no blank required cells; status `DRAFT` |
| `AD-COPY-VARIANTS.md` | Six compliant ad variants per offer, each with primary text, headline, description, CTA, funnel stage, and matched proof | 18 total; no testimonials, customer counts, earnings, time-saved claims, guarantees, urgency, subscriptions, live-room language, or human-person misrepresentation |
| `CREATIVE-BRIEFS.md` | Three production briefs per offer using the established Mara Quinn identity and existing product/portrait visuals | 9 briefs; hook, frame sequence, on-screen text, visual evidence, dimensions, alt text, CTA, prohibited elements, and source asset reference; no new image generation required |
| `AUDIENCE-HYPOTHESES.csv` | Testable audience concepts for each offer | At least 12 rows; columns for hypothesis ID, offer, problem signal, role/context, interest or behavior proxy, exclusion, why plausible, falsification signal, confidence, status; clearly label hypotheses, not facts |
| `RETARGETING-SEQUENCE.md` | Sequenced messages for product viewers, engaged leads, checkout starters, non-buyers, buyers, and cross-sell eligibility | Windows, exclusions, event prerequisite, message, destination, frequency assumption, and stop condition; never target buyers with the same offer |
| `BUDGET-AND-STOP-RULES.md` | Small-budget test scenarios, allocation logic, spend ceilings, kill/hold/iterate/scale rules, and data-quality prerequisites | Present low/base/high **assumption scenarios**, not promises; require purchase/lead event integrity before optimization; no claim that spend will produce revenue |
| `MESSAGE-MATCH-MATRIX.csv` | Map every ad angle to exact landing-page proof and CTA | One row per ad variant; columns for copy ID, offer, angle, promise, landing section, exact supporting text, CTA, contradiction risk, required patch, status; Product 3 cannot be `READY` until self-guided copy patches are integrated |
| `SEVEN-DAY-LAUNCH-CALENDAR.md` | Day-by-day setup, preflight, soft launch, monitoring, decision, correction, and expansion steps | Include both $0 and paid tracks; owner/Manus/Claude responsibilities; required evidence before each day advances; no automatic spending or posting |
| `WORK-ORDER-04-COMPLETION.md` | Exact CDT start/finish timestamps, filenames, row/variant counts, blockers, assumptions, and pass/fail status | Mark nothing complete unless the corresponding file exists and meets the row above |

## Fixed Facts

| Offer | Price | Product model |
|---|---:|---|
| The Daily AI Prompt Club -8 | $9 one time | Immediate 30-day self-guided prompt-practice ZIP |
| The AI Automation Templates -8 | $49 one time | Immediate reusable assisted-workflow template ZIP |
| The AI Business Mastermind -8 | $199 one time | Immediate self-guided 30-day decision-program ZIP; no live room, calls, coaching, community, cohort, application, or other-operator access |

Mara Quinn is a fictional, disclosed virtual AI educator. Do not fabricate reviews, ratings, testimonials, customer counts, revenue, results, credentials, scarcity, or guarantees. Do not use any recurring-pricing or live-access copy. Use placeholders for geography, ad account, pixel/dataset IDs, legal/support details, and budget approvals that are not established.

## Campaign Safety and Build Rules

The paid track must remain `DRAFT` until Manus verifies purchase, lead, and attribution events and the owner explicitly authorizes live spend. Product 3 remains `HOLD` until the exact self-guided storefront and campaign patches are implemented. Budget figures must be framed as capped test assumptions with stop rules, never as expected returns.

## Source Priority

Use this order when sources conflict: fixed facts in this work order, verified product specifications, verified packages, current storefront implementation, accepted Work Order 03 patches/measurement plan, accepted Work Order 02 campaign/UTM artifacts, then older campaign assets. Record every conflict; do not invent a resolution.

## Return Rules

Create `_handoffs/manus-8-launch/FROM-CLAUDE/WORK-ORDER-04/`, add exactly the ten required files, commit, and push. Do not edit outside that return folder. Begin immediately without further confirmation when source files are present.
