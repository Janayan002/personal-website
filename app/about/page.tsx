import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    // Centred in the visible area (viewport minus the content column's top/bottom padding)
    <div className="md:flex md:min-h-[calc(100vh-10.5rem)] md:items-center md:justify-center">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,34rem)_minmax(0,22rem)] lg:items-center lg:gap-20">
        <div className="space-y-4">
          <p>
            I am Jana Yan, currently a junior pursuing a BFA in Studio Art at
            Washington University in St. Louis. In my work, I explore the
            relationship between natural and manufactured environments, focusing
            on the lived experience of being within these spaces.
          </p>
          <p>
            I work across different mediums—from painting and sculpture to
            printmaking. I keep my artworks close to the soil, the trees, the
            architectural structures, and the everyday surroundings that shape
            how we move through the world. My work reflects my own encounters
            with the environment, as well as the cultural, social, and
            historical forces that have shaped and transformed it.
          </p>
          <p>
            I strive to create work that remains closely tied to my community,
            grounding my practice in the places and people that shape my life
            experience.
          </p>
        </div>

        <Image
          src="/me.jpeg"
          width={3966}
          height={4256}
          alt="Portrait of Jana Yan"
          priority
          sizes="(min-width: 1024px) 22rem, 100vw"
          className="h-auto w-full max-w-sm"
        />
      </div>
    </div>
  );
}
