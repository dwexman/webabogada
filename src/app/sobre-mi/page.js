import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export const metadata = {
  title: "Sobre mí | Karina Osorio Rendón",
  description:
    "Conoce a Karina Osorio Rendón, abogada penalista en Chile con más de 10 años de experiencia en defensa penal privada, litigación estratégica y representación en causas penales.",
  keywords: [
    "Karina Osorio Rendón",
    "abogada penalista",
    "abogada penal Chile",
    "defensa penal privada",
    "litigación penal",
    "Ley 20.000",
    "Ley de Armas",
    "querellas",
  ],
  alternates: {
    canonical: "/sobre-mi",
  },
};

export default function SobreMiPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F7F4EE] text-[#071426]">
        {/* HERO / INTRO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.08),transparent_24%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-[#071426]/8 bg-white p-3 shadow-[0_24px_60px_rgba(7,20,38,0.08)]">
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <div className="relative h-[380px] w-full sm:h-[460px] md:h-[560px]">
                      <Image
                        src="/images/abogada-hero.jpeg"
                        alt="Karina Osorio Rendón, abogada defensora penal privada en Chile"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/16 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="order-1 max-w-2xl lg:order-2">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#A07F45]">
                  Sobre mí
                </p>

                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  Karina Osorio Rendón, abogada penalista en Chile
                </h1>

                <p className="mt-6 text-lg font-medium text-[#8B6A32] md:text-xl">
                  Más de 10 años de experiencia en derecho penal.
                </p>

                <p className="mt-6 text-[16px] leading-8 text-[#475569] md:text-lg">
                  Soy abogada penalista y enfoco mi práctica en la{" "}
                  <span className="font-semibold text-[#071426]">
                    defensa penal privada
                  </span>
                  , brindando una asesoría seria, cercana y estratégica a
                  personas que enfrentan procesos penales o requieren
                  representación especializada.
                </p>

                <p className="mt-5 text-[16px] leading-8 text-[#475569] md:text-lg">
                  Mi trabajo está orientado a proteger la libertad, los derechos
                  fundamentales y los intereses de cada cliente, a través de una
                  defensa personalizada, un análisis riguroso del caso y una
                  litigación penal de alto nivel.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/56934430939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#C8A96A] px-7 py-3.5 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
                  >
                    Contactar por WhatsApp
                  </a>

                  <a
                    href="mailto:karinaosoriorendon@gmail.com"
                    className="rounded-full border border-[#071426]/12 bg-white px-7 py-3.5 text-sm font-semibold text-[#071426] transition duration-300 hover:bg-[#071426]/5"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPCIÓN PROFESIONAL */}
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#A07F45]">
                  Perfil profesional
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Defensa penal privada con criterio, estrategia y compromiso real
                </h2>

                <p className="mt-6 text-[16px] leading-8 text-[#475569] md:text-lg">
                  Mi enfoque profesional se basa en una defensa penal estratégica
                  y personalizada, entendiendo que cada causa requiere estudio,
                  preparación y una visión jurídica clara de los riesgos y
                  oportunidades del proceso.
                </p>

                <p className="mt-5 text-[16px] leading-8 text-[#475569] md:text-lg">
                  Trabajo en causas vinculadas a{" "}
                  <span className="font-semibold text-[#071426]">Ley 20.000</span>,{" "}
                  <span className="font-semibold text-[#071426]">Ley de Armas</span>,{" "}
                  <span className="font-semibold text-[#071426]">
                    receptación y otros delitos
                  </span>
                  , además de asesorar en{" "}
                  <span className="font-semibold text-[#071426]">
                    beneficios intrapenitenciarios
                  </span>
                  , libertad condicional, traslados y querellas en representación
                  de víctimas.
                </p>

                <p className="mt-5 text-[16px] leading-8 text-[#475569] md:text-lg">
                  Además, cuento con apoyo de socios especialistas en distintas
                  áreas del derecho para entregar una asesoría integral cuando la
                  situación legal del caso así lo requiere.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-[1.6rem] border border-[#071426]/10 bg-[#F7F4EE] px-6 py-6 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                  <p className="text-2xl font-semibold text-[#071426]">+10 años</p>
                  <p className="mt-2 text-sm leading-6 text-[#475569]">
                    Experiencia en derecho penal
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-[#071426]/10 bg-[#F7F4EE] px-6 py-6 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                  <p className="text-2xl font-semibold text-[#071426]">Defensa</p>
                  <p className="mt-2 text-sm leading-6 text-[#475569]">
                    Penal privada y personalizada
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-[#071426]/10 bg-[#F7F4EE] px-6 py-6 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                  <p className="text-2xl font-semibold text-[#071426]">Enfoque</p>
                  <p className="mt-2 text-sm leading-6 text-[#475569]">
                    Estratégico, cercano y riguroso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CIERRE / CTA */}
        <section className="relative overflow-hidden bg-[#071426] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.14),transparent_22%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#C8A96A]">
                Contacto directo
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Si necesitas defensa penal privada, conversemos
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-300 md:text-lg">
                Puedes escribirme por WhatsApp para revisar tu situación,
                resolver dudas iniciales y coordinar una consulta.
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