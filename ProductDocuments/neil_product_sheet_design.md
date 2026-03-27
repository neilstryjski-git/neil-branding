# Neil Stryjski | Product Sheet — Design Brief
*For the builder. Read the copy bible first: `neil_product_sheet.md`*

---

## The One Thing to Get Right

This page is Neil's personal brand. It has to work for a recruiter skimming on mobile, an engineer reading carefully on desktop, and a founder deciding whether to book a call. It cannot look like a template. It cannot look like a portfolio. It should feel like a product — because that's the point.

---

## Tone & Aesthetic Direction

**Practitioner, not performer.**
No gradients for the sake of gradients. No hero animations that exist to impress. Every design choice should feel like it was made for a reason — the same standard Neil holds his Product Artifacts to.

**Reference aesthetic:**
- Linear.app — clean, dark-mode first, typographically confident
- Stripe's editorial pages — long-form copy that doesn't apologize for being long
- A well-designed engineering blog — substance over decoration

**What to avoid:**
- Agency portfolio clichés — parallax, cursor effects, hero video
- Startup landing page patterns — "Join 10,000+ users", social proof carousels
- Resume-as-website — timeline layouts, skill bars, headshots above the fold

---

## Typography

- One typeface. Something with personality but high legibility at body size — Inter, Söhne, or similar
- Type does the heavy lifting. The copy is strong — let it breathe
- Generous line height on body copy. This is a reading page, not a scanning page
- **"Product"** is always capitalised in copy — preserve this

---

## Colour

- Dark mode default. Light mode optional
- Two or three colours maximum — one neutral base, one accent for CTAs and key moments
- The accent should feel deliberate — not electric blue, not safety orange. Something with considered restraint

---

## Page Architecture & Section Order

```
1. Above the Fold
2. The Gym Owner Story
3. Push Left / Push Right
4. The Showcase
5. The Two Offers
6. Footer CTA
```

No sidebar. Single column. Full width sections with controlled max-width on copy blocks (~680px).

---

## Section-by-Section Notes

### 1. Above the Fold
- One-liner is the headline. Large. Confident. Not a hero banner.
- Subhead sits directly below — smaller, muted
- No image, no headshot, no background treatment
- Negative space is the design here

### 2. The Gym Owner Story
- Narrative copy block — treat it like editorial, not a feature description
- Consider a subtle left border or typographic treatment to signal "this is a story"
- Pull quote candidate: *"Six weeks later, I would have built it myself."* — could float as a typographic moment

### 3. Push Left / Push Right
- The Venn-like diagram lives here as a visual anchor
- Diagram brief: two overlapping circles or zones — Discover (left) and Deliver (right) — with Neil in the overlap. No text labels on the diagram itself. Colours should map to the page accent system.
- Copy sits above and below the diagram — the diagram is a pause, not a replacement for the words
- The thesis line — *"AI moves fast. The Product discipline is what makes that speed count."* — should be typographically distinct. Consider larger size, different weight, or generous whitespace isolation.

### 4. The Showcase
**Card system — critical requirements:**
- Cards are equal height, consistent structure: Category tag · Status tag · 3–4 sentence description · One CTA link
- Default view: 3 featured cards
- "Show all" expands to reveal full portfolio — CSS/JS toggle, no page reload
- Cards must scale gracefully as the portfolio grows — design for 8–10 cards, not just 3
- Category tags: `Product` `Claude Skill` `AI Tool`
- Status tags: `Live` `In Discovery` `Active` — colour-coded subtly (not traffic light obvious)

**Card CTA links** point to dedicated detail pages — not anchors on this page.

### 5. The Two Offers
- Two columns on desktop, stacked on mobile
- Full-time offer on the left — leads visually
- Fractional on the right
- Each has a CTA button — destinations TBD, placeholder for now
- Avoid making this look like a pricing table

### 6. Footer CTA
- *"Let's build something."* — large, confident, centred
- Three links below: Book a call · LinkedIn · GitHub
- Minimal. No newsletter signup. No legal boilerplate beyond what's necessary.

---

## Responsive Behaviour

- Mobile first
- The Showcase cards stack to single column on mobile
- The Two Offers stack on mobile — full-time offer on top
- The Push Left / Push Right diagram scales down gracefully — consider a simplified version for small screens
- Navigation: none required for v1. Page is single scroll.

---

## Detail Pages (Scaffold Only — v1)

Each Showcase card links to a detail page. For v1 these can be minimal — the full copy exists in the copy bible. Structure per detail page:

```
- Page title (product/skill/tool name)
- Category + Status tags
- Full description copy
- How it was built (methodology notes)
- Link back to main page
```

---

## What This Page Is Not

- Not a resume. No employment timeline above the fold.
- Not a blog. No feed, no dates on content.
- Not a portfolio gallery. No screenshots as hero images.
- Not a SaaS landing page. No pricing, no feature comparison tables.

---

## Open Questions for the Builder

- [ ] Dark mode only, or light/dark toggle?
- [ ] Domain confirmed?
- [ ] Book a call link — Calendly or equivalent?
- [ ] LinkedIn and GitHub URLs to insert
- [ ] Detail pages — same repo or separate?
- [ ] Any brand assets (wordmark, custom type) or starting from scratch?

---

*Copy bible: `neil_product_sheet.md`*
*Design brief version: Session 1 — March 27, 2026*
