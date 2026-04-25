import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarDays, ClipboardList } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";
import { unsplash } from "../../lib/unsplash";

export const metadata: Metadata = {
  title: "Event Details | Columbus Turkey Trot",
  description: "Explore race options, event details, and race-day information.",
};

const proposalPoints = [
  "4-mile out-and-back route with a turnaround near the OSU Horseshoe",
  "Walk N' Talk route for casual runners and walkers",
  "Benefiting Easterseals of Central & Southeast Ohio",
];

export default function ServicesPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Race Options",
        subtitle: "Choose the 4-Mile or the Walk N' Talk route and start Thanksgiving with the Columbus Turkey Trot.",
        imageUrl:
          unsplash("https://images.unsplash.com/photo-1461896836934-ffe607ba8211", { width: 2000, quality: 88 }),
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "4-Mile", body: "Our signature out-and-back course with an iconic turnaround near the OSU Horseshoe." },
                { title: "Walk N' Talk", body: "A relaxed option for friends and families to enjoy Thanksgiving morning together." },
                { title: "Community", body: "A festive start to the holiday supporting Easterseals programs for local families." },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
                >
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Race Info
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-tight text-[#F7941E] sm:text-4xl lg:text-5xl">
                  Thanksgiving Day Tradition
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  Friendly competition, community impact, and Thanksgiving tradition in one unforgettable morning.
                </p>

                <div className="mt-7 grid gap-3">
                  {proposalPoints.map((item, index) => {
                    const icons = [
                      <ClipboardList key="clipboard" className="h-4 w-4" strokeWidth={2.4} />,
                      <BriefcaseBusiness key="briefcase" className="h-4 w-4" strokeWidth={2.4} />,
                      <CalendarDays key="calendar" className="h-4 w-4" strokeWidth={2.4} />,
                    ];

                    return (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-4"
                      >
                        <span className="mt-0.5 rounded-full bg-white/20 p-2 text-white">
                          {icons[index]}
                        </span>
                        <p className="text-base leading-7 text-white/90">{item}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Click Here To Register
                    <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                  </Link>
                  <a
                    href={`mailto:${siteContact.emailOperations}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/15 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Click To Volunteer
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/5 p-5 shadow-inner lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Event Notes
                </p>
                <div className="mt-4 space-y-4 text-base leading-7 text-white/90">
                  <p>
                    Advanced packet pickup runs Monday, Nov 17 through Wednesday, Nov 26 at Columbus Running Company.
                  </p>
                  <p>
                    Start times begin at 8:30 am on Thanksgiving Day (Thursday, November 27, 2025).
                  </p>
                  <p>
                    Please, no dogs allowed as a courtesy to other participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </PageShell>
  );
}
