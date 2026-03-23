import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] text-[#071426]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.08),transparent_22%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          {/* COLUMNA IZQUIERDA */}
          <div className="order-2 lg:order-1">
            <div className="mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[1.75rem] border border-[#071426]/8 bg-white p-2 shadow-[0_22px_55px_rgba(7,20,38,0.10)] md:rounded-[2rem] md:p-3">
                <div className="relative overflow-hidden rounded-[1.35rem] md:rounded-[1.6rem]">
                  <div className="relative h-[320px] w-full sm:h-[380px] md:h-[460px]">
                    <Image
                      src="/images/estudiojuridico.jpeg"
                      alt="Karina Osorio Rendón en su estudio jurídico"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/18 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="order-1 max-w-2xl lg:order-2">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#A07F45]">
              Sobre el estudio
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Defensa penal privada con experiencia, criterio y compromiso real
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#334155] md:text-lg">
              Karina Osorio Rendón lidera un estudio enfocado en{" "}
              <span className="font-semibold text-[#071426]">
                defensa penal privada
              </span>
              , con una práctica orientada a entregar acompañamiento cercano,
              análisis riguroso del caso y una estrategia jurídica seria en cada
              etapa del proceso.
            </p>

            <p className="mt-5 text-[16px] leading-8 text-[#334155] md:text-lg">
              El enfoque combina experiencia en derecho penal, litigación
              estratégica y atención personalizada, buscando proteger los
              derechos del cliente con claridad, confidencialidad y compromiso.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#071426]/10 bg-white px-5 py-5 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                <p className="text-2xl font-semibold text-[#071426]">+10 años</p>
                <p className="mt-1 text-sm leading-6 text-[#475569]">
                  Experiencia en derecho penal
                </p>
              </div>

              <div className="rounded-2xl border border-[#071426]/10 bg-white px-5 py-5 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                <p className="text-2xl font-semibold text-[#071426]">Defensa</p>
                <p className="mt-1 text-sm leading-6 text-[#475569]">
                  Privada y personalizada
                </p>
              </div>

              <div className="rounded-2xl border border-[#071426]/10 bg-white px-5 py-5 shadow-[0_12px_30px_rgba(7,20,38,0.05)]">
                <p className="text-2xl font-semibold text-[#071426]">Enfoque</p>
                <p className="mt-1 text-sm leading-6 text-[#475569]">
                  Estratégico y cercano
                </p>
              </div>
            </div>

            {/* TARJETA ABAJO DE LAS CAJITAS */}
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#071426]/8 bg-white p-3 shadow-[0_18px_45px_rgba(7,20,38,0.10)]">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              </div>

              <div className="relative overflow-hidden rounded-[1rem] border border-[#071426]/8 bg-[#F8F8F8]">
                <div className="relative h-[220px] w-full sm:h-[260px] md:h-[300px]">
                  <Image
                    src="/images/tarjetaabogada.jpeg"
                    alt="Tarjeta profesional de Karina Osorio Rendón"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}