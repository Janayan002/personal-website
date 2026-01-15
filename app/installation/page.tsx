"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";

// --- 1. PROPS INTERFACE ---
interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  href?: string;
}

// --- 2. ImageCard Component ---
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      className="relative w-full cursor-pointer group break-inside-avoid mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image (natural proportions) */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto transition-all duration-300 ease-in-out ${
          isHovered ? "blur-sm scale-[1.02]" : "blur-0 scale-100"
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-xl font-semibold p-4 text-center select-none">
          {title}
        </h2>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

// --- 3. IMAGE DATA ---
const installationImages: ImageCardProps[] = [
  {
    src: "/2x4cover.jpeg",
    alt: "Wooden Installation",
    title: "2x4x5'4in",
    href: "/installation/2x4",
  },
  {
    src: "/roaak2.jpeg",
    alt: "Woven Light Sculpture",
    title: "Room of an Art Kid",
    href: "/installation/roomofanartkid",
  },
  {
    src: "/tfm1.jpeg",
    alt: "Canopy Structure",
    title: "Things I Stole From Mom",
    href: "/installation/tfm",
  },
  {
    src: "/36shirts.jpeg",
    alt: "36 Shirts",
    title: "36 Shirts",
    href: "/installation/36shirts",
  },
];

// --- 4. INSTALLATION PAGE ---
export default function Installation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 pt-32">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white px-8 py-4 sm:px-20 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">Jana Yan</h1>
        </Link>

        <nav className="flex gap-8 text-gray-700 text-base sm:text-lg font-medium">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:underline hover:underline-offset-4">
              Work
            </button>

            <div
              className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md transition-all duration-150 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/painting"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Painting
              </Link>
              <Link
                href="/installation"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Installation
              </Link>
              <Link
                href="/digital"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Design Works
              </Link>
            </div>
          </div>

          <a href="/about" className="hover:underline hover:underline-offset-4">
            About
          </a>
        </nav>
      </header>

      {/* IMAGE MASONRY */}
      <div className="w-full flex justify-center">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-8xl mx-auto mt-10">
          {installationImages.map((image, index) => (
            <ImageCard key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}
