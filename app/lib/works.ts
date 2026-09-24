// Single source of truth for every piece of work on the site.
// Home, category and project pages are all generated from this list —
// to add a project, add an entry here and drop its images in /public.

export type Category = "installation" | "painting" | "design";

export const categories: { slug: Category; label: string }[] = [
  { slug: "installation", label: "Installation" },
  { slug: "painting", label: "Painting" },
  { slug: "design", label: "Design" },
];

export type Img = { src: string; w: number; h: number };

export type Work = {
  slug: string;
  title: string;
  category: Category;
  year?: string;
  materials?: string;
  images: Img[]; // first image is the cover
  video?: string;
  // Order on the home page; omit to leave it off the home page.
  featured?: number;
  // Show the image at a reduced size on the home page.
  small?: boolean;
};

export const works: Work[] = [
  // ---- Installation ----
  {
    slug: "remaining",
    title: "Remaining",
    category: "installation",
    year: "2026",
    materials: "Metal, plaster, spray foam, fabric, wire, silicone",
    featured: 3,
    images: [
      { src: "/remainingbody.jpg", w: 1767, h: 2400 },
      { src: "/remaining1.jpeg", w: 2400, h: 1800 },
      { src: "/remaining2.jpeg", w: 2400, h: 1800 },
      { src: "/remaining3.jpeg", w: 1800, h: 2400 },
      { src: "/remaining4.jpeg", w: 1800, h: 2400 },
      { src: "/remaining5.jpeg", w: 1767, h: 2400 },
      { src: "/remaining6.jpeg", w: 1800, h: 2400 },
    ],
  },
  {
    slug: "kitchenknives",
    title: "Kitchen Knives",
    category: "installation",
    year: "2026",
    materials: "Steel",
    featured: 5,
    images: [{ src: "/kichen knives/IMG_2700.jpg", w: 933, h: 1501 }],
    video: "/kichen knives/IMG_1214.mp4",
  },
  {
    slug: "2x4",
    title: "2x4x5′4″",
    category: "installation",
    year: "2025",
    materials: "Wood, string, wood stain",
    images: [
      { src: "/2x4cover.jpeg", w: 2400, h: 1800 },
      { src: "/2x4photo2.jpeg", w: 2400, h: 1800 },
      { src: "/2x4photo3.jpeg", w: 2400, h: 1800 },
    ],
  },
  {
    slug: "roomofanartkid",
    title: "Room of an Art Kid",
    category: "installation",
    year: "2025",
    materials: "Metal, paper, ink",
    featured: 4,
    images: [
      { src: "/roaak2.jpeg", w: 1800, h: 2400 },
      { src: "/roaak1.jpeg", w: 1799, h: 2400 },
      { src: "/roaak3.jpeg", w: 1800, h: 2400 },
      { src: "/roaak4.jpeg", w: 1800, h: 2400 },
      { src: "/roaak5.jpeg", w: 1800, h: 2400 },
      { src: "/roaak6.jpeg", w: 1720, h: 2400 },
    ],
  },
  {
    slug: "tfm",
    title: "Things That I Stole From Mom",
    category: "installation",
    year: "2025",
    materials: "Wood, fabric, ink, paper",
    featured: 1,
    images: [
      { src: "/tfm1.jpeg", w: 1658, h: 2400 },
      { src: "/tfm2.jpeg", w: 1804, h: 2400 },
      { src: "/tfm3.jpeg", w: 1778, h: 2400 },
      { src: "/tfm4.jpeg", w: 2400, h: 1800 },
      { src: "/tfm5.jpeg", w: 1515, h: 2400 },
    ],
  },
  {
    slug: "36shirts",
    title: "36 Shirts",
    category: "installation",
    year: "2025",
    materials: "T-shirts, paint",
    images: [
      { src: "/36shirts.jpeg", w: 2207, h: 2400 },
      { src: "/36s1.jpeg", w: 2400, h: 1800 },
      { src: "/36s2.jpeg", w: 2400, h: 1800 },
      { src: "/36s3.jpeg", w: 2400, h: 1800 },
      { src: "/36s4.jpeg", w: 2400, h: 1800 },
      { src: "/36s5.jpeg", w: 2400, h: 1800 },
    ],
  },
  {
    slug: "brick",
    title: "Brick Monument",
    category: "installation",
    year: "2025",
    materials: "Steel, home-made paper clay, clay, leaves",
    images: [
      { src: "/brick1.jpeg", w: 876, h: 1306 },
      { src: "/brick2.jpeg", w: 2400, h: 1800 },
      { src: "/brick3.jpeg", w: 2400, h: 1800 },
      { src: "/brick4.jpeg", w: 2400, h: 1800 },
    ],
  },

  // ---- Painting ----
  {
    slug: "sleepingspace1",
    title: "Sleeping Space #1",
    category: "painting",
    images: [{ src: "/br1.jpeg", w: 2400, h: 1651 }],
  },
  {
    slug: "sleepingspace2",
    title: "Sleeping Space #2",
    category: "painting",
    featured: 6,
    small: true,
    images: [{ src: "/br2.jpeg", w: 2400, h: 1814 }],
  },
  {
    slug: "sleepingspace3",
    title: "Sleeping Space #3",
    category: "painting",
    images: [{ src: "/br3.jpeg", w: 2400, h: 1799 }],
  },
  {
    slug: "refraction",
    title: "Refraction",
    category: "painting",
    featured: 2,
    small: true,
    year: "2026",
    materials: "Oil on canvas",
    images: [{ src: "/refraction2.jpeg", w: 2011, h: 1590 }],
  },
  {
    slug: "onbike",
    title: "When on my Bike",
    category: "painting",
    year: "2025",
    materials: "Wood, oil paint, paper clay",
    images: [
      { src: "/bike1.jpeg", w: 2400, h: 1523 },
      { src: "/bike2.jpeg", w: 1800, h: 2400 },
      { src: "/bike3.jpeg", w: 1799, h: 2400 },
      { src: "/bike4.jpeg", w: 1800, h: 2400 },
      { src: "/bike5.jpeg", w: 2400, h: 1800 },
      { src: "/bike6.jpeg", w: 2333, h: 2400 },
    ],
  },
  {
    slug: "keepsake",
    title: "Keepsake",
    category: "painting",
    images: [{ src: "/keepsake.jpg", w: 2400, h: 1888 }],
  },
  {
    slug: "messycounter",
    title: "Messy Counter",
    category: "painting",
    images: [{ src: "/bathroom.jpg", w: 1920, h: 2400 }],
  },
  {
    slug: "forestpark",
    title: "Trees at Forest Park",
    category: "painting",
    images: [{ src: "/forestpark.jpg", w: 2253, h: 1596 }],
  },

  // ---- Design ----
  {
    slug: "4squares",
    title: "How to Play 4 Squares",
    category: "design",
    year: "2024",
    materials: "Paper, printed images, colored pencil",
    images: [
      { src: "/4sq1.jpg", w: 1131, h: 1688 },
      { src: "/4sq2.jpg", w: 2400, h: 1800 },
      { src: "/4sq3.jpg", w: 2400, h: 1820 },
      { src: "/4sq4.jpg", w: 2364, h: 1827 },
      { src: "/4sq5.jpg", w: 2400, h: 1800 },
      { src: "/4sq6.jpg", w: 2400, h: 1821 },
    ],
  },
  {
    slug: "lazyriver",
    title: "Lazy River Poster and Booklets",
    category: "design",
    year: "2024",
    materials: "Paper, printed images",
    images: [{ src: "/lr3posters.jpg", w: 2400, h: 1553 }],
  },
  {
    slug: "nicecar",
    title: "“She Has a Nice Car!” Archive Poster",
    category: "design",
    year: "2024",
    materials: "Paper, images",
    images: [{ src: "/shanc.jpeg", w: 1024, h: 1280 }],
  },
];

export const featuredWorks = works
  .filter((w) => w.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);

export const worksIn = (category: Category) =>
  works.filter((w) => w.category === category);

export const getWork = (category: string, slug: string) =>
  works.find((w) => w.category === category && w.slug === slug);

export const workHref = (w: Work) => `/${w.category}/${w.slug}`;
