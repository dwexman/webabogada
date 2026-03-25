import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export const metadata = {
  title: "Contacto | Karina Osorio Rendón",
  description:
    "Agenda una consulta en defensa penal privada con Karina Osorio Rendón, abogada penalista en Chile. Contacto directo por WhatsApp y correo.",
  keywords: [
    "contacto abogada penalista",
    "consulta defensa penal privada",
    "abogada penalista chile contacto",
    "whatsapp abogada penal",
    "Karina Osorio Rendón contacto",
  ],
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F7F4EE] text-[#071426]">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.08),transparent_24%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#A07F45]">
                Contacto
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Agenda tu consulta en defensa penal privada
              </h1>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#475569] md:text-lg">
                Si necesitas orientación en materia penal, puedes escribirme
                directamente por WhatsApp o correo para revisar tu situación y
                coordinar una consulta de forma cercana, confidencial y seria.
              </p>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#071426]/8 bg-white shadow-[0_22px_60px_rgba(7,20,38,0.08)]">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="bg-[#071426] px-8 py-10 text-white md:px-10 md:py-12">
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#C8A96A]">
                      Defensa penal privada
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                      Comprometidos con tu defensa
                    </h2>

                    <p className="mt-6 text-[16px] leading-8 text-slate-300 md:text-lg">
                      Estamos comprometidos con tu defensa en cada etapa del
                      proceso judicial. Trabajamos con dedicación, rigurosidad y
                      una estrategia jurídica orientada a proteger tus derechos
                      e intereses.
                    </p>

                    <p className="mt-5 text-[16px] leading-8 text-slate-300 md:text-lg">
                      Además, contamos con socios especialistas en diversas
                      materias del derecho para brindarte una asesoría integral y
                      ayudarte de manera completa en tu situación legal.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-300">
                        Atención personalizada
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-300">
                        Confidencialidad
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-300">
                        Defensa estratégica
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center bg-[#F7F4EE] px-8 py-10 md:px-10 md:py-12">
                    <div className="w-full rounded-[1.75rem] border border-[#071426]/8 bg-white p-7 shadow-[0_16px_40px_rgba(7,20,38,0.06)] md:p-8">
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A07F45]">
                        Contacto directo
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#071426]">
                        Habla por WhatsApp
                      </h3>

                      <p className="mt-4 text-[15px] leading-7 text-[#475569] md:text-base">
                        Escríbeme directamente para revisar tu caso, resolver
                        dudas iniciales y orientarte sobre los pasos a seguir.
                      </p>

                      <a
                        href="https://wa.me/56934430939"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex rounded-full bg-[#C8A96A] px-7 py-3.5 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
                      >
                        Hablar por WhatsApp
                      </a>

                      <div className="mt-6 border-t border-[#071426]/8 pt-5">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A07F45]">
                          Correo electrónico
                        </p>

                        <a
                          href="mailto:karinaosoriorendon@gmail.com"
                          className="mt-2 block break-all text-sm text-[#475569] transition hover:text-[#071426]"
                        >
                          karinaosoriorendon@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-[#071426]/8 bg-white px-6 py-6 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                  <p className="text-lg font-semibold text-[#071426]">Consulta directa</p>
                  <p className="mt-2 text-sm leading-7 text-[#475569]">
                    Contacto rápido por WhatsApp para una primera orientación.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[#071426]/8 bg-white px-6 py-6 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                  <p className="text-lg font-semibold text-[#071426]">Atención cercana</p>
                  <p className="mt-2 text-sm leading-7 text-[#475569]">
                    Revisión seria de tu situación con enfoque personalizado.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[#071426]/8 bg-white px-6 py-6 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                  <p className="text-lg font-semibold text-[#071426]">Confidencialidad</p>
                  <p className="mt-2 text-sm leading-7 text-[#475569]">
                    Comunicación reservada y comprometida con tu defensa.
                  </p>
                </div>
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