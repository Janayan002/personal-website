"use client";
import Image from "next/image";
import Link from "next/link";
import RippleNoise from "./components/RippleNoise";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 pt-32 relative">
      <RippleNoise />

      <h1
        className="fixed top-6 left-8 sm:left-20 z-50 text-3xl font-semibold"
        style={{
          fontFamily: "Garamond, serif",
          backgroundImage:
            "radial-gradient(circle, #374151 1px, transparent 1.5px)",
          backgroundSize: "3px 3px",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Jana Yan
      </h1>

      <a
        href="/about"
        className="fixed top-6 right-8 sm:right-20 z-50 text-lg text-gray-600 hover:text-gray-900"
        style={{ fontFamily: "Garamond, serif" }}
      >
        About
      </a>

      <main className="relative z-10">
        <Link
          href="/installation"
          className="absolute block"
          style={{ top: "23vh", left: "13vw", width: "220px" }}
        >
          <Image
            src="/closet design 1.png"
            alt="Closet Design"
            width={220}
            height={220}
            className="w-full h-auto"
          />
          <p
            className="mt-2 text-base"
            style={{ fontFamily: "Garamond, serif" }}
          >
            <span className="text-blue-700 underline">Hardware</span>{" "}
            <span className="italic text-gray-500">(3d installations)</span>
          </p>
        </Link>

        <Link
          href="/painting"
          className="absolute block"
          style={{ top: "10vh", right: "13vw", width: "220px" }}
        >
          <Image
            src="/painting1.jpg"
            alt="Painting"
            width={220}
            height={220}
            className="w-full h-auto"
          />
          <p
            className="mt-2 text-base"
            style={{ fontFamily: "Garamond, serif" }}
          >
            <span className="text-blue-700 underline">Software</span>{" "}
            <span className="italic text-gray-500">(works on canvas)</span>
          </p>
        </Link>

        <Link
          href="/digital"
          className="absolute block"
          style={{ top: "45vh", left: "60%", transform: "translateX(-50%)", width: "180px" }}
        >
          <Image
            src="/poster1.jpg"
            alt="Poster"
            width={200}
            height={200}
            className="w-full h-auto"
          />

          <p
            className="mt-2 text-base"
            style={{ fontFamily: "Garamond, serif" }}
          >
            <span className="text-blue-700 underline">Frontend</span>{" "}
            <span className="italic text-gray-500">(digital designs)</span>
          </p>

        </Link>
      </main>
    </div>
  );
}
