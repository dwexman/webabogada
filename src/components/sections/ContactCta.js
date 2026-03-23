export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] text-[#071426]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,169,106,0.10),transparent_22%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-[#071426]/8 bg-white shadow-[0_22px_60px_rgba(7,20,38,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-[#071426] px-8 py-10 text-white md:px-10 md:py-12">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#C8A96A]">
                Agenda tu consulta
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
                Comprometidos con tu defensa
              </h2>

              <p className="mt-6 max-w-2xl text-[16px] leading-8 text-slate-300 md:text-lg">
                Estamos comprometidos con tu defensa en cada etapa del proceso
                judicial. Trabajamos incansablemente por tu libertad, brindando
                justicia y dedicación en cada caso.
              </p>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-300 md:text-lg">
                Además, contamos con socios especialistas en diversas materias
                del derecho para brindarte una asesoría integral y ayudarte de
                manera completa en tu situación legal.
              </p>
            </div>

            <div className="flex items-center bg-[#F7F4EE] px-8 py-10 md:px-10 md:py-12">
              <div className="w-full">
                <div className="rounded-[1.75rem] border border-[#071426]/8 bg-white p-7 shadow-[0_16px_40px_rgba(7,20,38,0.06)] md:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A07F45]">
                    Contacto directo
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#071426]">
                    Agenda tu consulta por WhatsApp
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#475569] md:text-base">
                    Escríbeme directamente para revisar tu caso y orientarte
                    sobre los pasos a seguir.
                  </p>

                  <a
                    href="https://wa.me/56934430939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex rounded-full bg-[#C8A96A] px-7 py-3.5 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}