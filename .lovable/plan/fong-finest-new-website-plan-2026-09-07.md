# Fong Finest — new website plan

## What the current site does (reviewed)

fongfinest.com is a small hand-built HTML site: one home page plus three product pages (Del Bocia heritage butter, Shoyu Bros wild garlic shoyu, Ferrier Victorian black winter truffles). The content is genuinely strong — direct-import positioning, "no middleman", cold-chain freshness, SFA/NParks/SPF licensing, real producer partnerships and Instagram links. Ordering runs through an external shop (take.app) and wholesale through WhatsApp.

What holds it back: it reads as a template brochure. Products get one paragraph and a couple of small photos, the producer stories are buried, there is no path for a chef or restaurant buyer, no About story, no seasonality cue beyond a text label, and no visual atmosphere befitting a luxury provisions house.

## The strategy

Position Fong Finest as a curator, not a catalogue. Two clear audiences, one identity:

- **Chefs & restaurants** — trade credibility: cold chain, next-day delivery, licences, direct-producer access, sample requests.
- **Food enthusiasts** — desire: producer stories, texture-led photography, seasonality, how to use each product.

Every product page becomes a producer story with a clear "Order" action out to the existing shop.

## Pages

1. **Home** — cinematic hero, positioning statement, flagship portfolio (3 products, seasonality badge), the Fong Finest advantage (no middleman / cold chain / licensed), producer partners strip, dual call to action (Retail shop · Wholesale enquiry).
2. **Portfolio** — the provisions index, built to grow as new products arrive.
3. **Product pages** (butter, shoyu, truffles) — large imagery, tasting notes, origin, producer credit with links, availability, chef usage suggestions, Order Now to take.app.
4. **About / Our story** — sourcing philosophy, direct-partnership model, licences and certifications, Singapore base.
5. **For chefs & restaurants** — trade page: what we supply, cold-chain and delivery promise, onboarding steps, wholesale enquiry form plus WhatsApp.
6. **Contact** — enquiry form, WhatsApp, retail shop link.

## Ordering and enquiries

Ordering stays external: all buy buttons link to the existing take.app shop and product links. Wholesale gets a proper enquiry form (name, restaurant, role, products of interest, volume, message) alongside the WhatsApp button. No backend is needed for the site itself; the form needs somewhere to send submissions — I will use a simple submission path and confirm with you before wiring email delivery.

## Imagery

Reuse the real product photography from the current site, plus a handful of crafted atmosphere and texture images (kitchen light, marble, truffle earth, butter fold) for the full-bleed sections. Real products always lead; generated shots only set mood.

## Design

Before building I will show you three distinct visual directions to pick from — editorial luxury, dark gallery, or warm artisanal — each rendered as a real preview. Whichever you choose becomes the design system for the whole site: custom typography, restrained palette, generous space, slow reveal motion on scroll. No generic template look.

## Technical notes

- TanStack Start route per page (`/`, `/portfolio`, `/portfolio/$slug` or per-product routes, `/about`, `/chefs`, `/contact`), each with its own title, description and social preview metadata.
- Product content in a typed local data module so new provisions are one entry away.
- Design tokens in `src/styles.css` (oklch), no hardcoded colours; fonts loaded via the root head.
- Existing photos referenced from their current URLs or uploaded as CDN assets; generated images added under `src/assets`.
- Responsive and accessible: single H1 per page, alt text, lazy-loaded imagery, canonical tags.

## Not in scope

Built-in cart, payments, accounts, inventory, or a journal/recipes section — can be added later.
