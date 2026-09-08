import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RETAIL_SHOP_URL } from "@/lib/products";

const nav = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/chefs", label: "For Chefs" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-background/92 backdrop-blur-md border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-[1.3rem] leading-none tracking-[0.01em]">Fong Finest</span>
          <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:inline">
            Singapore
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={RETAIL_SHOP_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-primary/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Retail Shop
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className="block h-px w-6 bg-foreground" />
          <span className="block h-px w-6 bg-foreground" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.16em] text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={RETAIL_SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 border border-primary/60 px-4 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              Retail Shop
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
