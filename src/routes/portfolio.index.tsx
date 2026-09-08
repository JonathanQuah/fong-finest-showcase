import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Artisanal Provisions | Fong Finest" },
      {
        name: "description",
        content:
          "The Fong Finest portfolio: Del Bocia heritage butter, Shoyu Bros wild garlic shoyu and Victorian black winter truffles, imported direct to Singapore.",
      },
      { property: "og:title", content: "Portfolio — Artisanal Provisions | Fong Finest" },
      {
        property: "og:description",
        content: "A curated portfolio of restaurant-quality provisions, sourced direct from producers.",
      },
      { property: "og:image", content: "https://fongfinest.com/assets/truffle-1.jpg" },
      { name: "twitter:image", content: "https://fongfinest.com/assets/truffle-1.jpg" },
    ],
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <Reveal>
          <p className="eyebrow">The portfolio</p>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.06]">
            A short list, kept deliberately short
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            We carry a product only when we can speak to the producer by name, control the cold
            chain, and taste the difference on the plate. Everything else we decline.
          </p>
        </Reveal>
      </section>

      <section className="rule-top">
        {products.map((product, i) => (
          <Reveal key={product.slug} className="rule-top first:border-t-0">
            <Link
              to="/portfolio/$slug"
              params={{ slug: product.slug }}
              className="group mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-14 md:grid-cols-12 md:px-10 md:py-20"
            >
              <div className={`md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden bg-card">
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className={`md:col-span-6 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  {product.category} · {product.availability}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">{product.name}</h2>
                <p className="mt-3 font-display text-xl italic text-muted-foreground">{product.tagline}</p>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {product.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{product.producer}</span>
                  <span>{product.origin}</span>
                </div>
                <span className="mt-8 inline-block border-b border-primary/60 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  View provision
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-20 text-center md:px-10">
          <Reveal>
            <p className="font-display text-2xl text-muted-foreground md:text-3xl">
              More exclusive provisions arriving soon.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
