import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { siteContact, siteNav } from "./siteConfig";
import turkeyTrotLogo from "../app/assets/Turkey Trot 2026.png";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  x: Twitter,
} as const;

export default function SiteFooter() {
  return (
    <footer className="mt-0 pt-4 border-t border-white/10 bg-[radial-gradient(circle_at_top,#2a3138,#171c22_55%,#12171d)] px-3 md:px-0">
      <div className="container mx-auto">
        <div className="grid gap-8 pb-8 pt-8 lg:grid-cols-5">
          <div>
            <div className="relative h-36 w-auto overflow-hidden  bg-transparent p-1">
              <Image
                src={turkeyTrotLogo}
                alt="Turkey Trot logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase text-white">Address</h4>
            <p className="mt-2 text-lg leading-7 text-[#d7dee2] sm:text-xl sm:leading-8">
              {siteContact.addressLines[0]}
              <br />
              {siteContact.addressLines[1]}
              <br />
              {siteContact.addressLines[2]}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase text-white">Links</h4>
            <ul className="mt-2 space-y-1 text-lg font-medium capitalize text-[#d7dee2] sm:text-md">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase text-white">Follow Us</h4>
            <div className="mt-3 flex gap-2">
              {siteContact.socials.map(({ key, href, label }) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#ffffff] transition hover:bg-white/20"
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 text-base leading-7 text-[#d7dee2] sm:text-lg sm:leading-8">
              <p className="font-black text-white">Race Day Tips!</p>
              <p>Packet pickup: Advance pickup recommended.</p>
              <p>Start Time: 9:00 am on 10/04/2026.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase text-white">Contact</h4>
            <a
              href={`mailto:${siteContact.emailShowroom}`}
              className="mt-3 block text-lg text-[#d7dee2] transition hover:text-primary sm:text-xl"
            >
              {siteContact.emailShowroom}
            </a>
            <a
              href={siteContact.phoneHref}
              className="mt-2 block text-lg text-[#d7dee2] transition hover:text-primary sm:text-xl"
            >
              {siteContact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#131920] py-4 text-center text-sm font-semibold text-[#c7d1d6]">
        <p>&copy; {new Date().getFullYear()} Turkey Trot. All rights reserved.</p>
        <p className="mt-1 text-xs font-semibold text-[#9fb0b8]">
          Photos via{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            Unsplash
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
