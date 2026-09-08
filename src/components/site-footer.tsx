import { Link } from "@tanstack/react-router";
import { RETAIL_SHOP_URL, WHATSAPP_NUMBER, WHATSAPP_URL, products } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="rule-top bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-4 md:px-10 md:py-20">
        <div className="md:col-span-2">
          <p className="font-display text-3xl leading-tight md:text-4xl">
            Direct imports.
            <br />
            Exclusive partnerships.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Fong Finest is a Singapore-based distributor of high-end, restaurant-quality gourmet
            provisions and artisanal ingredients.
          </p>
        </div>

        <div>
          <p className="eyebrow">Portfolio</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors hover:text-foreground"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/portfolio" className="transition-colors hover:text-foreground">
                All provisions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Enquiries</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={RETAIL_SHOP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Retail shop
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Wholesale — WhatsApp
              </a>
            </li>
            <li>{WHATSAPP_NUMBER}</li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-top">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} Fong Finest</p>
          <p>Licensed with SFA · NParks · SPF</p>
        </div>
      </div>
    </footer>
  );
}
