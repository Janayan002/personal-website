"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react"; // Required for React.FC

const dottedTextStyle = {
  fontFamily: "Garamond, serif",
  backgroundImage:
    "radial-gradient(circle, #374151 1px, transparent 1.5px)",
  backgroundSize: "3px 3px",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

// --- 1. PROPS INTERFACE (TypeScript Definition) ---
interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  href?: string; // Optional link path
}

// --- 2. ImageCard Component (TypeScript) ---
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  // The core content of the image card (image and overlay)
  const content = (
    <div
      // Adjusted height to h-64 for a more rectangular shape
      className="relative w-full h-96 overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Image element */}
      <img
        src={src}
        alt={alt}
    
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        // // Apply blur and scale transition based on hover state
        className={`object-cover transition-all duration-300 ease-in-out ${
          isHovered ? "blur-sm scale-105" : "blur-0 scale-100"
        }`}
      />

      {/* 2. Overlay container for the title */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* 3. Title text */}
        <h2 className="text-white text-xl font-semibold p-4 text-center select-none">
          {title}
        </h2>
      </div>
    </div>
  );
  
  // Return the content, wrapped in a Link component if 'href' is provided
  return href ? <Link href={href}>{content}</Link> : content;
};

// 3. IMAGE DATA
// Note: I've added href paths for demonstration
const installationImages: ImageCardProps[] = [
  { 
    src: "/4sq1.jpg", 
    alt: "4 Sqaures", 
    title: "How to Play 4 Squares", 
    href: "/digital/4squares" 
  },
  { 
    src: "/lr3posters.jpg", 
    alt: "lazyriver", 
    title: "Lazy River Poster and Booklets", 
    href: "/digital/lazyriver"
  },

    { 
    src: "/shanc.jpeg", 
    alt: "archiveposter", 
    title: "She Has A Nice Car!", 
    href: "/digital/nicecar"
  },
  
  // Add more images as needed...
];
// ----------------------------------------------------------------------

// 4. INSTALLATION PAGE COMPONENT
export default function Installation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 pt-32">


      <header className="fixed top-0 left-0 w-full z-50 bg-white px-8 py-4 sm:px-20 flex justify-between items-center">
            <Link href="/">
                <h1 className="text-xl font-semibold cursor-pointer" style={dottedTextStyle}>
                    jana yan
                </h1>
            </Link>

        <nav className="flex gap-8 text-xl font-semibold items-center">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button style={dottedTextStyle}>
              work
            </button>

            <div
              className={`absolute left-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md transition-all duration-150 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              <Link href="/painting" className="block px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-100">
                Painting
              </Link>
              <Link href="/installation" className="block px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-100">
                Installation
              </Link>
              <Link href="/digital" className="block px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-100">
                Design Works
              </Link>
            </div>
          </div>

          <a href="/about" style={dottedTextStyle}>about</a>
        </nav>
      </header>
      
      {/* IMAGE GRID */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto mt-10">
          
          {/* Map over the image data and render the ImageCard component */}
          {installationImages.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              href={image.href} // Passing the optional link path
            />
          ))}

        </div>
      </div>

    </div>
  );
}