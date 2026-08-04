# Claude Collaboration Handoff — Manus (-8) Revenue Launch

**Prepared for:** Claude, acting as a writing and QA collaborator  
**Project owner:** Ciro Gamino  
**Primary implementing agent:** Manus  
**Handoff created:** August 3, 2026, CDT  
**Single launch tracker:** `LAUNCH-100-CHECKLIST.md`

## Copy-Paste Prompt for Claude

```text
You are joining the Manus (-8) Revenue Launch as a writing and QA collaborator. Read every file in this handoff package before drafting. Do not create a second project plan or alter the existing 100-point launch checklist structure.

Your owned deliverables are:
1. Point 66: lock the specifications for all three paid products.
2. Point 67: build the complete $9 Daily AI Prompt Club customer package.
3. Point 68: build the complete $49 AI Automation Templates customer package.
4. Point 69: build the complete $199 AI Business Mastermind customer package as an immediately deliverable, self-guided operating program; do not invent live dates, community access, calls, testimonials, revenue claims, or owner commitments.
5. Point 70: organize those three products into customer-ready folders and provide ZIP-ready manifests.
6. Point 71: create a fulfillment manifest with exact filenames, versions, included files, and SHA-256 placeholders for Manus to calculate.
7. Point 72: quality-check the three packages for completeness, internal consistency, price-to-value fit, disclosures, unsupported claims, broken references, and duplicated content.
8. Point 84 copy only: write a three-email lead follow-up sequence for each of the three lead magnets, with one shared welcome email and two product-specific follow-ups per magnet. Manus will implement delivery.
9. Points 91–94 draft copy only: draft Privacy Policy, Terms of Sale and Use, Refund and Fulfillment Policy, and Disclosures and Support Information. Label them working drafts for owner/legal review. Manus will publish them.
10. Point 97 review only: provide a concise copy, accessibility-language, and customer-clarity review of the final storefront when Manus returns it. Manus will implement fixes.

Do not touch commerce code, Stripe, databases, storage, webhooks, checkout, email infrastructure, analytics instrumentation, advertising pixels, deployment, or publishing. Those are Manus-owned tasks.

Use the established brand: Mara Quinn, The Practical AI Operator. Mara is a fictional, disclosed virtual AI educator. Keep the voice calm, direct, practical, specific, and anti-hype. Never fabricate testimonials, ratings, customers, revenue, outcomes, credentials, guarantees, or scarcity.

Keep these fixed prices and roles:
- The Daily AI Prompt Club -8 — $9 — daily prompt practice.
- The AI Automation Templates -8 — $49 — reusable workflow maps, task briefs, review gates, and testing records.
- The AI Business Mastermind -8 — $199 — an immediately deliverable, self-guided owner/operator decision program built around one real workflow, accountability records, and evidence-based checkpoints. Do not promise live events or human services unless the source files explicitly authorize them.

Required output structure:
/CLAUDE-RETURN/
  PRODUCT-SPECIFICATIONS.md
  /01-DAILY-AI-PROMPT-CLUB/
    START-HERE.md
    30-DAY-PROMPT-PRACTICE.md
    PROMPT-PRACTICE-TRACKER.csv
    QUICK-REFERENCE.md
  /02-AI-AUTOMATION-TEMPLATES/
    START-HERE.md
    AUTOMATION-TEMPLATE-PACK.md
    AUTOMATION-PILOT-TRACKER.csv
    QUICK-REFERENCE.md
  /03-AI-BUSINESS-MASTERMIND/
    START-HERE.md
    30-DAY-DECISION-ROOM.md
    OPERATOR-SCORECARD.csv
    QUICK-REFERENCE.md
  /EMAIL/
    LEAD-FOLLOW-UP-SEQUENCES.md
  /POLICIES/
    PRIVACY-POLICY-DRAFT.md
    TERMS-OF-SALE-AND-USE-DRAFT.md
    REFUND-AND-FULFILLMENT-POLICY-DRAFT.md
    DISCLOSURES-AND-SUPPORT-DRAFT.md
  FULFILLMENT-MANIFEST.md
  QA-REPORT.md

For every owned checklist point, include:
- Status: DONE or BLOCKED
- Start timestamp in CDT
- Finish timestamp in CDT
- Proof: exact returned filename(s)
- Any unresolved owner dependency

Return one ZIP containing the CLAUDE-RETURN folder. Also paste a short completion summary listing points 66–72, 84-copy, 91–94-copy, and 97-review status. Do not mark an item DONE unless its required file is present.
```

