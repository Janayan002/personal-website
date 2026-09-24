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
      { src: "/remainingbody.jpg", w: 3551, h: 4821 },
      { src: "/remaining1.jpeg", w: 5712, h: 4284 },
      { src: "/remaining2.jpeg", w: 5712, h: 4284 },
      { src: "/remaining3.jpeg", w: 4284, h: 5712 },
      { src: "/remaining4.jpeg", w: 4284, h: 5712 },
      { src: "/remaining5.jpeg", w: 3551, h: 4821 },
      { src: "/remaining6.jpeg", w: 4284, h: 5712 },
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
    video: "/kichen knives/IMG_1214.mov",
  },
  {
    slug: "2x4",
    title: "2x4x5′4″",
    category: "installation",
    year: "2025",
    materials: "Wood, string, wood stain",
    images: [
      { src: "/2x4cover.jpeg", w: 5712, h: 4284 },
      { src: "/2x4photo2.jpeg", w: 4690, h: 3518 },
      { src: "/2x4photo3.jpeg", w: 5712, h: 4284 },
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
      { src: "/roaak2.jpeg", w: 4211, h: 5615 },
      { src: "/roaak1.jpeg", w: 3856, h: 5143 },
      { src: "/roaak3.jpeg", w: 4284, h: 5712 },
      { src: "/roaak4.jpeg", w: 2871, h: 3827 },
      { src: "/roaak5.jpeg", w: 4284, h: 5712 },
      { src: "/roaak6.jpeg", w: 3177, h: 4432 },
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
      { src: "/tfm1.jpeg", w: 3766, h: 5449 },
      { src: "/tfm2.jpeg", w: 4072, h: 5415 },
      { src: "/tfm3.jpeg", w: 3490, h: 4709 },
      { src: "/tfm4.jpeg", w: 5712, h: 4284 },
      { src: "/tfm5.jpeg", w: 3313, h: 5246 },
    ],
  },
  {
    slug: "36shirts",
    title: "36 Shirts",
    category: "installation",
    year: "2025",
    materials: "T-shirts, paint",
    images: [
      { src: "/36shirts.jpeg", w: 2743, h: 2983 },
      { src: "/36s1.jpeg", w: 5712, h: 4284 },
      { src: "/36s2.jpeg", w: 5712, h: 4284 },
      { src: "/36s3.jpeg", w: 5712, h: 4284 },
      { src: "/36s4.jpeg", w: 5712, h: 4284 },
      { src: "/36s5.jpeg", w: 5712, h: 4284 },
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
      { src: "/brick2.jpeg", w: 5712, h: 4284 },
      { src: "/brick3.jpeg", w: 5712, h: 4284 },
      { src: "/brick4.jpeg", w: 5712, h: 4284 },
    ],
  },

  // ---- Painting ----
  {
    slug: "sleepingspace1",
    title: "Sleeping Space #1",
    category: "painting",
    images: [{ src: "/br1.jpeg", w: 3529, h: 2428 }],
  },
  {
    slug: "sleepingspace2",
    title: "Sleeping Space #2",
    category: "painting",
    featured: 6,
    small: true,
    images: [{ src: "/br2.jpeg", w: 2773, h: 2096 }],
  },
  {
    slug: "sleepingspace3",
    title: "Sleeping Space #3",
    category: "painting",
    images: [{ src: "/br3.jpeg", w: 3974, h: 2979 }],
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
      { src: "/bike1.jpeg", w: 5157, h: 3273 },
      { src: "/bike2.jpeg", w: 3838, h: 5117 },
      { src: "/bike3.jpeg", w: 2051, h: 2735 },
      { src: "/bike4.jpeg", w: 3821, h: 5095 },
      { src: "/bike5.jpeg", w: 5315, h: 3986 },
      { src: "/bike6.jpeg", w: 4074, h: 4191 },
    ],
  },
  {
    slug: "keepsake",
    title: "Keepsake",
    category: "painting",
    images: [{ src: "/keepsake.jpg", w: 2747, h: 2161 }],
  },
  {
    slug: "messycounter",
    title: "Messy Counter",
    category: "painting",
    images: [{ src: "/bathroom.jpg", w: 2128, h: 2660 }],
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
      { src: "/4sq2.jpg", w: 3600, h: 2700 },
      { src: "/4sq3.jpg", w: 3252, h: 2466 },
      { src: "/4sq4.jpg", w: 2364, h: 1827 },
      { src: "/4sq5.jpg", w: 3600, h: 2700 },
      { src: "/4sq6.jpg", w: 2988, h: 2268 },
    ],
  },
  {
    slug: "lazyriver",
    title: "Lazy River Poster and Booklets",
    category: "design",
    year: "2024",
    materials: "Paper, printed images",
    images: [{ src: "/lr3posters.jpg", w: 10200, h: 6600 }],
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
