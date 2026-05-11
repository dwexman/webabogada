import Link from "next/link";

const highlightedCases = [
  {
    tag: "Libertad",
    title: "Legítima defensa en causa por homicidio calificado",
    court: "Tribunal Oral en lo Penal de Rancagua",
    reference: "RIT 317-2021",
    result:
      "Se solicitaba una pena de 15 años por homicidio calificado. Durante el juicio oral, se logró que se acogiera la legítima defensa, permitiendo que el representado recuperara su libertad.",
  },
  {
    tag: "Recalificación",
    title: "Recalificación de microtráfico a consumo personal",
    court: "Tribunal Oral en lo Penal de Viña del Mar",
    reference: "Sentencia 331-2022",
    result:
      "Se logró recalificar el delito de microtráfico a una falta contemplada en la Ley 20.000, relacionada con consumo personal y próximo en el tiempo.",
  },
  {
    tag: "Corte Suprema",
    title: "Libertad condicional acogida por la Corte Suprema",
    court: "Excelentísima Corte Suprema",
    reference: "Roles 63502 y 63630-2021",
    result:
      "La Corte Suprema revocó la sentencia que había rechazado la libertad condicional, otorgando dicho beneficio y permitiendo que el representado recuperara su libertad.",
  },
];

export default function CasesPreview() {
  return (
    <section className="bg-[#F6F1E8] px-6 py-16 text-[#071426] sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9B7B3F] sm:tracking-[0.28em]">
              Casos de éxito
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Resultados relevantes en causas penales
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#071426]/68">
              Una selección de casos en los que se obtuvieron resultados
              favorables, incluyendo libertades recuperadas, recalificaciones y
              recursos acogidos.
            </p>
          </div>

          <Link
            href="/casos-exito"
            className="inline-flex w-fit justify-center rounded-full bg-[#071426] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(7,20,38,0.22)]"
          >
            Ver más casos de éxito
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlightedCases.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[380px] flex-col rounded-[2rem] border border-[#071426]/10 bg-white p-6 shadow-[0_18px_50px_rgba(7,20,38,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(7,20,38,0.14)]"
            >
              <span className="w-fit rounded-full bg-[#F6F1E8] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B3F]">
                {item.tag}
              </span>

              <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#071426]">
                {item.title}
              </h3>

              <div className="mt-6 space-y-4 border-t border-[#071426]/10 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#071426]/38">
                    Tribunal
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#071426]/72">
                    {item.court}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#071426]/38">
                    Referencia
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#071426]/72">
                    {item.reference}
                  </p>
                </div>
              </div>

              <p className="mt-6 flex-1 text-sm leading-7 text-[#071426]/68">
                {item.result}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/casos-exito"
            className="inline-flex justify-center rounded-full border border-[#071426]/15 bg-white px-6 py-3 text-sm font-semibold text-[#071426] transition duration-300 hover:border-[#C8A96A]/70 hover:text-[#9B7B3F]"
          >
            Ver todos los casos
          </Link>
        </div>
      </div>
    </section>
  );
}