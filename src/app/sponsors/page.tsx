import type { Metadata } from "next";
import Link from "next/link";

import PageShell from "../../components/PageShell";
import { unsplash } from "../../lib/unsplash";
import { siteContact } from "@/components/siteConfig";

export const metadata: Metadata = {
  title: "Sponsors | Columbus Turkey Trot",
  description:
    "Meet the sponsors supporting the Columbus Turkey Trot and learn how to sponsor the event.",
};

type Sponsor = {
  name: string;
  logoSrc?: string;
  featured?: boolean;
};

const sponsors: Sponsor[] = [
  {
    name: "Chase Bank",
    logoSrc: "/sponsors/Chase-logo-logotype-1024x768%20(1).avif",
    featured: true,
  },
  {
    name: "Easterseals Central & Southeast Ohio",
    logoSrc: "/sponsors/Central%20and%20Southeast%20Ohio_CMYK%20-%20SM%20300.avif",
  },
  {
    name: "Evernorth Health Services",
    logoSrc: "/sponsors/evn_logo_HS_R_rgb_tempermint.avif",
  },
  {
    name: "Lamar Advertising",
    logoSrc: "/sponsors/Lamar_Advertising_Company_green%26grey_edi.avif",
  },
  {
    name: "ABC 6 / FOX 28",
    logoSrc: "/sponsors/f060bf_fc3d61b1b52d453199d0dd60b5b87cfb~mv2.avif",
  },
  {
    name: "Ultrafit USA",
    logoSrc: "/sponsors/f060bf_2b6f0f27bc8148b6b55ee1549e9a38b6~mv2.avif",
  },
  {
    name: "Columbus Running Company",
    logoSrc: "/sponsors/f060bf_182dc05bc6044a66bdd4a5cd55ab3781~.avif",
  },
  {
    name: "The Shops on Lane Avenue",
    logoSrc: "/sponsors/f060bf_5f1909aef7b14ac187bd5f230aaccf4b_.avif",
  },
  {
    name: "Dick's Sporting Goods",
    logoSrc: "/sponsors/DSGLogo-FlatGreen.avif",
  },
];

function SponsorCard({
  name,
  logoSrc,
  featured,
}: {
  name: string;
  logoSrc?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_34px_rgba(0,0,0,0.12)]",
        featured ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent" />
      </div>

      <div className="relative">
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          {logoSrc ? (
            <div className="grid place-items-center rounded-2xl border border-black/10 bg-white p-4 h-32 sm:h-36">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt={`${name} logo`}
                className="h-20 w-auto max-w-full object-contain sm:h-24"
                loading="lazy"
              />
            </div>
          ) : (
            <p className="mt-3 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Thank you for supporting the Columbus Turkey Trot.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function SponsorsPage() {
  return (
    <PageShell
      activeLabel="Sponsors"
      hero={{
        eyebrow: "Sponsors",
        title: (
          <>
            Our Sponsors
          </>
        ),
        subtitle:
          "We are proud to partner with these organizations that help make Thanksgiving Day race morning possible.",
        imageUrl:
          unsplash("https://images.unsplash.com/photo-1552674605-db6ffd4facb5", { width: 2000, quality: 88 }),
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <section className="rounded-[28px] border border-white/15 bg-[#1d232b] p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  Our Sponsors
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  Thank you to all partners who support the Columbus Turkey Trot.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Race Day Partner
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Athletic Brewing Company
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                This year we are proud to partner with Athletic Brewing Company dedicated to crafting
                delicious non-alcoholic beer you can enjoy anytime and anywhere. Athletic Brewing
                Company will join us on race day offering samples of their various crafted beer.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {sponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  name={sponsor.name}
                  logoSrc={sponsor.logoSrc}
                  featured={sponsor.featured}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto">
          <div className="rounded-[28px] border border-white/15 bg-[#1e252d] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-10">
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-[#F7941E] sm:text-4xl">
              Become A Future Sponsor
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Interested in Sponsoring? Contact David Phillips at{" "}
              <a
                href={`mailto:${siteContact.emailShowroom}`}
                className="font-black text-[#F7941E] underline underline-offset-4"
              >
                {siteContact.emailShowroom}
              </a>
              .
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${siteContact.emailShowroom}`}
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Email About Sponsorships
              </a>
              <Link
                href="/training"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Event Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
