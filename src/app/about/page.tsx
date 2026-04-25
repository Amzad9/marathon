import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Users } from "lucide-react";

import PageShell from "../../components/PageShell";
import { unsplash } from "../../lib/unsplash";

export const metadata: Metadata = {
  title: "About | Turkey Trot",
  description: "Learn about the Turkey Trot in Columbus, Ohio.",
};

const values = [
  {
    title: "Community First",
    body: "A race day atmosphere built on encouragement, friendly competition, and shared goals.",
    icon: <Users className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Celebrate Every Finish",
    body: "Whether it’s your first Turkey Trot or your fastest finish, we celebrate the work you put in.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Give Back Locally",
    body: "Your participation supports a local non-profit partner and helps our community thrive.",
    icon: <Heart className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      activeLabel="About"
      hero={{
        eyebrow: "About",
        title: (
          <>
            Turkey Trot
            <br />
            Thanksgiving Day Tradition
          </>
        ),
        subtitle:
          "We’re building a welcoming, high-energy race day that brings women together to run, connect, and celebrate what’s possible.",
        imageUrl:
          unsplash("https://images.unsplash.com/photo-1461896836934-ffe607ba8211", { width: 2000, quality: 88 }),
      }}
    >
      <section id="mission" className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
<<<<<<< HEAD
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-5xl">
=======
            <h2 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-5xl">
>>>>>>> ad3887c (ui changes)
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              We are proud to support Easterseals of Central and Southeast Ohio through the Columbus
              Turkey Trot. Event proceeds help fund Early Intervention services that provide hands-on
              support for children and families.
            </p>
           

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
=======
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-primary shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
>>>>>>> ad3887c (ui changes)
              >
                Click Here To Register
              </Link>
              <Link
                href="/training"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Event Details
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:min-h-[360px]">
              <Image
                src={unsplash("https://images.unsplash.com/photo-1461896836934-ffe607ba8211", {
                  width: 1600,
                  quality: 88,
                })}
                alt="Women runners at the finish line"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4">
        <div className="container mx-auto">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
              Thaniel&apos;s Story
            </h2>
            <p className="mt-3 text-lg font-semibold text-white/95 sm:text-xl">
              EasterSeals has changed our lives.
            </p>
            <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Thaniel was born with a heart defect and was in the cardiac ICU for about 6 weeks after
              birth. He endured 2 open heart surgeries and 3 heart catheterizations before his second
              birthday. He struggles eating and gaining weight and was also diagnosed with autism.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              When EasterSeals was presented as an option for Early Intervention, I jumped on the
              opportunity to get him enrolled. He began classes at only 16 months and continued until
              his third birthday. When we went for our initial meeting with his teacher, I knew he was
              in the right place.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              The teachers, therapists, staff, and everyone we met at EasterSeals were compassionate,
              patient, caring, and supportive. They went above and beyond to ensure his experience was
              positive every day. I know he enjoyed spending time painting, sorting, running, coloring,
              singing, and dancing, but most of all, Thaniel loved playing with Tank, the facility&apos;s
              therapy dog.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              During his time at EasterSeals, Thaniel grew in so many ways. He advanced not only
              developmentally, but socially as well. He was encouraged to explore new ideas, spread
              kindness, and celebrate being himself. EasterSeals laid the foundation of success for
              Thaniel&apos;s educational future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
<<<<<<< HEAD
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h2 className="text-3xl font-black tracking-tight text-[#F7941E] sm:text-4xl">
              Thaniel&apos;s Story
            </h2>
            <p className="mt-3 text-lg font-semibold text-white/95 sm:text-xl">
              EasterSeals has changed our lives.
            </p>
            <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Thaniel was born with a heart defect and was in the cardiac ICU for about 6 weeks after
              birth. He endured 2 open heart surgeries and 3 heart catheterizations before his second
              birthday. He struggles eating and gaining weight and was also diagnosed with autism.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              When EasterSeals was presented as an option for Early Intervention, I jumped on the
              opportunity to get him enrolled. He began classes at only 16 months and continued until
              his third birthday. When we went for our initial meeting with his teacher, I knew he was
              in the right place.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              The teachers, therapists, staff, and everyone we met at EasterSeals were compassionate,
              patient, caring, and supportive. They went above and beyond to ensure his experience was
              positive every day. I know he enjoyed spending time painting, sorting, running, coloring,
              singing, and dancing, but most of all, Thaniel loved playing with Tank, the facility&apos;s
              therapy dog.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              During his time at EasterSeals, Thaniel grew in so many ways. He advanced not only
              developmentally, but socially as well. He was encouraged to explore new ideas, spread
              kindness, and celebrate being himself. EasterSeals laid the foundation of success for
              Thaniel&apos;s educational future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#F7941E] sm:text-5xl">
=======
          <h2 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-5xl">
>>>>>>> ad3887c (ui changes)
            What You Can Expect
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
<<<<<<< HEAD
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#F7941E]">
=======
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-primary">
>>>>>>> ad3887c (ui changes)
                  {item.icon}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
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

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
              Ready?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Let’s make race day unforgettable.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              If you’re registering, sponsoring, volunteering, or just have a question, reach out—we’ll help you get set.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
<<<<<<< HEAD
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
=======
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-primary shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
>>>>>>> ad3887c (ui changes)
              >
                Get In Touch
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
