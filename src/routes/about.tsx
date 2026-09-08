import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import textureEarth from "@/assets/texture-earth.jpg";
import { WHATSAPP_URL } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Direct Sourcing, Singapore | Fong Finest" },
      {
        name: "description",
        content:
          "How Fong Finest sources gourmet provisions: direct producer partnerships, an unbroken cold chain, and full SFA, NParks and SPF licensing in Singapore.",
      },
      { property: "og:title", content: "Our Story — Direct Sourcing, Singapore | Fong Finest" },
      {
        property: "og:description",
        content: "Direct producer partnerships, an unbroken cold chain, and full licensing.",
      },
    ],
  }),
  component: About,
});

const principles = [
  {
    title: "We meet the maker",
    body: "Every product in our portfolio starts with a relationship — a family dairy, a fermentation house, a truffière. We buy from people, not catalogues.",
  },
  {
    title: "We own the chain",
    body: "As direct importers we control handling from origin to your door. No consolidators, no unexplained gaps, no guessing where a product has been.",
  },
  {
    title: "We refuse volume for its own sake",
    body: "Small, deliberate allocations protect quality and keep our producers doing what makes them exceptional in the first place.",
  },
  {
    title: "We stay accountable",
    body: "Licensed with SFA, NParks and SPF. Documentation, provenance and cold-chain records available on request.",
  },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <Reveal>
          <p className="eyebrow">Our story</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.06]">
            We import the shortest possible distance between a producer and a plate
          </h1>
        </Reveal>
        <Reveal className="mt-12 grid gap-12 md:grid-cols-12" delay={120}>
          <div className="md:col-span-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Fong Finest was built on a simple frustration: extraordinary ingredients kept arriving
              in Singapore diminished — warm, aged in transit, stripped of the aroma that made them
              worth buying.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              So we became the importer. We forge direct, exclusive partnerships with global
              producers, handle the cold chain ourselves, and deliver into professional kitchens and
              serious home kitchens across the island — usually the next day.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="font-display text-2xl leading-snug italic text-primary md:text-3xl">
              "If we can't stand behind how it travelled, we don't sell it."
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={textureEarth}
          alt="Dark forest soil where black winter truffles are unearthed"
          loading="lazy"
          width={1600}
          height={900}
          className="h-[45svh] w-full object-cover md:h-[60svh]"
        />
        <div className="absolute inset-0 bg-background/45" />
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow">How we work</p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="bg-background p-8 md:p-12">
                <p className="font-display text-5xl text-primary/40">0{i + 1}</p>
                <h2 className="mt-6 font-display text-2xl md:text-3xl">{item.title}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <Reveal className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Licences &amp; assurance
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ul className="space-y-6 text-sm leading-relaxed text-muted-foreground">
                <li className="rule-top pt-6">
                  <span className="font-display text-xl text-foreground">SFA licensed</span> — food
                  import and distribution under Singapore Food Agency requirements.
                </li>
                <li className="rule-top pt-6">
                  <span className="font-display text-xl text-foreground">NParks permitted</span> —
                  compliant handling of fresh plant produce, including truffles.
                </li>
                <li className="rule-top pt-6">
                  <span className="font-display text-xl text-foreground">SPF licensed</span> —
                  operating within the relevant regulatory framework, documented end to end.
                </li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/chefs"
                  className="bg-primary px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
                >
                  Trade enquiries
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
