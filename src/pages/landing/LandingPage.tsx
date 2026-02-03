import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Scissors,
  Star,
} from "lucide-react";


const WHATSAPP_LINK = "https://wa.me/6282342490270";
const INSTAGRAM_URL =
  "https://www.instagram.com/blastbarbershopbali?igsh=MXY4N3ZvbzduaXI3Ng==";
const MAPS_URL = "https://maps.app.goo.gl/utDj2GLnSuwfDiJN7?g_st=ic";

// Google Maps embed yang paling stabil biasanya pakai "embed" link dari Google Maps.
// Kalau kamu punya link embed-nya, ganti string ini.
const MAPS_IFRAME_SRC =
  "https://www.google.com/maps?q=Jl.%20Raya%20Legian%20No.%20490,%20Kuta,%20Bali&output=embed";

// Instagram embed via iframe sering diblokir / tidak stabil.
// Opsi paling aman: tampilkan grid foto manual atau pakai layanan embed pihak ketiga.
// Di sini aku tetap siapkan section + tombol ke IG.
const services = [
  "Haircut",
  "Skin Fade",
  "Beard Trim",
  "Clean Shave",
  "Buzz Cut",
  "Hair Coloring",
  "Full Service",
];

const whyChoose = [
  "Skilled & experienced barbers",
  "Modern oldschool barbershop vibe",
  "Precision haircut & clean finish",
  "Comfortable space & professional service",
  "Highly recommended by customers",
];

const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

const IG_MANUAL = [
  { thumb: asset("images/1.png"), url: INSTAGRAM_URL, title: "Blast reel 1" },
  { thumb: asset("images/2.png"), url: INSTAGRAM_URL, title: "Blast reel 2" },
  { thumb: asset("images/3.jpg"), url: INSTAGRAM_URL, title: "Blast reel 3" },
  { thumb: asset("images/4.png"), url: INSTAGRAM_URL, title: "Blast reel 4" },
  { thumb: asset("images/5.png"), url: INSTAGRAM_URL, title: "Blast reel 5" },
  { thumb: asset("images/6.jpg"), url: INSTAGRAM_URL, title: "Blast reel 6" },
];


function PillButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition";
  const primary =
    "bg-blast-yellow text-yellow hover:bg-blast-yellowSoft shadow-[0_0_40px_rgba(245,200,66,0.25)] hover:shadow-[0_0_55px_rgba(245,200,66,0.35)]";
  const ghost =
    "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 backdrop-blur-xl hover:border-blast-yellow/40";



  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`${base} ${variant === "primary" ? primary : ghost}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function GlassBlob({ className }: { className?: string }) {
  return (
    <div
      className={
        "pointer-events-none absolute rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/30 " +
        (className || "")
      }
      style={{
        WebkitMaskImage:
          "radial-gradient(120% 120% at 50% 50%, black 30%, transparent 70%)",
      }}
    />
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <div className="relative overflow-hidden">
        {/* soft glow background */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-white/4 blur-3xl" />
          <div className="absolute top-24 right-0 h-[520px] w-[520px] rounded-full bg-white/4 blur-3xl" />
        </div>

        {/* floating blobs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-24 z-0 h-44 w-44 -translate-x-1/2"
        >
          <GlassBlob className="h-full w-full rotate-[12deg]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute right-10 top-[520px] z-0 h-28 w-28"
        >
          <GlassBlob className="h-full w-full rotate-[-8deg]" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          {/* NAV */}
          <header className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
            <img
              src={asset("logo-blast.jpeg")}
              alt="BLAST Barbershop Bali Legian logo"
              className="h-20 w-20 rounded-xl object-cover"
            />

            <div className="leading-tight">
                
            </div>
            </div>


            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              {/* <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#gallery">
                Gallery
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a> */}
            </nav>

            <PillButton href={WHATSAPP_LINK} variant="primary">
              Book now
            </PillButton>
          </header>

          {/* HERO */}
          <section className="pb-10 pt-8 md:pt-14" id="home">
            <div className="grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Bali — Legian
                </div>

                <h1 className="mt-4 text-[44px] leading-[0.95] tracking-tight md:text-[80px]">
                <span className="text-white">BLAST</span>
                <br />
                <span className="text-blast-yellow drop-shadow-[0_0_25px_rgba(245,200,66,0.6)]">
                    BARBERSHOP
                </span>
                </h1>


                <div className="mt-4 h-[2px] w-16 rounded-full bg-blast-yellow" />

                <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
                  Modern Oldschool Vibes with Skilled & Experienced Barbers
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <PillButton href={WHATSAPP_LINK} variant="primary">
                    Book Your Session Now
                  </PillButton>
                  <PillButton href="#services" variant="ghost">
                    View services
                  </PillButton>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blast-yellow" />
                    Jl. Raya Legian No. 490, Kuta, Bali
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blast-yellow" />
                    Open Everyday 9 AM – 9 PM
                  </div>
                </div>
              </div>

              {/* right small card */}
              <div className="md:col-span-4">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                  <div className="flex items-center gap-2 text-white/80">
                    <Scissors className="h-4 w-4 text-blast-yellow" />
                    <span className="text-sm font-medium">Clean • Sharp • Detailed</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Every session is designed for comfort, precision, and style—perfect for locals
                    and travelers looking for a fresh look in Bali.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                    <Star className="h-4 w-4 text-blast-yellow" />
                    Highly recommended by customers
                  </div>

                  <div className="mt-6">
                    <PillButton href={WHATSAPP_LINK} variant="ghost">
                      Chat on WhatsApp
                    </PillButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-10">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-6">
                <h2 className="text-3xl tracking-tight md:text-4xl">ABOUT</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  BLAST Barbershop Bali – Legian is a modern old-school barbershop located in the heart
                  of Legian. We deliver clean, sharp, and detailed cuts handled by skilled and experienced
                  barbers. Every session is designed for comfort, precision, and style—perfect for locals
                  and travelers looking for a fresh look in Bali.
                </p>
              </div>

              <div className="md:col-span-6">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                  <h3 className="text-sm font-semibold tracking-wider text-white/80">
                    WHY CHOOSE US
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm text-white/70">
                    {whyChoose.map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blast-yellow" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="py-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl tracking-tight md:text-4xl">SERVICES</h2>
                <p className="mt-3 max-w-2xl text-sm text-white/70">
                  Choose your style — quick clean-up or full service session. Book anytime via WhatsApp.
                </p>
              </div>

              <div className="hidden md:block">
                <PillButton href={WHATSAPP_LINK} variant="primary">
                  Book now
                </PillButton>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <motion.div
                  key={s}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-base font-semibold">{s}</div>
                    <Scissors className="h-4 w-4 text-white/70" />
                  </div>
                  <div className="mt-3">
                    <PillButton href={WHATSAPP_LINK} variant="ghost">
                      Book this
                    </PillButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section id="gallery" className="py-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-3xl tracking-tight md:text-4xl">INSTAGRAM GALLERY</h2>
                  <p className="mt-3 max-w-2xl text-sm text-white/70">
                    Explore our latest cuts & vibes on Instagram.
                  </p>
                </div>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  <Instagram className="h-4 w-4" />
                  @blastbarbershopbali
                </a>
              </div>

             <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {IG_MANUAL.map((p, i) => (
                    <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                    title={p.title}
                    >
                    <img
                        src={p.thumb}
                        alt={p.title}
                        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />

                    {/* badge */}
                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-blast-yellow shadow-[0_0_12px_rgba(245,200,66,0.6)]" />
                        Tap to open
                    </div>
                    </a>
                ))}
                </div>

            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-10">
            <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#070709]/60 p-8 backdrop-blur-2xl md:grid-cols-12 md:p-12">
              <div className="md:col-span-5">
                <h2 className="text-3xl tracking-tight md:text-4xl">CONTACT</h2>

                <div className="mt-5 grid gap-3 text-sm text-white/75">
                  <div className="font-semibold text-white">
                    BLAST Barbershop Bali – Legian
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <div>
                      Jl. Raya Legian No. 490, Kuta, Bali
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4" />
                    <div>Open Everyday: 9 AM – 9 PM</div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4" />
                    <div>WhatsApp: +62 823-4249-0270</div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Instagram className="mt-0.5 h-4 w-4" />
                    <div>@blastbarbershopbali</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <PillButton href={WHATSAPP_LINK} variant="primary">
                    Book via WhatsApp
                  </PillButton>
                  <PillButton href={INSTAGRAM_URL} variant="ghost">
                    Open Instagram
                  </PillButton>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="text-sm font-semibold text-white/85">
                      LOCATION / DIRECTION
                    </div>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition"
                    >
                      Get Directions <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="h-[340px] w-full">
                    <iframe
                      title="BLAST Barbershop Location"
                      src={MAPS_IFRAME_SRC}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="pb-12 pt-8">
            <div className="border-t border-white/10 pt-6 text-xs text-white/55">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  © {new Date().getFullYear()} BLAST Barbershop Bali – Legian • Modern Oldschool Barbershop •
                  Open Everyday 9 AM – 9 PM
                </div>

                <div className="flex items-center gap-4">
                  <a className="hover:text-white" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a className="hover:text-white" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
