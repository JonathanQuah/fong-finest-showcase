import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { RETAIL_SHOP_URL, WHATSAPP_URL, products } from "@/lib/products";
import heroLarder from "@/assets/hero-larder.jpg";
import kitchenService from "@/assets/kitchen-service.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fong Finest — Exclusive Distribution of Premium Provisions" },
      {
        name: "description",
        content:
          "Singapore's distribution partner for restaurant-quality gourmet ingredients: heritage butter, aged wild garlic shoyu and Victorian black winter truffles.",
      },
      { property: "og:title", content: "Fong Finest — Exclusive Distribution of Premium Provisions" },
      {
        property: "og:description",
        content:
          "Direct from producer to kitchen. Heritage butter, aged shoyu and black winter truffles, on a strict cold chain.",
      },
      { property: "og:image", content: "https://fongfinest.com/assets/DelBocia_hero1.jpg" },
      { name: "twitter:image", content: "https://fongfinest.com/assets/DelBocia_hero1.jpg" },
    ],
  }),
  component: Home,
});

const advantages = [
  {
    title: "No middleman",
    body: "Direct importers, controlling the supply chain from producer to pass — end to end, with nothing lost between.",
  },
  {
    title: "Guaranteed freshness",
    body: "Strict cold-chain handling, prioritised for next-day arrival across Singapore. Aroma and texture intact.",
  },
  {
    title: "Fully licensed",
    body: "Operating under SFA, NParks and SPF licences, so every delivery arrives with paperwork you can trust.",
  },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroLarder}
          alt="Hand-wrapped butter, aged shoyu and black winter truffles on a marble counter at dawn"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/25" />
        <div className="grain relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 md:px-10 md:pb-28">
          <Reveal>
            <p className="eyebrow">Singapore · Est. distribution partner</p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,7vw,6rem)] leading-[1.05]">
              Exclusive distribution of
              <span className="block italic text-primary">premium provisions.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We partner directly with global producers to supply high-end, restaurant-quality
              ingredients to restaurants, chefs, culinary creators and discerning kitchens at home.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={RETAIL_SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-primary px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Retail shop
              </a>
              <Link
                to="/chefs"
                className="border border-border px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Wholesale enquiries
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Our position</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Crafted provisions for the discerning kitchen
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6" delay={120}>
            <p className="font-display text-2xl leading-snug italic text-primary md:text-3xl">
              "Direct imports. Exclusive partnerships."
            </p>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              We specialise in sourcing and distributing high-end, restaurant-quality gourmet
              ingredients for businesses, restaurants and culinary creators. By forging direct,
              exclusive partnerships with global producers, we remove the middleman and bring
              exceptional products straight to your kitchen.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Pristine cold-chain freshness, verified authenticity, and outstanding flavour — the
              three things a kitchen cannot compromise on.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border-b border-primary/60 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Read our story
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The flagship portfolio</p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl">Three provisions, no compromise</h2>
            </div>
            <Link
              to="/portfolio"
              className="border-b border-primary/60 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary"
            >
              View all
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 120}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: product.slug }}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-card">
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 bg-background/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                      {product.availability}
                    </span>
                  </div>
                  <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {product.producer} · {product.origin}
                  </p>
                  <h3 className="mt-3 font-display text-2xl transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            More exclusive provisions arriving soon
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow">The Fong Finest advantage</p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} className="bg-background p-8 md:p-10">
                <p className="font-display text-6xl text-primary/40">0{i + 1}</p>
                <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={kitchenService}
          alt="Chefs plating during service in a dim professional kitchen"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/78" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">For chefs &amp; restaurants</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
              Built for the pass, not the shelf
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              Trade accounts, sampling, seasonal allocation for truffle season, and delivery
              windows that respect service. Tell us what you're cooking and we'll build the list
              around it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/chefs"
                className="bg-primary px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
              >
                Open a trade account
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-border px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <Reveal>
            <p className="eyebrow">Producer partners</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
              {products.map((p) => (
                <span key={p.slug} className="font-display text-2xl text-muted-foreground md:text-3xl">
                  {p.producer}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
