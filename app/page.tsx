import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import { featuredWorks, workHref } from "./lib/works";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-32">
      {featuredWorks.map((work, i) => {
        const cover = work.images[0];
        return (
          <Reveal key={work.slug}>
            {/* Image with its label to the right (below on mobile); the pair is centred */}
            <Link
              href={workHref(work)}
              className="group mx-auto flex w-full flex-col items-start gap-3 md:w-fit md:flex-row md:items-end md:gap-8"
            >
              <Image
                src={cover.src}
                width={cover.w}
                height={cover.h}
                alt={work.title}
                priority={i < 2}
                sizes="(min-width: 768px) calc(100vw - 480px), 100vw"
                // Size from the aspect ratio, not the file's resolution, so every work is
                // equally tall: fill the screen height, but never wider than the column.
                style={{ "--ar": cover.w / cover.h } as React.CSSProperties}
                className={`h-auto w-full shrink-0 ${work.small ? "md:w-[min(calc(100vw-280px-14rem),calc(50vh*var(--ar)))]" : "md:w-[min(calc(100vw-280px-14rem),calc(85vh*var(--ar)))]"} transition-opacity duration-300 group-hover:opacity-85`}
              />
              <div className="text-sm md:w-48 md:shrink-0">
                <p className="italic">{work.title}</p>
                {work.year && <p className="text-muted">{work.year}</p>}
                {work.materials && <p className="text-muted">{work.materials}</p>}
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
