import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Provision unavailable — Fong Finest" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.producer} | Fong Finest`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary },
        { property: "og:image", content: product.heroImage },
        { name: "twitter:image", content: product.heroImage },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <section className="relative min-h-[80svh] overflow-hidden">
        <img
          src={product.heroImage}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/30" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-36 md:px-10 md:pb-20">
          <Reveal>
            <Link
              to="/portfolio"
              className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
            >
              ← Portfolio
            </Link>
            <p className="eyebrow mt-8">
              {product.category} · {product.availability}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.06]">
              {product.name}
            </h1>
            <p className="mt-5 font-display text-2xl italic text-primary md:text-3xl">
              "{product.tagline}"
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-7">
            {product.story.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug md:text-3xl"
                    : "mt-6 text-base leading-relaxed text-muted-foreground"
                }
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="md:col-span-4 md:col-start-9" delay={120}>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Producer</dt>
                <dd className="mt-2">
                  {product.producerUrl ? (
                    <a
                      href={product.producerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-primary/50 pb-0.5 hover:text-primary"
                    >
                      {product.producer}
                    </a>
                  ) : (
                    product.producer
                  )}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Origin</dt>
                <dd className="mt-2 text-muted-foreground">{product.origin}</dd>
              </div>
              <div>
                <dt className="eyebrow">Availability</dt>
                <dd className="mt-2 text-muted-foreground">{product.availability}</dd>
              </div>
              {product.instagram ? (
                <div>
                  <dt className="eyebrow">Follow the maker</dt>
                  <dd className="mt-2">
                    <a
                      href={product.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-primary/50 pb-0.5 hover:text-primary"
                    >
                      {product.instagram}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={product.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-primary px-8 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Order now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-border px-8 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                Wholesale volumes
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
          <Reveal>
            <p className="eyebrow">Tasting notes</p>
            <ul className="mt-7 space-y-4">
              {product.notes.map((note) => (
                <li key={note} className="rule-top pt-4 font-display text-xl">
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">In the kitchen</p>
            <ul className="mt-7 space-y-4">
              {product.uses.map((use) => (
                <li key={use} className="rule-top pt-4 text-base leading-relaxed text-muted-foreground">
                  {use}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {product.gallery.map((image, i) => (
              <Reveal key={image} delay={i * 120} as="figure">
                <div className="aspect-[4/5] overflow-hidden bg-card">
                  <img
                    src={image}
                    alt={`${product.name} — detail ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <Reveal>
            <p className="eyebrow">Also in the portfolio</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 120}>
                <Link to="/portfolio/$slug" params={{ slug: other.slug }} className="group block">
                  <div className="aspect-[16/10] overflow-hidden bg-card">
                    <img
                      src={other.heroImage}
                      alt={other.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h2 className="mt-6 font-display text-2xl transition-colors group-hover:text-primary">
                    {other.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{other.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
