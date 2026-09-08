import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { EnquiryForm } from "@/components/enquiry-form";
import kitchenService from "@/assets/kitchen-service.jpg";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/products";

export const Route = createFileRoute("/chefs")({
  head: () => ({
    meta: [
      { title: "For Chefs & Restaurants — Wholesale Provisions | Fong Finest" },
      {
        name: "description",
        content:
          "Wholesale gourmet provisions for Singapore kitchens: trade pricing, sampling, truffle-season allocation and cold-chain delivery timed around service.",
      },
      { property: "og:title", content: "For Chefs & Restaurants — Wholesale Provisions | Fong Finest" },
      {
        property: "og:description",
        content: "Trade accounts, sampling and cold-chain delivery for professional kitchens in Singapore.",
      },
    ],
  }),
  component: Chefs,
});

const steps = [
  { title: "Tell us what you cook", body: "Send your menu direction, volumes and delivery windows. No account forms to chase." },
  { title: "Taste before you commit", body: "We arrange samples of anything in the portfolio so your team can judge it at the pass." },
  { title: "Lock your allocation", body: "Seasonal items like truffles are allocated ahead of harvest so you're never left short mid-service." },
  { title: "Delivered around service", body: "Cold-chain delivery prioritised for next-day arrival, timed to land before prep, not during it." },
];

const promises = [
  { label: "Cold chain", value: "Unbroken, temperature-controlled from origin to your door" },
  { label: "Lead time", value: "Next-day priority across Singapore on stocked items" },
  { label: "Seasonal", value: "Victorian truffle allocation, June to August" },
  { label: "Compliance", value: "SFA, NParks and SPF licensed, documents on request" },
];

function Chefs() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={kitchenService}
          alt="Chefs finishing dishes during service"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-52">
          <Reveal>
            <p className="eyebrow">For chefs &amp; restaurants</p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.06]">
              A trade desk that answers before service
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We supply restaurants, hotels, private chefs and specialty retailers across Singapore
              with provisions we import ourselves — so pricing, freshness and supply all come from
              one place.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block bg-primary px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
            >
              WhatsApp the trade desk
            </a>
          </Reveal>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-px bg-border md:grid-cols-4">
            {promises.map((item, i) => (
              <Reveal key={item.label} delay={i * 90} className="bg-background p-8">
                <p className="eyebrow">{item.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule-top">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow">Onboarding</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Four steps, no paperwork theatre</h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li" className="rule-top pt-6">
                <p className="font-display text-5xl text-primary/40">0{i + 1}</p>
                <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="rule-top" id="enquiry">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Wholesale enquiry</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Tell us what your kitchen needs
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Prefer to talk? Message us directly at {WHATSAPP_NUMBER} — we reply during trading
              hours, usually within the hour.
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
