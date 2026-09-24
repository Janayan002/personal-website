import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../components/Reveal";
import { categories, workHref, worksIn, type Category, type Work } from "../lib/works";

type Params = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  return { title: categories.find((c) => c.slug === category)?.label };
}

// Deal works into columns left to right (1st → col 1, 2nd → col 2, …), so the
// reading order runs across rows while each column keeps even, masonry-style gaps.
function toColumns<T>(items: T[], count: number): T[][] {
  const cols: T[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
}

// One arrangement per breakpoint; CSS shows the one that fits the screen.
const layouts = [
  { count: 1, className: "grid sm:hidden" },
  { count: 2, className: "hidden sm:grid lg:hidden" },
  { count: 3, className: "hidden lg:grid" },
];

function WorkCard({ work, priority }: { work: Work; priority: boolean }) {
  const cover = work.images[0];
  return (
    <Reveal>
      <Link href={workHref(work)} className="group block">
        <Image
          src={cover.src}
          width={cover.w}
          height={cover.h}
          alt={work.title}
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="h-auto w-full transition-opacity duration-300 group-hover:opacity-85"
        />
        <p className="mt-3 text-sm">
          <span className="italic">{work.title}</span>
          {work.year && <span className="text-muted">, {work.year}</span>}
        </p>
      </Link>
    </Reveal>
  );
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  if (!categories.some((c) => c.slug === category)) notFound();
  const list = worksIn(category as Category);

  return layouts.map(({ count, className }) => (
    <div
      key={count}
      className={`${className} items-start gap-8`}
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {toColumns(list, count).map((column, c) => (
        <div key={c} className="flex flex-col gap-12">
          {column.map((work, r) => (
            // Preload only the first row of the desktop layout
            <WorkCard key={work.slug} work={work} priority={count === 3 && r === 0} />
          ))}
        </div>
      ))}
    </div>
  ));
}
