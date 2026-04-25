import type { Metadata } from "next";
import Image from "next/image";

import PageShell from "../../components/PageShell";
import { unsplash } from "../../lib/unsplash";

export const metadata: Metadata = {
  title: "Swag | Columbus Turkey Trot",
  description: "See what race-day swag you'll receive at the Columbus Turkey Trot.",
};

const swagItems = [
  {
    title: "Official Race Shirt",
    body: "Commemorative race shirt included with registration while supplies last.",
    image: unsplash("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", {
      width: 1400,
      quality: 88,
    }),
  },
  {
    title: "Custom Finisher Medal",
    body: "Beautiful custom finisher medal to celebrate your strong finish.",
    image: unsplash("https://images.unsplash.com/photo-1552674605-db6ffd4facb5", {
      width: 1400,
      quality: 88,
    }),
  },
  {
    title: "Race Day Keepsakes",
    body: "Event experience extras and community vibes you'll remember long after race day.",
    image: unsplash("https://images.unsplash.com/photo-1461896836934-ffe607ba8211", {
      width: 1400,
      quality: 88,
    }),
  },
];

export default function SwagPage() {
  return (
    <PageShell
      activeLabel="Swag"
      hero={{
        eyebrow: "Swag",
        title: "Run. Trot. Celebrate.",
        subtitle: "Enjoy race-day swag, a festive finish, and memories you’ll take into the holiday.",
        imageUrl:
          unsplash("https://images.unsplash.com/photo-1552674605-db6ffd4facb5", { width: 2000, quality: 88 }),
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {swagItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              <div className="relative h-44 w-full border-b border-white/10 bg-black/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
