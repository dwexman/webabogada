import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Ley 20.000",
      description:
        "Defensa en causas por tráfico, microtráfico, porte y otros delitos contemplados en la ley de drogas, con estrategia penal personalizada.",
      tag: "Defensa especializada",
    },
    {
      title: "Ley de Armas",
      description:
        "Asesoría y defensa en causas por porte, tenencia ilegal y otros delitos vinculados al control de armas.",
      tag: "Asesoría y representación",
    },
    {
      title: "Receptación y otros delitos",
      description:
        "Defensa penal en causas por receptación, hurto, robo y otros delitos, con análisis riguroso de los antecedentes.",
      tag: "Análisis jurídico",
    },
    {
      title: "Beneficios intrapenitenciarios",
      description:
        "Asesoría en libertad condicional, beneficios intrapenitenciarios, traslados y otras gestiones relevantes en etapa de cumplimiento.",
      tag: "Gestión estratégica",
    },
    {
      title: "Querellas",
      description:
        "Representación penal de víctimas, con una estrategia seria y enfocada en la protección de sus derechos e intereses.",
      tag: "Representación de víctimas",
    },
    {
      title: "Defensa penal estratégica",
      description:
        "Acompañamiento cercano y defensa técnica en distintas etapas del proceso penal, con foco en libertad, derechos y resultados.",
      tag: "Acompañamiento integral",
    },
    {
      title: "Controles de detención y audiencias de formalización 24 / 7",
      description:
        "Asistencia y defensa penal inmediata en controles de detención y audiencias de formalización, con disponibilidad 24/7 y actuación estratégica desde el primer momento.",
      tag: "Disponibilidad inmediata",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071426] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.14),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#C8A96A]">
              Servicios
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl xl:text-5xl">
              Áreas de defensa penal con un enfoque serio y estratégico
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-[16px] leading-8 text-slate-300 md:text-lg">
              Una práctica orientada a la{" "}
              <span className="font-semibold text-white">
                defensa penal privada
              </span>
              , con atención personalizada, análisis jurídico riguroso y una
              estrategia diseñada según la realidad de cada caso.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.96] p-6 text-[#071426] shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(0,0,0,0.22)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C8A96A] via-[#E6D2A4] to-[#C8A96A]" />
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#C8A96A]/12 blur-2xl transition duration-300 group-hover:bg-[#C8A96A]/20" />

              <div className="relative z-10 flex h-full flex-col">
                <span className="inline-flex w-fit rounded-full border border-[#071426]/10 bg-[#F7F4EE] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#A07F45]">
                  {service.tag}
                </span>

                <h3 className="mt-5 text-[1.35rem] font-semibold leading-snug text-[#071426]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#475569] md:text-[16px]">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-10 rounded-full bg-[#C8A96A] transition-all duration-300 group-hover:w-16" />
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]">
                      Defensa penal
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/servicios"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}