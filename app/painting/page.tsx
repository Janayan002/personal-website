"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";

// --- 1. PROPS INTERFACE ---
interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  onClick?: () => void;
}

// --- 2. IMAGE CARD ---
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group break-inside-avoid"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full transition-all duration-300 ease-in-out ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-xl font-semibold p-4 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

// --- 3. IMAGE DATA ---
const installationImages = [
  { src: "/br1.jpeg", alt: "Sleeping Space #1", title: "Sleeping Space #1" },
  { src: "/br2.jpeg", alt: "Sleeping Space #2", title: "Sleeping Space #2" },
  { src: "/br3.jpeg", alt: "Sleeping Space #3", title: "Sleeping Space #3" },
  { src: "/bike1.jpeg", alt: "When on bike", title: "When on my Bike" },
  { src: "/keepsake.jpg", alt: "Keepsake", title: "Keepsake" },
  { src: "/bathroom.jpg", alt: "Messy Counter", title: "Messy Counter" },
  { src: "/forestpark.jpg", alt: "Forest Park", title: "Trees at Forest Park", href: "/painting/onbike"},


];

function reorderForColumns<T>(items: T[], columnCount: number): T[][] {
  const rows = Math.ceil((items.length) / columnCount);
  const result: T[][] = [];


  for (let col = 0; col < columnCount; col++) {
    const colEls: T[] = []
    for (let row = 0; row < rows; row++) {
      const index = columnCount * row + col;
      if (items[index]) {
        colEls.push(items[index]);
      }
    }
    result.push(colEls)
  }
  return result;
}
// --- 4. PAGE ---
export default function Installation() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const prevImage = () => {
    setActiveIndex((i) =>
      i === 0 ? installationImages.length - 1 : (i ?? 0) - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((i) =>
      i === installationImages.length - 1 ? 0 : (i ?? 0) + 1
    );
  };

  return (
    <div className="font-sans min-h-screen pb-20 sm:p-20 pt-32">

       {/* ---- FIXED HEADER ---- */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white px-8 py-4 sm:px-20 flex justify-between items-center">

            <Link href="/">
                <h1 className="text-xl font-bold cursor-pointer">
                    Jana Yan
                </h1>
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

                        {/* Dropdown box */}
                        <div
                            className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md transition-all duration-150 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                        >
                           <Link
                                href="/installation"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Installation
                            </Link>
                            <Link
                                href="/painting"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Painting
                            </Link>
                            <Link
                                href="/digital"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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

      {/* GRID */}
      <div className="grid grid-cols-3 gap-8 mt-10">
        {reorderForColumns(installationImages, 3).map((colEls, colKey) => (
          <div key={colKey} className="flex flex-col space-y-8 ">
            {colEls.map((img, index)=> (
              <ImageCard
                key={index}
                {...img}
                onClick={() => setActiveIndex(index)}
            />
            ))}
            
          </div>
        ))}
        
      </div>
      {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 mt-10">
        {reorderForColumns(installationImages, 3).map((img, index) => (
          <ImageCard
            key={index}
            {...img}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div> */}

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] p-10 bg-[rgba(0,0,0,0.95)] flex items-center justify-center"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT ARROW */}
            <button
              className="absolute left-[5px] top-1/2 -translate-y-1/2 text-white text-5xl"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* IMAGE */}
            <img
              src={installationImages[activeIndex].src}
              alt={installationImages[activeIndex].alt}
              className="max-h-[80vh] w-auto mx-auto"
            />

            <p className="mt-4 text-white text-center">
              {installationImages[activeIndex].title}
            </p>

            {/* RIGHT ARROW */}
            <button
              className="absolute right-[5px] top-1/2 -translate-y-1/2 text-white text-5xl"
              onClick={nextImage}
            >
              ›
            </button>

            {/* CLOSE */}
            <button
              className="absolute top-[-40px] right-0 text-white text-3xl"
              onClick={() => setActiveIndex(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
