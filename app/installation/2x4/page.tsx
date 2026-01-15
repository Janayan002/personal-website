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







             <div className="mt-12 ml-32 h-full">
                <h1 className="text-3xl font-bold">2x4x5' 4</h1>

                <div className="flex flex gap-10 mt-8">
                    <div className="">
                        <Image
                            aria-hidden
                            src="/2x4cover.jpeg"
                            alt="meow"
                            width={800}
                            height={800}
                        />
                    </div>


                    <div className="text-sm text-gray-800 leading-relaxed">
                        <p className="font-semibold">Material:</p>
                        <p>Wood, string, wood stain</p>
                        <br></br>
                        <p>09/12/2025</p>
                    </div>
                </div>

                <div className="mt-8">
                        <Image
                            aria-hidden
                            src="/2x4photo2.jpeg"
                            alt="meow"
                            width={800}
                            height={800}
                        />
                </div>

                <div className="mt-8">
                        <Image
                            aria-hidden
                            src="/2x4photo3.jpeg"
                            alt="meow"
                            width={800}
                            height={800}
                        />
                    </div>


            </div>
        </div>




    )
}