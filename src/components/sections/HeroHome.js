"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroHome() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.035}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Karina Osorio Rendón",
            image: "https://karinaosoriorendon.cl/images/abogada-hero.jpeg",
            description:
              "Abogada penalista en Chile con más de 10 años de experiencia en defensa penal privada, Ley 20.000, delitos económicos y querellas.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Santiago",
              addressRegion: "Región Metropolitana",
              addressCountry: "CL",
            },
            telephone: "+56934430939",
            url: "https://karinaosoriorendon.cl",
            areaServed: "CL",
            knowsAbout: [
              "Derecho penal",
              "Ley 20.000",
              "Ley de armas",
              "Delitos económicos",
              "Querellas",
            ],
          }),
        }}
      />

      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#071426] via-[#0a1a2f] to-[#071426] text-white"
        aria-label="Presentación profesional de Karina Osorio Rendón"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,169,106,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.03),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/85 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:gap-14 lg:py-12">
          <div className="max-w-2xl">
            <p className="animate-fade-up-soft mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#C8A96A]">
              Abogada penalista en Chile
            </p>

            <h1 className="animate-fade-up-soft delay-100 max-w-[720px] text-4xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-5xl xl:text-[68px]">
              <span className="relative inline-block text-white">
                Defensa penal privada
                <span className="animate-shimmer-line absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#C8A96A]" />
              </span>{" "}
            </h1>

            <div className="animate-fade-up-soft delay-200 mt-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C8A96A]/60" />
              <p className="text-lg font-medium text-[#D7BE8A] md:text-xl">
                Más de 10 años de experiencia en derecho penal.
              </p>
            </div>

            <p className="animate-fade-up-soft delay-300 mt-6 max-w-xl text-[17px] leading-8 text-slate-300 md:text-lg">
              Asesoría y representación en causas por{" "}
              <span className="font-semibold text-white">Ley 20.000</span>,{" "}
              <span className="font-semibold text-white">Ley de Armas</span>,{" "}
              <span className="font-semibold text-white">delitos económicos</span>,{" "}
              querellas y defensa penal en todas las etapas del proceso.
            </p>

            <div className="animate-fade-up-soft delay-400 mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/56934430939"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C8A96A] px-7 py-3.5 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
              >
                Contactar por WhatsApp
              </a>

              <a
                href="/contacto"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Ir a contacto
              </a>
            </div>

            <div className="animate-fade-up-soft delay-400 mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400 md:text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Confidencialidad
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Atención personalizada
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Defensa estratégica
              </span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-glow-soft absolute right-8 top-8 hidden h-36 w-36 rounded-full bg-[#C8A96A]/10 blur-3xl lg:block" />

            <div className="relative w-full max-w-[360px] xl:max-w-[390px]">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#C8A96A]/18 via-transparent to-transparent blur-xl" />
              <div className="absolute -left-4 top-5 h-[84%] w-[84%] rounded-[2.2rem] border border-white/8 bg-white/[0.03]" />

              <div
                ref={imageRef}
                className="animate-float-soft relative overflow-hidden rounded-[2rem] border border-[#C8A96A]/20 bg-[#0D1A2C] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.42)] transition duration-500"
              >
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                  <div className="relative h-[390px] w-full xl:h-[430px]">
                    <Image
                      src="/images/abogada-hero.jpeg"
                      alt="Karina Osorio Rendón, abogada penalista en Chile"
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 38vw, 390px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/20 via-transparent to-transparent" />
                </div>
              </div>

              <div className="animate-float-soft absolute -bottom-4 left-0 rounded-2xl border border-white/10 bg-[rgba(12,24,42,0.78)] px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#D7BE8A]">
                  Experiencia
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">+10 años</p>
                <p className="mt-1 text-sm text-slate-300">Defensa penal privada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}