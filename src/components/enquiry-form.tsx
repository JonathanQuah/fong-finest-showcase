import { useState } from "react";
import { WHATSAPP_URL, products } from "@/lib/products";

const roles = ["Chef / Kitchen", "Restaurant owner", "Retailer / Grocer", "Hotel / Club", "Other"];

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const toggle = (value: string) =>
    setInterest((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !business.trim() || (!email.trim() && !message.trim())) {
      setError("Please add your name, your business, and how we can reach you.");
      return;
    }
    setError("");
    const lines = [
      "Wholesale enquiry — Fong Finest",
      `Name: ${name}`,
      `Business: ${business}`,
      `Role: ${role}`,
      email ? `Email: ${email}` : "",
      interest.length ? `Interested in: ${interest.join(", ")}` : "",
      volume ? `Indicative volume: ${volume}` : "",
      message ? `Notes: ${message}` : "",
    ].filter(Boolean);
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  };

  const field =
    "w-full border-b border-input bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Your name</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="eyebrow">Business</span>
          <input
            className={field}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Restaurant, group or shop"
          />
        </label>
        <label className="block">
          <span className="eyebrow">Role</span>
          <select className={field} value={role} onChange={(e) => setRole(e.target.value)}>
            {roles.map((r) => (
              <option key={r} value={r} className="bg-card">
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="eyebrow">Email or phone</span>
          <input
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="How we reach you"
          />
        </label>
      </div>

      <fieldset>
        <legend className="eyebrow">Provisions of interest</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {products.map((p) => {
            const active = interest.includes(p.name);
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => toggle(p.name)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="eyebrow">Indicative monthly volume</span>
        <input
          className={field}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="e.g. 10 kg butter, 24 bottles"
        />
      </label>

      <label className="block">
        <span className="eyebrow">Notes</span>
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Delivery windows, sampling requests, anything else"
        />
      </label>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="bg-primary px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Send enquiry
        </button>
        <p className="text-xs text-muted-foreground">
          Opens WhatsApp with your details prefilled — the fastest route to our trade desk.
        </p>
      </div>
    </form>
  );
}
