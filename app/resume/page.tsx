import type { Metadata } from "next";
import Link from "next/link";
import { categories, workHref, works } from "../lib/works";

export const metadata: Metadata = { title: "Resume" };

type Entry = { year: string; text: string };

// Fill these in — sections with no entries are hidden.
const education: Entry[] = [
  { year: "Current", text: "BFA, Studio Art — Washington University in St. Louis" },
];
const exhibitions: Entry[] = [];
const awards: Entry[] = [];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-2 border-t border-rule pt-4 sm:grid-cols-[10rem_1fr]">
      <h2 className="text-muted">{title}</h2>
      <div className="space-y-1">{children}</div>
    </section>
  );
}

function EntryList({ title, entries }: { title: string; entries: Entry[] }) {
  if (entries.length === 0) return null;
  return (
    <Section title={title}>
      {entries.map((e) => (
        <p key={e.text} className="grid grid-cols-[5rem_1fr] gap-4">
          <span className="text-muted">{e.year}</span>
          <span>{e.text}</span>
        </p>
      ))}
    </Section>
  );
}

export default function Resume() {
  return (
    <div className="max-w-3xl space-y-10">
      <EntryList title="Education" entries={education} />
      <EntryList title="Exhibitions" entries={exhibitions} />
      <EntryList title="Awards" entries={awards} />

      {categories.map((c) => (
        <Section key={c.slug} title={`Selected ${c.label}`}>
          {works
            .filter((w) => w.category === c.slug)
            .map((w) => (
              <p key={w.slug} className="grid grid-cols-[5rem_1fr] gap-4">
                <span className="text-muted">{w.year ?? ""}</span>
                <Link href={workHref(w)} className="hover:underline underline-offset-4">
                  <span className="italic">{w.title}</span>
                  {w.materials && <span className="text-muted">. {w.materials}</span>}
                </Link>
              </p>
            ))}
        </Section>
      ))}
    </div>
  );
}
