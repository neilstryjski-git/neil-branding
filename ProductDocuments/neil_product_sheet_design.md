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
- Section ends with a text link → *"The Approach — how this works in practice"*
- The diagram lives here as the visual anchor — see reference SVG below

**The diagram — finalized concept:**
A single horizontal timeline from "idea" (far left) to "production" (far right). One outer border defines the Product zone. Two colours inside — teal for Discover (left), purple for Deliver (right). A faded dashed box sits inside showing the "before" state — smaller, centre-weighted. Two expansion arrows push outward in both directions. Below the diagram, two output artifacts connect via vertical lines from the right edge of each respective zone — "slide deck / concept only" from the before zone, "working product" from the after zone. "Output" label sits between the two artifact boxes.

**What the diagram communicates:**
- Product's zone of influence is expanding in both directions simultaneously
- The before boundary was defined by *explaining* the idea. The new boundary is defined by *proving* it.
- Engineering joins earlier and is immersed further — implied by the leftward expansion arrow, not labelled
- The output has fundamentally changed — from a concept to a working thing

**Reference SVG asset** — use this as the builder's starting point. Rebuild in production-quality CSS/React but preserve the concept, proportions, and colour logic exactly:

```svg
<svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrowtrack" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
  <marker id="arrowgray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="#B4B2A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
  <marker id="arrowpurpledown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="#3C3489" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
  <marker id="arrowcontinue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
</defs>
<rect x="220" y="30" width="164" height="44" rx="6" fill="var(--color-background-secondary)" stroke="#B4B2A9" stroke-width="0.75"/>
<text font-size="10" font-weight="500" x="302" y="49" text-anchor="middle" fill="#444441" font-family="sans-serif">Product Artifacts</text>
<text font-size="9" x="302" y="63" text-anchor="middle" fill="#888780" font-family="sans-serif">presented to engineering</text>
<line x1="302" y1="108" x2="302" y2="76" stroke="#B4B2A9" stroke-width="0.75" stroke-dasharray="3 3" marker-end="url(#arrowgray)"/>
<text font-size="9" x="318" y="94" text-anchor="start" fill="#888780" font-family="sans-serif">output</text>
<rect x="80" y="110" width="222" height="58" rx="6" fill="#1D9E75" fill-opacity="0.12"/>
<rect x="80" y="110" width="222" height="58" rx="6" fill="none" stroke="#B4B2A9" stroke-width="1" stroke-dasharray="4 3"/>
<text font-size="10" font-weight="500" x="188" y="143" text-anchor="middle" fill="#085041" font-family="sans-serif">Traditional Product Work</text>
<line x1="302" y1="139" x2="524" y2="139" stroke="#B4B2A9" stroke-width="0.75" stroke-dasharray="4 3" marker-end="url(#arrowgray)"/>
<text font-size="9" x="414" y="132" text-anchor="middle" fill="#888780" font-family="sans-serif">consultation</text>
<rect x="528" y="110" width="88" height="58" rx="6" fill="#534AB7" fill-opacity="0.12"/>
<rect x="528" y="110" width="88" height="58" rx="6" fill="none" stroke="#B4B2A9" stroke-width="1" stroke-dasharray="4 3"/>
<text font-size="10" font-weight="500" x="572" y="143" text-anchor="middle" fill="#26215C" font-family="sans-serif">Acceptance</text>
<line x1="40" y1="200" x2="644" y2="200" stroke="#888780" stroke-width="1.5" opacity="0.5" marker-end="url(#arrowtrack)"/>
<circle cx="40" cy="200" r="3" fill="#888780"/>
<text font-size="11" x="40" y="218" text-anchor="middle" fill="#888780" font-family="sans-serif">idea</text>
<text font-size="11" x="648" y="218" text-anchor="middle" fill="#888780" font-family="sans-serif">production</text>
<line x1="340" y1="185" x2="340" y2="215" stroke="#444441" stroke-width="2" stroke-linecap="round"/>
<text font-size="13" font-weight="500" x="200" y="195" text-anchor="middle" fill="#0F6E56" font-family="sans-serif">Discovery</text>
<text font-size="13" font-weight="500" x="475" y="195" text-anchor="middle" fill="#3C3489" font-family="sans-serif">Delivery</text>
<rect x="80" y="228" width="260" height="110" rx="0" fill="#1D9E75" fill-opacity="0.13"/>
<rect x="340" y="228" width="278" height="110" rx="0" fill="#534AB7" fill-opacity="0.13"/>
<rect x="80" y="228" width="538" height="110" rx="6" fill="none" stroke="#444441" stroke-width="1.5"/>
<text font-size="10" font-weight="500" x="348" y="248" text-anchor="middle" fill="#444441" font-family="sans-serif">AI Product Work</text>
<rect x="258" y="258" width="164" height="44" rx="6" fill="var(--color-background-secondary)" stroke="#888780" stroke-width="1"/>
<text font-size="10" font-weight="500" x="340" y="276" text-anchor="middle" fill="#444441" font-family="sans-serif">Product Artifacts</text>
<text font-size="9" x="340" y="291" text-anchor="middle" fill="#888780" font-family="sans-serif">AI guardrails</text>
<line x1="480" y1="338" x2="480" y2="362" stroke="#3C3489" stroke-width="1" fill="none" marker-end="url(#arrowpurpledown)"/>
<text font-size="9" x="492" y="354" text-anchor="start" fill="#888780" font-family="sans-serif">output</text>
<rect x="380" y="364" width="140" height="40" rx="6" fill="var(--color-background-secondary)" stroke="#3C3489" stroke-width="1"/>
<text font-size="10" x="450" y="388" text-anchor="middle" fill="#26215C" font-family="sans-serif">working product</text>
<line x1="520" y1="384" x2="634" y2="384" stroke="#888780" stroke-width="0.75" stroke-dasharray="4 3" marker-end="url(#arrowcontinue)"/>
<text font-size="9" x="574" y="377" text-anchor="middle" fill="#888780" font-family="sans-serif">engineering scales</text>
</svg>
```

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
