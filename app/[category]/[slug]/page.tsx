import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import { getWork, workHref, works, worksIn } from "../../lib/works";

type Params = { params: Promise<{ category: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((w) => ({ category: w.category, slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, slug } = await params;
  return { title: getWork(category, slug)?.title };
}

export default async function WorkPage({ params }: Params) {
  const { category, slug } = await params;
  const work = getWork(category, slug);
  if (!work) notFound();

  const siblings = worksIn(work.category);
  const index = siblings.indexOf(work);
  const next = siblings[(index + 1) % siblings.length];

  return (
    <article>
      <header className="mx-auto mb-10 max-w-xl text-center text-sm">
        <h1 className="text-base italic">{work.title}</h1>
        {work.year && <p className="text-muted">{work.year}</p>}
        {work.materials && <p className="text-muted">{work.materials}</p>}
      </header>

      <div className="flex flex-col gap-10 md:gap-16">
        {work.images.map((img, i) => (
          <Reveal key={img.src}>
            <Image
              src={img.src}
              width={img.w}
              height={img.h}
              alt={`${work.title}, image ${i + 1}`}
              priority={i === 0}
              sizes="(min-width: 768px) calc(100vw - 280px), 100vw"
              // Size from the aspect ratio so low-resolution photos match the others
              style={{ "--ar": img.w / img.h } as React.CSSProperties}
              className="mx-auto block h-auto w-full md:w-[min(100%,calc(85vh*var(--ar)))]"
            />
          </Reveal>
        ))}
        {work.video && (
          <Reveal>
            <video
              src={work.video}
              controls
              playsInline
              preload="metadata"
              className="mx-auto block h-auto w-auto max-w-full md:max-h-[85vh]"
            />
          </Reveal>
        )}
      </div>

      {siblings.length > 1 && (
        <nav className="mt-20 flex justify-center gap-8 text-sm text-muted">
          <Link href={`/${work.category}`} className="hover:text-ink">
            ← All {work.category}
          </Link>
          <Link href={workHref(next)} className="hover:text-ink">
            Next: <span className="italic">{next.title}</span> →
          </Link>
        </nav>
      )}
    </article>
  );
}
