import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarDays, ClipboardList } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Events | Turkey Trot",
  description: "Explore race distances, event details, and race day information.",
};

const proposalPoints = [
  "40th Anniversary updates for the 2026 Chase Columbus Turkey Trot",
  "New out-and-back 4-mile route near the historic OSU Horseshoe",
  "Proceeds benefit Easterseals of Central and Southeast Ohio",
];

export default function ServicesPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Race Distances",
        subtitle: "Choose from a 4-Mile Race, 2.3-Mile Walk N' Talk, Tot Trot, or the virtual option.",
        imageUrl: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "4-Mile", body: "New out-and-back route with a turnaround near the OSU Horseshoe." },
                { title: "Walk N' Talk", body: "2.3-mile casual route ideal for families and friends." },
                { title: "Tot Trot", body: "Fun kids race for ages 13 and under." },
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
                    Additional pickup locations: Chase Bank (Nov 18 and Nov 25, 4-6pm) and The Shops on Lane (Nov 23, Noon-3pm).
                  </p>
                  <p>
                    Vendors and sponsors can contact David Phillips at dphillips@easterseals-cseohio.org.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </PageShell>
  );
}