## Responsibility Split

| Workstream | Claude owns | Manus owns |
|---|---|---|
| Paid products | Specifications, customer content, manifests, editorial QA | Packaging validation, storage, secure delivery, storefront implementation |
| Commerce | None | Stripe setup, products/prices, checkout, payment records, post-purchase flow |
| Email | Follow-up copy | Lead database, consent, delivery, sending integration, tests |
| Analytics | None | Events, UTM attribution, pixels, conversion verification |
| Policies | Working drafts | Final implementation and owner-review labeling |
| QA | Copy/customer-clarity review | Functional, payment, mobile, accessibility, performance, and regression tests |
| Publishing | None | Final checkpoint; Ciro clicks Publish |

## Fixed Offer Source of Truth

| Offer | Price | Established promise | Immediate customer result |
|---|---:|---|---|
| The Daily AI Prompt Club -8 | $9 | One useful prompt, a short explanation, and a small challenge | A 30-day structured prompt-practice pack |
| The AI Automation Templates -8 | $49 | Process maps, prompt frameworks, and test checklists | A reusable assisted-workflow template system |
| The AI Business Mastermind -8 | $199 | A focused decision room for owners and operators | A self-guided 30-day workflow decision and accountability program |

## Product Acceptance Criteria

### Point 66 — Product Specifications

`PRODUCT-SPECIFICATIONS.md` must state the buyer, problem, transformation, exact inclusions, exclusions, delivery format, access duration, support boundary, disclaimers, refund assumptions, version, and acceptance criteria for each product. It must explicitly prevent unsupported live-service commitments.

### Point 67 — $9 Prompt Club

The package must include 30 genuinely distinct daily prompts. Every day needs a purpose, ready-to-use prompt, short explanation, practice challenge, and completion check. The CSV tracker must open cleanly and contain 30 rows plus headings.

### Point 68 — $49 Automation Templates

The pack must include, at minimum, an opportunity card, workflow map, task brief, source packet, output contract, review checklist, exception log, decision receipt, test charter, scale gate, rollback plan, operating cadence, training record, and contribution ledger. The CSV tracker must support at least one complete pilot from intake through decision.

### Point 69 — $199 Mastermind

The package must be immediately deliverable without a scheduled event. It must guide an owner through one real workflow over 30 days using weekly decisions, evidence reviews, correction-load tracking, accountability records, and a final continue/revise/narrow/pause/stop decision. It must not imply a live room, private coaching, community, or guaranteed outcome unless Ciro later adds those services.

### Points 70–72 — Packaging, Manifest, and QA

Every file must have a stable name and version. The manifest must show which offer unlocks which files. The QA report must verify completeness, internal links, disclosures, pricing consistency, no fabricated social proof, no unsupported claims, and no cross-product duplication that reduces buyer value.

## Email Copy Acceptance Criteria

The shared welcome email must deliver the selected lead magnet and set expectations. Each lead magnet then receives two product-specific follow-ups: one teaching email and one direct offer email. Every message must include a clear CTA placeholder, disclosure where Mara speaks in first person, and no invented urgency.

## Policy Draft Assumptions

Use `Ciro Gamino` as the owner name and `cirogamino.com` as the intended repository/domain context. Do not invent a street address, phone number, tax registration, jurisdiction, or support email. Use clearly labeled placeholders only for those genuinely unknown fields. Digital-product delivery is intended to be immediate after successful payment. Refund language must be commercially clear but labeled for owner/legal review.

## Files Included in This Handoff

The handoff bundle includes the existing launch checklist, current storefront source, design direction, three lead magnets, build notes, and submission summary. Those files are source material, not instructions to change the project architecture.

## Return Protocol

Claude should return one ZIP and a short completion summary. Ciro can upload that ZIP back into the Manus task. Manus will verify the files, calculate hashes, update the same checklist with exact timestamps and proof, and continue the technical implementation without redoing Claude’s work.
