"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[rgba(7,20,38,0.82)] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            : "bg-[rgba(7,20,38,0.55)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label="Ir al inicio"
            onClick={closeMenu}
          >
            <span className="text-[1rem] font-semibold tracking-[0.04em] text-white transition duration-300 group-hover:text-[#DCC08B] sm:text-[1.05rem]">
              Karina Osorio Rendón
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60 sm:text-[11px]">
              Abogada penalista
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-white/80 transition duration-300 hover:text-white"
            >
              Inicio
            </Link>

            <Link
              href="/sobre-mi"
              className="text-sm font-medium text-white/80 transition duration-300 hover:text-white"
            >
              Sobre mí
            </Link>

            <Link
              href="/servicios"
              className="text-sm font-medium text-white/80 transition duration-300 hover:text-white"
            >
              Servicios
            </Link>

            <Link
              href="/contacto"
              className="text-sm font-medium text-white/80 transition duration-300 hover:text-white"
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="mailto:karinaosoriorendon@gmail.com"
              className="hidden rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition duration-300 hover:bg-white/10 lg:inline-flex"
            >
              Email
            </a>

            <a
              href="https://wa.me/56934430939"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C8A96A] px-5 py-2.5 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition duration-300 hover:bg-white/10 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto bg-[rgba(3,10,20,0.45)] backdrop-blur-sm opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed right-0 top-0 z-50 h-full w-[88%] max-w-[360px] border-l border-white/10 bg-[#071426] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div className="flex flex-col leading-none">
            <span className="text-[1rem] font-semibold tracking-[0.04em] text-white">
              Karina Osorio Rendón
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
              Abogada penalista
            </span>
          </div>

          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition duration-300 hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <div className="flex h-[calc(100%-80px)] flex-col justify-between px-6 py-8">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-base font-medium text-white/90 transition duration-300 hover:text-white"
            >
              Inicio
            </Link>

            <Link
              href="/sobre-mi"
              onClick={closeMenu}
              className="text-base font-medium text-white/90 transition duration-300 hover:text-white"
            >
              Sobre mí
            </Link>

            <Link
              href="/servicios"
              onClick={closeMenu}
              className="text-base font-medium text-white/90 transition duration-300 hover:text-white"
            >
              Servicios
            </Link>

            <Link
              href="/contacto"
              onClick={closeMenu}
              className="text-base font-medium text-white/90 transition duration-300 hover:text-white"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <a
              href="https://wa.me/56934430939"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-[#C8A96A] px-5 py-3 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
            >
              WhatsApp
            </a>

            <a
              href="mailto:karinaosoriorendon@gmail.com"
              className="inline-flex justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition duration-300 hover:bg-white/10"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}