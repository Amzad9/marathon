import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import blueshirtImage from "./assets/Blueshirt_edited.avif";
import inflatableTurkeyImage from "./assets/InflatableTT.avif";
const testimonials = [
  {
    name: "Family Team",
    message: "The Thanksgiving morning energy is unmatched and perfect for all ages.",
    image: "/images/test1.png",
  },
  {
    name: "5-Miler Runner",
    message: "Great organization, great crowd support, and a fun way to start the holiday.",
    image: "/images/test2.png",
  },
  {
    name: "Walk N' Talk Participant",
    message: "Loved the shirt, medal, and community impact through Easterseals support.",
    image: "/images/test3.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2a3138,#1a2027_50%,#161b22)] text-[#f1f4f6]">
      <div className="">
        <SiteHeader activeLabel="Home" />

        <section
          id="home"
          className="relative overflow-hidden px-4 bg-[#1e252d] pt-8 pb-8"
        >
          {/* <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg"
              alt="Westerville athletic complex background"
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171b22]/95 via-[#1c232b]/85 to-[#1c232b]/35" />
          </div> */}
          <div className="container mx-auto">
            <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="max-w-7xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase leading-[0.92] text-[#F7941E]">
                  The Original Columbus Turkey Trot
                </h1>
              
                <p className="mt-3 text-2xl font-semibold text-[#F7941E] sm:text-4xl">
                  Thanksgiving Day | 11/27/2025
                </p>
                <p className="mt-5 max-w-4xl text-lg leading-9 text-white/95 sm:text-2xl sm:leading-[1.3]">
                  Join us in celebrating our 40th Year Anniversary with exciting changes to the 2026
                  Chase Columbus Turkey Trot, benefiting Easterseals of Central and Southeast Ohio.
                  Your support makes a meaningful impact for children and families served through Early
                  Intervention programs.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-10 py-4 text-md md:text-xl font-black uppercase tracking-[0.05em] text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Click To Sign Up
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-white/20 bg-white/10 px-10 py-4 text-md md:text-xl font-black uppercase tracking-[0.05em] text-white transition hover:bg-white/15"
                  >
                    Click To Volunteer
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#83a73d]">
                <video
                  className="min-h-[240px] md:min-h-[480px] w-full object-cover"
                  src="/TurkeyTrot2026Animation.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />

                {/* <Image
                  src="https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg"
                  alt="Women runners smiling"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        </section>

        <section id="swag" className="mt-4  bg-[#212831]">
          <div className="container mx-auto grid gap-4 md:grid-cols-3">
            {[
              {
                title: "What&apos;s New In &apos;26",
                body: "New out-and-back 4-mile route turning around in front of the historic Ohio State Horseshoe.",
              },
              {
                title: "Walk N&apos; Talk Route",
                body: "A casual route for friends and families, including the OSU Waterman Agriculture and Natural Resource Complex.",
              },
              {
                title: "Swag + Medal",
                body: "Check out this year&apos;s long sleeve 1/4 zip and custom finisher&apos;s medal.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 text-xl leading-8 text-white/90">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mt-5 bg-[#1d232b] px-4 py-6 sm:px-8">
          <div className="container mx-auto grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
                alt="Women at finish line"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="md:text-4xl font-black uppercase leading-none text-[#F7941E] text-2xl">
                Featured Event Details
              </h2>
              <ul className="mt-5 space-y-4 text-2xl leading-tight text-white/95 sm:text-2xl">
                <li>
                  <span className="font-semibold">Course update:</span> Our 4-mile route features an
                  out-and-back design with a turnaround near the OSU Horseshoe.
                </li>
                <li>
                  <span className="font-semibold">Walk N&apos; Talk:</span> A 2.3-mile option for casual
                  runners and walkers to enjoy Thanksgiving morning together.
                </li>
                <li>
                  <span className="font-semibold">Important note:</span> Please, no dogs allowed as a
                  courtesy to other participants.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="packet-pickup" className="mt-5 bg-[#212831] px-4 py-6 sm:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                testimonials[0],
                testimonials[1],
                testimonials[2],
              ].map((item) => (
                <article
                  key={item.name}
                  className="grid gap-4 rounded-2xl border border-white/12 bg-white/5 p-4 sm:grid-cols-[96px_1fr]"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-1 text-[#F7941E]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl leading-[1.2] text-white/95">&ldquo;{item.message}&rdquo;</p>
                    <p className="mt-2 text-2xl font-semibold text-white">- {item.name}</p>
                  </div>
                </article>
              ))}
            </div>
            </div>
        </section>

        <section className="bg-[#1e252d] px-4 pb-8 sm:px-8">
          <div className="container mx-auto">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/20">
                <Image
                  src={blueshirtImage}
                  alt="Race participant in event shirt"
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/20">
                <Image
                  src={inflatableTurkeyImage}
                  alt="Inflatable turkey at the event"
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.mapmyrun.com/routes/view/6668224116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F7941E] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                4-Mile Map
              </a>
              <a
                href="https://www.mapmyrun.com/routes/view/add_to_website/6668240239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                2.5-Mile “Walk N’ Talk” Map
              </a>
              <a
                href="https://www.facebook.com/ColumbusTurkeyTrot/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-fit sm:text-base"
              >
                Click to Stay Up-To-Date
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-0 bg-[#1e252d] px-4 py-6 sm:px-8">
          <div className="container mx-auto grid gap-6 lg:grid-cols-[0.5fr_1fr]">
            <div className="relative min-h-[250px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg"
                alt="Event director"
                fill
                className="object-cover"
              />
            </div>
            <div>
                <h3 className="md:text-4xl font-black uppercase leading-none text-[#F7941E] text-2xl">
                A Message From The Event Team
              </h3>
              <p className="mt-4 max-w-6xl text-xl leading-8 text-white/95 sm:text-2xl sm:leading-[1.3]">
                Your money goes to Easterseals&apos; Early Intervention students who need you. The Chase
                Columbus Turkey Trot proudly supports Easterseals of Central &amp; Southeast Ohio.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-2xl sm:leading-[1.3]">
                Their program provides hands-on, comprehensive support to help children reach their
                full potential, regardless of challenges, needs, or disabilities.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-2xl sm:leading-[1.3]">
                Extra ways to give thanks include our canned food drive on race morning near the pickup
                tent. Donate unexpired cans and non-perishable food items.
              </p>
              <p className="mt-5 text-2xl text-white sm:text-3xl">Race Day Hotline: 614-332-5205</p>
              <p className="mt-1 text-xl text-white/90 sm:text-2xl">kara@ultrafitusa.com</p>
              <div className="mt-6">
                <Link
                  href="https://www.columbusturkeytrot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-xl font-black uppercase tracking-[0.05em] text-[#F7941E] transition hover:brightness-110"
                >
                  Visit Event Website
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="container mx-auto px-3">
            <div className="flex flex-col gap-4 border-b border-white/15 py-8 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/20">
                <Image
                  src="/new/Run-Like-a-Girl-04.avif"
                  alt="Turkey Trot logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div id="contact">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  The Shops on Lane Avenue
                </h3>
                <p className="mt-1 max-w-7xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-2xl">
                  1675 W. Lane Ave, Columbus, OH 43221 | Thanksgiving Day start times begin at 8:30 am.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <SiteFooter />
      </div>
    </main>
  );
}
