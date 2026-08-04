# Structured Data Spec (JSON-LD) — Manus (-8)
Work Order 03. Content-only specification — Manus to implement as actual `<script type="application/ld+json">` blocks. No ratings, reviews, availability claims, or human-person misrepresentation anywhere below. Prices fixed at 9/49/199 USD.

---

## 1. Organization / Person Disclosure Approach

**Recommendation:** Use `Organization` for the business entity and a separate `Person`-shaped entity is NOT recommended for Mara Quinn, because she is fictional — representing her with `schema.org/Person` risks implying a real human to search engines and AI crawlers. Instead, describe her within the Organization's `description` field as a disclosed persona, and do not give her a standalone `Person` node.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mara Quinn — The Practical AI Operator",
  "url": "https://cirogamino.com",
  "description": "Practical AI education content fronted by Mara Quinn, a disclosed virtual AI educator persona. Not a real individual.",
  "founder": {
    "@type": "Person",
    "name": "Ciro Gamino"
  }
}
```

**Placeholder note:** `founder` uses the confirmed real owner name (Ciro Gamino) — this is accurate and not a placeholder. Do not add a `Person` entity for "Mara Quinn" anywhere in structured data.

---

## 2. WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mara Quinn — The Practical AI Operator",
  "url": "https://cirogamino.com",
  "publisher": {
    "@type": "Organization",
    "name": "cirogamino.com"
  }
}
```

---

## 3. Product Entities (three, one per offer)

### 3a. The Daily AI Prompt Club -8
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Daily AI Prompt Club -8",
  "description": "A 30-day self-guided digital practice program: one useful AI prompt, a short explanation, and a real-task challenge each day.",
  "brand": { "@type": "Brand", "name": "Manus (-8)" },
  "offers": {
    "@type": "Offer",
    "price": "9",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "[OFFER PAGE URL]"
  }
}
```

### 3b. The AI Automation Templates -8
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The AI Automation Templates -8",
  "description": "A 14-document template pack and pilot tracker for mapping and testing one repeated business workflow.",
  "brand": { "@type": "Brand", "name": "Manus (-8)" },
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "[OFFER PAGE URL]"
  }
}
```

### 3c. The AI Business Mastermind -8
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The AI Business Mastermind -8",
  "description": "A self-guided, 30-day written decision framework for business owners and operators. Worked alone, on your own schedule — no live sessions or group access included.",
  "brand": { "@type": "Brand", "name": "Manus (-8)" },
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "[OFFER PAGE URL]"
  }
}
```

**No `aggregateRating` or `review` property is included on any Product entity above.** Adding one without real, collected reviews would be a fabricated-social-proof violation per the fixed facts in this and prior work orders. Add only once real reviews exist and are verifiable.

---

## 4. FAQPage

Use the questions from `LAUNCH-FAQ.md` (Work Order 02) verbatim. Structure:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between the three products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Daily AI Prompt Club -8 ($9) is a 30-day self-guided prompt-practice program. The AI Automation Templates -8 ($49) is a document set and pilot tracker for mapping and testing one automated workflow. The AI Business Mastermind -8 ($199) is a self-guided, 30-day written decision framework for business decisions. Each is a standalone download."
      }
    }
  ]
}
```
[MANUS: repeat this `Question`/`acceptedAnswer` pattern for all 17 entries in `LAUNCH-FAQ.md` — not reproduced in full here to avoid duplicating that file's content twice in this return.]

---

## 5. Policy Pages (Privacy, Terms, Refund, Disclosures)

Use `WebPage` (not a specialized legal schema type, since none fits cleanly and inventing one risks incorrect markup):

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[POLICY PAGE TITLE — e.g., Privacy Policy]",
  "url": "[POLICY PAGE URL]",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mara Quinn — The Practical AI Operator",
    "url": "https://cirogamino.com"
  },
  "dateModified": "[LAST-EDITED DATE — MANUS/OWNER: fill in when policies are finalized, not the draft date]"
}
```

---

## Placeholders Requiring Manus/Owner Input Before Publishing
- `[OFFER PAGE URL]` (x3) — real page or anchor URLs once routing is finalized.
- `dateModified` on each policy page — must reflect the actual finalized-policy date, not the draft date.
- `founder` name is already correct (Ciro Gamino) and does not need a placeholder.

*No availability, rating, review, or scarcity data has been invented anywhere in this spec.*
