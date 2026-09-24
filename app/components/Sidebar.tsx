"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "../lib/works";

const pages = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkClass = (href: string) =>
    `transition-colors hover:text-ink ${isActive(href) ? "text-ink" : "text-muted"}`;

  return (
    <aside className="sidebar">
      <Link href="/" className="dotted-name block w-fit text-xl font-semibold transition-opacity hover:opacity-70">
        Jana Yan
      </Link>

      {/* Desktop: categories centred in the column, About/Resume pinned to the bottom */}
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-serif md:flex-1 md:flex-col md:items-start md:gap-0">
        <ul className="contents text-base leading-tight md:my-auto md:block md:space-y-5">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/${c.slug}`} className={linkClass(`/${c.slug}`)}>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="contents text-[15px] md:block md:space-y-1">
          {pages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className={linkClass(p.href)}>
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
