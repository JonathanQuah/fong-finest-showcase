import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { EnquiryForm } from "@/components/enquiry-form";
import { RETAIL_SHOP_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Retail & Wholesale Enquiries | Fong Finest" },
      {
        name: "description",
        content:
          "Reach Fong Finest in Singapore: shop the retail range online, or send a wholesale enquiry for trade pricing and cold-chain delivery.",
      },
      { property: "og:title", content: "Contact — Retail & Wholesale Enquiries | Fong Finest" },
      {
        property: "og:description",
        content: "Retail orders online, wholesale enquiries direct to our trade desk.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-48">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.06]">
            Two ways in
          </h1>
        </Reveal>
        <Reveal className="mt-14 grid gap-px bg-border md:grid-cols-2" delay={100}>
          <div className="bg-background p-8 md:p-12">
            <p className="eyebrow">Retail</p>
            <h2 className="mt-5 font-display text-3xl">Shop the range</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Order single items for your own kitchen. Delivery across Singapore, cold-chain
              handled.
            </p>
            <a
              href={RETAIL_SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block bg-primary px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
            >
              Retail shop
            </a>
          </div>
          <div className="bg-background p-8 md:p-12">
            <p className="eyebrow">Trade</p>
            <h2 className="mt-5 font-display text-3xl">Wholesale desk</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Restaurants, hotels and retailers: {WHATSAPP_NUMBER}, or use the enquiry form below.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border border-border px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </section>

      <section className="rule-top">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              We read every message ourselves
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Based in Singapore. Trading hours replies, usually within the hour.
            </p>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6" delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
