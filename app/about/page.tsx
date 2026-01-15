"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 pt-32">

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
                                href="/painting"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Painting
                            </Link>
                            <Link
                                href="/installation"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Installation
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







             <main className="pt-32 px-8 sm:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* LEFT TEXT COLUMN */}
          <div className="max-w-md">
            <p className="text-sm text-gray-800 leading-relaxed">
              I am Jana Yan, currently a junior year student pursuing a BFA Studio Art
              degree at Washington University in St. Louis. In my work, I explore the
              relationship between natural and manufactured environments. I focus on
              conveying the lived experience of being within these spaces. I work across different mediums—from 
              painting and sculpture to printmaking.  keep my artworks close to the soil, the trees, the architectural structures, 
              and the everyday surroundings that shape how we move through the world.
              My work reflects my own encounters with the environment, as well as the cultural,
              social, and historical forces that have shaped and transformed it.
              I strive to create work that remains closely tied to my community, grounding my practice in the places and people that shape my life experience.

              <br /><br />
              
            </p>
          </div>

          {/* RIGHT COLUMN (EMPTY OR IMAGE) */}
          <div className="hidden lg:block">
            {/* You can place an image here later */}
            <Image
                              aria-hidden
                                        src="/me.jpeg"
                                        alt="aboutme"
                                        width={400}
                                        height={400}
                                    />
          </div>

        </div>
      </main>
    </div>
  );
}

