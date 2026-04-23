import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Turkey Trot",
  description: "Contact Turkey Trot for race registration questions and race day information.",
};

const contactOptions = [
  {
    title: "Call Or Text",
    body: "Speak with the team about registration questions and race day logistics.",
    value: siteContact.phone,
    href: siteContact.phoneHref,
    icon: <Phone className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "General Email",
    body: "Use email for event details, packet pickup questions, and registration support.",
    value: siteContact.emailShowroom,
    href: `mailto:${siteContact.emailShowroom}`,
    icon: <Mail className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Community Support",
    body: "Reach out for volunteer opportunities, sponsorship info, and non-profit partner details.",
    value: siteContact.emailOperations,
    href: `mailto:${siteContact.emailOperations}`,
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
];

const visitReasons = [
  "Advanced packet pickup available Nov 17 through Nov 26",
  "Main race starts Thanksgiving morning with multiple event options",
  "Submit your costume photo, name and costume description to trotcostume@gmail.com BEFORE RACE DAY (free to enter!)",
];

export default function ContactPage() {
  return (
    <PageShell
      activeLabel="Questions"
      hero={{
        eyebrow: "Contact",
        title: (
          <>
            Questions?
            <br />
            Reach Out Any Time
          </>
        ),
        subtitle:
          "Contact us for registration help, race day information, packet pickup guidance, and event support details.",
        imageUrl: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg",
      }}
    >
      <section className="px-4 py-8 sm:px-8 sm:py-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={siteContact.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-auto sm:px-8 sm:text-base"
            >
              Call {siteContact.phone}
            </a>
            <a
              href={`mailto:${siteContact.emailShowroom}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-auto sm:px-8 sm:text-base"
            >
              Email Us
            </a>
            <Link
              href="/training"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
            >
              Event Details
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-white/15 bg-[#1e252d] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.35)] transition hover:brightness-110"
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#F7941E]">
                  {item.icon}
                </span>
                <h2 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
                <p className="mt-5 wrap-break-word whitespace-normal text-sm font-black uppercase tracking-[0.16em] text-[#F7941E]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:col-span-7 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Before Race Day
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-tight text-[#F7941E] sm:text-4xl lg:text-5xl">
                Packet Pickup & Tips
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Advance packet pickup is strongly recommended. If you can’t make it, friends or family may pick up your packet.
              </p>

              <div className="mt-7 grid gap-3">
                {visitReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-4"
                  >
                    <span className="mt-0.5 rounded-full border border-white/15 bg-white/5 p-2 text-[#F7941E]">
                      <Send className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <p className="text-base leading-7 text-white/90">{reason}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${siteContact.emailShowroom}`}
                  className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:px-8 sm:text-base"
                >
                  Email For Help
                </a>
                <Link
                  href="/training"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:px-8 sm:text-base"
                >
                  View Event Details
                </Link>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 p-3 text-[#F7941E]">
                    <MapPin className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                      Address
                    </p>
                    <p className="mt-3 text-lg font-black text-white">{siteContact.addressLines[0]}</p>
                    <p className="mt-2 text-base leading-7 text-white/80">
                      {siteContact.addressLines[1]}
                      <br />
                      {siteContact.addressLines[2]}
                    </p>
                    <a
                      href={siteContact.directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#F7941E] transition hover:brightness-110"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 p-3 text-[#F7941E]">
                    <Clock3 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="w-full">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                      Schedule
                    </p>
                    <div className="mt-4 space-y-3">
                      {siteContact.businessHours.map((item) => (
                        <div
                          key={item}
                          className="flex flex-col gap-1 border-b border-white/10 pb-3 text-sm text-white/80 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                        >
                          <span>{item.split(" - ")[0]}</span>
                          <span className="font-semibold uppercase tracking-widest text-white/70">
                            {item.split(" - ")[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
