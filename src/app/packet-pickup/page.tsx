import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin, ShieldCheck } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Packet Pickup | Turkey Trot",
  description: "Packet pickup times and race-day pickup details for Turkey Trot.",
};

const pickupDates = [
  "Monday, Nov 17 - Wednesday, Nov 26 | Columbus Running Company",
  "Tuesday, Nov 18 and Tuesday, Nov 25 | Chase Bank (4:00 PM - 6:00 PM)",
  "Sunday, Nov 23 (one day only) | The Shops on Lane (Noon - 3:00 PM)",
];

const checklistItems = [
  "Photo ID (recommended for faster check-in)",
  "Registration confirmation email on your phone",
  "Runner name and event distance (4-Mile, Walk N' Talk, or Tot Trot)",
  "Comfortable timing to avoid race-morning lines",
];

const proxyRules = [
  "A friend or family member may pick up your packet.",
  "Share your full name and registered distance with your proxy.",
  "Proxies should bring their own ID and your registration confirmation.",
  "Only the registered runner may race with their assigned bib.",
];

const additionalPickupLocations = [
  {
    name: "Chase Bank",
    dates: "Tuesday, November 18th and Tuesday, November 25th",
    address: "3250 Tremont Road, Upper Arlington",
    hours: "4:00 PM - 6:00 PM",
  },
  {
    name: "The Shops on Lane Avenue",
    dates: "November 23rd (one day only)",
    address: "1675 W. Lane Ave.",
    hours: "Noon - 3:00 PM",
  },
];

const vendorNotes = [
  "Chan Sweets & What's the Sip are back with hot Thanksgiving favorites, including coffee, tea, sweet potato pies, and more.",
  "Pre-order an exclusive $16 combo: whole sweet potato pie OR one dozen sweet potato honey bun bites, plus one 8 oz. hot beverage.",
  "Pre-order by Friday, Nov. 14, 2025 and pick up on Thursday, Nov. 27, 2025 (Race Day).",
  "Visit the Sweet Pit Stop for additional hot drinks and sweets available a la carte.",
];

export default function PacketPickupPage() {
  return (
    <PageShell
      activeLabel="Packet Pickup"
      hero={{
        eyebrow: "Packet Pickup",
        title: "Pick Up Early, Race Smoothly",
        subtitle: "Use one of our pickup windows to save time and start race morning stress-free.",
        imageUrl:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1800&q=80",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-4xl">
              Pickup Windows
            </h2>
            <ul className="mt-6 space-y-3">
              {pickupDates.map((item) => (
                <li key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white/90">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              If you cannot attend, a friend or family member may pick up your packet for you.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Quick Notes</h3>
            <div className="mt-5 space-y-4 text-white/90">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#F7941E]" /> The Shops on Lane Avenue
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#F7941E]" /> Race-day pickup opens early Thanksgiving morning
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#F7941E]" /> Keep your bib handy on race day
              </p>
            </div>
            <div className="mt-7">
              <Link
                href="/questions"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-4xl">
              Additional Packet Pickup Locations
            </h2>
            <div className="mt-6 grid gap-4">
              {additionalPickupLocations.map((location) => (
                <article
                  key={location.name}
                  className="rounded-2xl border border-white/15 bg-[#1e252d] px-5 py-4 text-white/90"
                >
                  <p className="text-lg font-black text-white">{location.name}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.08em] text-[#F7941E]">
                    {location.dates}
                  </p>
                  <p className="mt-3 flex items-start gap-2 text-base">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#F7941E]" />
                    {location.address}
                  </p>
                  <p className="mt-2 text-base">
                    <span className="font-semibold">Hours:</span> {location.hours}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-5">
              <a
                href={siteContact.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Open Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Vendors</h3>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Interested in being one of our food truck vendors? Contact David Phillips at{" "}
              <a
                href="mailto:dphillips@easterseals-cseohio.org"
                  className="font-semibold text-[#F7941E] underline decoration-[#F7941E]/35 underline-offset-4"
              >
                dphillips@easterseals-cseohio.org
              </a>
              .
            </p>
            <ul className="mt-5 space-y-3">
              {vendorNotes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Pre-Order Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-4xl">
            Picking Up For Someone Else
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            We support proxy pickup to make race weekend easier for participants.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {proxyRules.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/15 bg-[#1e252d] px-5 py-4 text-white/90"
              >
                {item}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-[#1e252d] p-5">
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#F7941E]">
              <ShieldCheck className="h-4 w-4" />
              Important Policy Notes
            </p>
            <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Race entries are non-refundable. For safety and accurate timing, unofficial bib
              transfers are not allowed.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">What To Bring</h3>
              <ul className="mt-4 space-y-3">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {item}
                </li>
              ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
                >
                  Click Here To Register
                </Link>
                <Link
                  href="/questions"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
                >
                  Ask A Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
