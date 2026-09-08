export type Product = {
  slug: string;
  name: string;
  producer: string;
  producerUrl?: string;
  instagram?: string;
  instagramUrl?: string;
  origin: string;
  category: string;
  availability: string;
  seasonal: boolean;
  tagline: string;
  summary: string;
  story: string[];
  notes: string[];
  uses: string[];
  heroImage: string;
  gallery: string[];
  orderUrl: string;
};

export const RETAIL_SHOP_URL = "https://take.app/fongfinest";
export const WHATSAPP_URL = "https://wa.me/6587593091";
export const WHATSAPP_NUMBER = "+65 8759 3091";

export const products: Product[] = [
  {
    slug: "heritage-butter",
    name: "Del Bocia Heritage Butter",
    producer: "Del Bocia",
    producerUrl: "https://delbocia.com.au/",
    instagram: "@delbocia",
    instagramUrl: "https://www.instagram.com/delbocia",
    origin: "Melbourne, Australia",
    category: "Dairy",
    availability: "Available year-round",
    seasonal: false,
    tagline: "Artisanally crafted, hand-wrapped with care.",
    summary:
      "Melbourne's premium cultured butter, made to an ancient Italian family recipe from the purest Australian milk.",
    story: [
      "Del Bocia epitomises the harmonious blend of Italian culinary tradition with the finest Australian ingredients — a deep respect for family heritage, and the melding of past and present.",
      "The butter is distinguished by its adherence to an authentic Italian recipe, using only the purest Australian milk from select producers. Eschewing standardisation, it retains the milk's natural characteristics and seasonal nuance.",
      "Each block is hand-wrapped, which is why no two ever look quite the same. What arrives in your kitchen is genuine, pure, and unmistakably its own.",
    ],
    notes: ["Cultured, lactic depth", "Clean grassy finish", "Seasonal milk nuance", "High butterfat"],
    uses: [
      "Finishing sauces and beurre monté",
      "Laminated pastry and viennoiserie",
      "Served simply, with warm bread and salt",
    ],
    heroImage: "https://fongfinest.com/assets/DelBocia_hero1.jpg",
    gallery: [
      "https://fongfinest.com/assets/delbocia_01.jpg",
      "https://fongfinest.com/assets/delbocia_02.jpg",
    ],
    orderUrl: "https://take.app/fongfinest/p/cmt3p95bo000a0ahrozds32z4",
  },
  {
    slug: "wild-garlic-shoyu",
    name: "Wild Garlic Infused Shoyu",
    producer: "Shoyu Bros",
    producerUrl: "https://shoyubros.com/",
    instagram: "@shoyubros",
    instagramUrl: "https://www.instagram.com/shoyubros/",
    origin: "Malaysia",
    category: "Condiments",
    availability: "Available year-round",
    seasonal: false,
    tagline: "The only umami you need.",
    summary:
      "An aged, first-draw soy sauce built on natural fermentation, non-GMO Canadian soybeans, and absolutely no MSG.",
    story: [
      "Arguably one of the finest soy sauces made in Malaysia, this aged shoyu is a revelation — the first in the market to offer such a unique and fragrant profile.",
      "It is crafted as a first-draw soy sauce through natural fermentation, using non-GMO Canadian soybeans and no MSG whatsoever.",
      "The wild garlic infusion is restrained rather than loud: a truly artisanal condiment designed to captivate the most discerning palate and transform whatever it touches.",
    ],
    notes: ["First-draw concentration", "Aged, rounded umami", "Wild garlic perfume", "No MSG, non-GMO"],
    uses: [
      "A final seasoning over sashimi and raw fish",
      "Dressings, tare, and glazes",
      "Butter-basted proteins and roasted vegetables",
    ],
    heroImage: "https://fongfinest.com/assets/shoyubros_og.jpg",
    gallery: [
      "https://fongfinest.com/assets/shoyu-1.jpeg",
      "https://fongfinest.com/assets/shoyu-2.jpg",
      "https://fongfinest.com/assets/shoyu-3.webp",
    ],
    orderUrl: "https://take.app/fongfinest/p/cmszzaup900050ajco7ezk58h",
  },
  {
    slug: "black-winter-truffle",
    name: "Victorian Black Winter Truffle",
    producer: "Ferrier Truffles",
    instagram: "@ferrier.truffles",
    instagramUrl: "https://www.instagram.com/ferrier.truffles/",
    origin: "Victoria, Australia",
    category: "Truffles",
    availability: "Seasonal — June to August",
    seasonal: true,
    tagline: "Earthy, aromatic, and unforgettable.",
    summary:
      "Tuber melanosporum unearthed at the peak of the Victorian winter harvest, flown in for next-day arrival.",
    story: [
      "Prized by top chefs around the globe, our seasonal Premium Victorian Black Winter Truffles offer an intense, earthy aroma and a profoundly rich flavour profile.",
      "Sourced from the pristine, cool climates of Victoria, they are meticulously unearthed at the absolute peak of the winter harvest to ensure exceptional potency.",
      "Because aroma is perishable, truffles move through our cold chain on the shortest possible route: harvest, flight, and your kitchen — with nothing in between.",
    ],
    notes: ["Deep forest floor", "Cocoa and toasted hazelnut", "Firm marbled flesh", "Peak-harvest aroma"],
    uses: [
      "Shaved generously over risotto and handmade pasta",
      "Warm butter, eggs, and aged cheese",
      "Fine meats, rested and finished at the pass",
    ],
    heroImage: "https://fongfinest.com/assets/truffle-1.jpg",
    gallery: [
      "https://fongfinest.com/assets/truffle-4.jpg",
      "https://fongfinest.com/assets/truffle-2.jpg",
      "https://fongfinest.com/assets/truffle-3.jpg",
    ],
    orderUrl: "https://take.app/fongfinest/p/cmt004nlh000f0ahtu1cmnc1p",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
