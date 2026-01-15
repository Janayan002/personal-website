"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 pt-32">


      <header className="fixed top-0 left-0 w-full z-50 bg-white px-8 py-4 sm:px-20 flex justify-between items-center">
      <h1 className="text-xl font-bold">
       Jana Yan
      </h1>
  

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
              className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md transition-all duration-150 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
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
      
      
        <main className="flex items-center justify-center row-start-2">
          <Image
            aria-hidden
            src="/photo1.jpg"
            alt="meow"
            width={500}
          height={500}
          />
        </main>
        
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"

          
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
