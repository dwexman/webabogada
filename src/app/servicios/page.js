import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export const metadata = {
  title: "Servicios | Karina Osorio Rendón",
  description:
    "Servicios de defensa penal privada en Chile: Ley 20.000, Ley de Armas, receptación, beneficios intrapenitenciarios, querellas, controles de detención, audiencias de formalización 24/7 y defensa penal estratégica.",
  keywords: [
    "servicios defensa penal",
    "Ley 20.000",
    "Ley de Armas",
    "receptación",
    "beneficios intrapenitenciarios",
    "querellas penales",
    "controles de detención",
    "audiencias de formalización",
    "defensa penal estratégica",
    "abogada penalista chile",
    "defensa penal privada",
  ],
  alternates: {
    canonical: "/servicios",
  },
};

const services = [
  {
    title: "Defensa en causas Ley 20.000",
    subtitle: "Delitos de drogas",
    description:
      "Defensa especializada en causas relacionadas con la Ley 20.000, incluyendo tráfico, microtráfico y porte de sustancias ilícitas. Cada caso se analiza de forma rigurosa para diseñar una estrategia penal seria, personalizada y orientada a la protección de tus derechos y tu libertad.",
    bullets: [
      "Tráfico y microtráfico",
      "Porte de sustancias ilícitas",
      "Estrategia de defensa personalizada",
    ],
  },
  {
    title: "Ley de Armas",
    subtitle: "Asesoría y defensa legal",
    description:
      "Asesoría y defensa en causas por porte, tenencia ilegal y otros delitos vinculados a la Ley de Control de Armas. El objetivo es construir una defensa sólida, estudiando cuidadosamente los antecedentes, la prueba y la situación procesal.",
    bullets: [
      "Porte y tenencia ilegal",
      "Análisis de antecedentes",
      "Defensa técnica y estratégica",
    ],
  },
  {
    title: "Receptación y otros delitos",
    subtitle: "Defensa penal integral",
    description:
      "Defensa penal en causas por receptación, hurto, robo y otros delitos. Se trabaja con una mirada estratégica, considerando cada circunstancia del caso para entregar una representación técnica seria y ajustada a la realidad de cada cliente.",
    bullets: [
      "Receptación",
      "Hurto y robo",
      "Defensa penal personalizada",
    ],
  },
  {
    title: "Beneficios intrapenitenciarios",
    subtitle: "Etapa de cumplimiento",
    description:
      "Asesoría para postular a beneficios intrapenitenciarios, traslados y otras gestiones relevantes en etapa de cumplimiento. Se revisan los antecedentes del caso para orientar una estrategia jurídica adecuada a cada situación.",
    bullets: [
      "Postulaciones y solicitudes",
      "Traslados",
      "Gestión jurídica estratégica",
    ],
  },
  {
    title: "Querellas",
    subtitle: "Representación de víctimas",
    description:
      "Representación penal estratégica en calidad de querellante, orientada a la búsqueda de justicia y reparación para víctimas de delitos. El acompañamiento se enfoca en proteger derechos e intereses durante todo el proceso.",
    bullets: [
      "Querellas penales",
      "Representación de víctimas",
      "Protección de derechos e intereses",
    ],
  },
  {
    title: "Controles de detención y audiencias de formalización 24/7",
    subtitle: "Disponibilidad inmediata",
    description:
      "Asistencia y defensa penal inmediata en controles de detención y audiencias de formalización, con disponibilidad 24/7 y una actuación estratégica desde el primer momento del proceso.",
    bullets: [
      "Controles de detención",
      "Audiencias de formalización",
      "Disponibilidad inmediata 24/7",
    ],
  },
  {
    title: "Defensa penal estratégica",
    subtitle: "Acompañamiento integral",
    description:
      "Acompañamiento cercano y defensa técnica en distintas etapas del proceso penal, con foco en proteger la libertad, los derechos fundamentales y los intereses del cliente mediante una estrategia jurídica clara y rigurosa.",
    bullets: [
      "Defensa en distintas etapas",
      "Protección de derechos",
      "Acompañamiento personalizado",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F7F4EE] text-[#071426]">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.08),transparent_24%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#A07F45]">
                Servicios
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Servicios de defensa penal privada en Chile
              </h1>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#475569] md:text-lg">
                Una práctica enfocada en{" "}
                <span className="font-semibold text-[#071426]">
                  defensa penal privada
                </span>
                , con atención personalizada, litigación estratégica y más de 10
                años de experiencia en derecho penal.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-6">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-[2rem] border border-[#071426]/8 bg-[#FCFCFB] shadow-[0_18px_45px_rgba(7,20,38,0.05)]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="bg-[#071426] px-7 py-8 text-white md:px-8 md:py-9">
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#C8A96A]">
                        {service.subtitle}
                      </p>

                      <h2 className="mt-3 text-2xl font-semibold leading-snug md:text-[2rem]">
                        {service.title}
                      </h2>
                    </div>

                    <div className="px-7 py-8 md:px-8 md:py-9">
                      <p className="text-[15px] leading-8 text-[#475569] md:text-[16px]">
                        {service.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {service.bullets.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#071426]/10 bg-[#F7F4EE] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#6B7280]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#071426] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.14),transparent_22%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#C8A96A]">
                Agenda tu consulta
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Si necesitas orientación o defensa penal, conversemos
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-300 md:text-lg">
                Puedes escribir por WhatsApp para revisar tu situación, resolver
                dudas iniciales y coordinar una consulta.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://wa.me/56934430939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#C8A96A] px-7 py-3.5 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}