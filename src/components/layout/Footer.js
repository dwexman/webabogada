import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071426] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.12),transparent_20%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <p className="text-lg font-semibold tracking-[0.03em] text-white">
              Karina Osorio Rendón
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#C8A96A]">
              Abogada penalista
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-300 md:text-[15px]">
              Defensa penal privada con experiencia, criterio y compromiso real.
              Atención cercana, estrategia jurídica y acompañamiento en cada
              etapa del proceso.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Navegación
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Inicio
              </Link>
              <Link
                href="/sobre-mi"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Sobre mí
              </Link>
              <Link
                href="/servicios"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Contacto
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://wa.me/56934430939"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href="mailto:karinaosoriorendon@gmail.com"
                className="break-all text-sm text-slate-300 transition hover:text-white"
              >
                karinaosoriorendon@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Karina Osorio Rendón. Todos los derechos reservados.</p>
          <p>Defensa penal privada en Chile.</p>
        </div>
      </div>
    </footer>
  );
}