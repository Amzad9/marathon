import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Flag, MapPin, ShieldCheck, Trophy, Waves } from "lucide-react";

import PageShell from "../../components/PageShell";
import { unsplash } from "../../lib/unsplash";

export const metadata: Metadata = {
  title: "Event Details | Columbus Turkey Trot",
  description: "Race details for the Columbus Turkey Trot.",
};

const distances = [
  {
    title: "4-Mile Turkey Trot",
    miles: "4 miles",
    startTime: "8:30 AM",
    body: "Our signature out-and-back course with an iconic turnaround near the OSU Horseshoe.",
  },
  {
    title: "Walk N' Talk",
    miles: "2.3 miles",
    startTime: "8:45 AM",
    body: "A casual option for friends and families to enjoy Thanksgiving morning together.",
  },
];

const eventFlow = [
  {
    title: "40th Anniversary Year",
    body: "Celebrate this milestone year with updated course options and race-day experiences.",
    icon: <Flag className="h-4 w-4" />,
  },
  {
    title: "Swag + Medal",
    body: "This year includes a long sleeve 1/4 zip and custom finisher's medal.",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: "Community Impact",
    body: "Every registration supports Easterseals clients and Early Intervention students.",
    icon: <Trophy className="h-4 w-4" />,
  },
];

const raceDayGuidelines = [
  "Please, no dogs allowed as a courtesy to other participants.",
  "Only registered participants may race with an assigned bib number.",
  "Bring your bib and arrive early for smooth start-area flow.",
  "Follow volunteer directions and posted race-day signage.",
];

export default function EventDetailsPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Turkey Trot Details",
        subtitle: "Kick off Thanksgiving Day with a festive run or walk supporting Easterseals of Central & Southeast Ohio.",
        imageUrl:
          unsplash("https://images.unsplash.com/photo-1461896836934-ffe607ba8211", { width: 2000, quality: 88 }),
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-base uppercase tracking-[0.08em] text-white/90 sm:text-xl">
            Starting line - The Shops on Lane Avenue (1675 W. Lane Ave, Columbus, OH 43221)
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {distances.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-[#1e252d] p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {item.title} ({item.miles})
                </h2>
                <p className="mt-1 text-2xl font-black uppercase text-white sm:text-3xl">
                  Start Time at {item.startTime}
                </p>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
                <div className="mt-4">
                  <Link
                    href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-lg font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Register Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-12">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-4xl">
            Race At A Glance
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <CalendarDays className="h-4 w-4" /> Date
              </p>
              <p className="mt-2 text-lg text-white">Thursday, November 27, 2025 (Thanksgiving Day)</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <MapPin className="h-4 w-4" /> Location
              </p>
              <p className="mt-2 text-lg text-white">The Shops on Lane Avenue</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <Trophy className="h-4 w-4" /> Start Time
              </p>
              <p className="mt-2 text-lg text-white">Start times begin at 8:30 AM</p>
            </div>
          </div>

          <div className="mt-7">
            <Link
              href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
            >
              Click Here To Register
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-4xl">
            Race Day Flow
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {eventFlow.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#F7941E]">
                  {item.icon}
                  Event Flow
                </p>
                <h4 className="mt-3 text-xl font-black uppercase tracking-tight text-white">{item.title}</h4>
                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-8">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8 lg:col-span-7">
            <h3 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-4xl">
              Pace And Corrals
            </h3>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              The 4-mile race uses a new out-and-back route. Walk N&apos; Talk participants follow a
              shorter course made for casual runners and walkers.
            </p>
            <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Review the course maps before race day and choose the option that best matches your
              goals.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8 lg:col-span-5">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Rules & Safety</h3>
            <ul className="mt-4 space-y-3">
              {raceDayGuidelines.map((rule) => (
                <li
                  key={rule}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/85">
              <ShieldCheck className="h-4 w-4 text-[#F7941E]" />
              Follow volunteer direction and official signage throughout race morning.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
