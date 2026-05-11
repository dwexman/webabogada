"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

const filters = [
  { id: "todos", label: "Todos" },
  { id: "libertad", label: "Libertad" },
  { id: "recalificacion", label: "Recalificación" },
  { id: "prescripcion", label: "Prescripción" },
  { id: "recursos", label: "Recursos" },
  { id: "constitucional", label: "Tribunal Constitucional" },
];

const cases = [
  {
    number: "01",
    categories: ["libertad"],
    tag: "Libertad",
    title: "Legítima defensa en causa por homicidio calificado",
    court: "Tribunal Oral en lo Penal de Rancagua",
    reference: "RIT 317-2021",
    result:
      "Se solicitaba una pena de 15 años de presidio mayor en su grado medio por el delito de homicidio calificado. Durante el juicio oral, se logró que se acogiera la legítima defensa, permitiendo que el representado recuperara su libertad.",
  },
  {
    number: "02",
    categories: ["constitucional", "libertad"],
    tag: "Tribunal Constitucional",
    title: "Pena sustitutiva en causas vinculadas a Ley de Armas",
    court: "Tribunal Constitucional",
    reference: "Roles 10023-20, 11263-21, 11265-21, entre otros",
    result:
      "Experiencia en requerimientos ante el Tribunal Constitucional por aplicación de pena sustitutiva en relación con la Ley de Armas, logrando que se otorgara cumplimiento de pena en libertad.",
  },
  {
    number: "03",
    categories: ["recalificacion"],
    tag: "Recalificación",
    title: "Recalificación de microtráfico a consumo personal",
    court: "Tribunal Oral en lo Penal de Viña del Mar",
    reference: "Sentencia 331-2022, de 20 de enero de 2022",
    result:
      "Se logró recalificar el delito de microtráfico a una falta contemplada en la Ley 20.000, relativa al consumo personal y próximo en el tiempo.",
  },
  {
    number: "04",
    categories: ["prescripcion"],
    tag: "Prescripción",
    title: "Prescripción de pena impuesta",
    court: "Segundo Juzgado de Garantía de Santiago",
    reference: "RIT 15751",
    result:
      "Se acogió la prescripción de la pena impuesta al representado.",
  },
  {
    number: "05",
    categories: ["prescripcion", "libertad"],
    tag: "Corte Suprema",
    title: "Prescripción acogida por la Corte Suprema",
    court: "Excelentísima Corte Suprema",
    reference: "Rol 16298-2024",
    result:
      "La Corte Suprema acogió la prescripción de la pena impuesta al representado, permitiendo que recuperara su libertad.",
  },
  {
    number: "06",
    categories: ["recalificacion"],
    tag: "Recalificación",
    title: "Recalificación de delito de microtráfico",
    court: "Tribunal Oral en lo Penal de Viña del Mar",
    reference: "RIT 446-2021",
    result:
      "Se logró recalificar el delito de microtráfico del artículo 4 de la Ley 20.000 a la falta del artículo 50 de la misma ley.",
  },
  {
    number: "07",
    categories: ["libertad", "recursos"],
    tag: "Prisión preventiva",
    title: "Revocación de prisión preventiva",
    court: "Juzgado de Garantía de Los Andes / Corte de Apelaciones de Valparaíso",
    reference: "RIT 1172-2026",
    result:
      "La Ilustrísima Corte de Apelaciones de Valparaíso revocó la prisión preventiva del representado, permitiendo que recuperara su libertad.",
  },
  {
    number: "08",
    categories: ["libertad", "recursos"],
    tag: "Libertad condicional",
    title: "Libertad condicional acogida por la Corte Suprema",
    court: "Excelentísima Corte Suprema",
    reference: "Roles 63502 y 63630-2021",
    result:
      "La Corte Suprema revocó la sentencia de la Corte de Apelaciones de Valparaíso que había rechazado la libertad condicional, otorgando dicho beneficio y permitiendo que el representado recuperara su libertad.",
  },
  {
    number: "09",
    categories: ["libertad", "recursos"],
    tag: "Amparo",
    title: "Amparo acogido por libertad condicional",
    court: "Ilustrísima Corte de Apelaciones de La Serena",
    reference: "Rol 373-2023",
    result:
      "Se acogió recurso de amparo vinculado al beneficio intrapenitenciario de libertad condicional, permitiendo que el representado recuperara su libertad.",
  },
  {
    number: "10",
    categories: ["recursos"],
    tag: "Corte Suprema",
    title: "Recurso de amparo por abonos de pena",
    court: "Excelentísima Corte Suprema",
    reference: "Rol 121275-2022",
    result:
      "Se acogió recurso de amparo relacionado con los abonos de la pena. La jurisprudencia fue publicada por Diario Constitucional.",
  },
];

export default function CasosExitoPage() {
  const [selectedFilter, setSelectedFilter] = useState("todos");

  const filteredCases = useMemo(() => {
    if (selectedFilter === "todos") return cases;

    return cases.filter((item) => item.categories.includes(selectedFilter));
  }, [selectedFilter]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#071426] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#DCC08B] sm:tracking-[0.28em]">
                Experiencia penal
              </span>

              <h1 className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Algunos casos de éxito y libertades obtenidas
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Defensa penal estratégica en causas complejas, recursos ante
                Cortes Superiores, requerimientos ante el Tribunal Constitucional,
                recalificación de delitos, libertad condicional, prescripción de
                penas y revisión de medidas cautelares.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/56934430939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(200,169,106,0.28)]"
                >
                  Consultar por WhatsApp
                </a>

                <Link
                  href="/contacto"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  Ir a contacto
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-16">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-[#DCC08B]">10+</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Casos destacados entre muchos otros resultados favorables
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-[#DCC08B]">
                  Libertad
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Experiencia en causas donde representados recuperaron su
                  libertad
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-[#DCC08B]">TC</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Requerimientos ante el Tribunal Constitucional
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F1E8] px-6 py-16 text-[#071426] sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9B7B3F] sm:tracking-[0.28em]">
                  Casos destacados
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Una selección de resultados relevantes
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-[#071426]/68">
                  Estos son solo algunos casos de éxito. Entre muchos otros
                  resultados, se destacan libertades recuperadas, recalificaciones,
                  prescripciones y recursos acogidos.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = selectedFilter === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                        isActive
                          ? "bg-[#071426] text-white shadow-[0_12px_30px_rgba(7,20,38,0.18)]"
                          : "border border-[#071426]/10 bg-white text-[#071426]/72 hover:border-[#C8A96A]/60 hover:text-[#071426]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredCases.map((item) => (
                <article
                  key={`${item.number}-${item.title}`}
                  className="group flex min-h-[420px] flex-col rounded-[2rem] border border-[#071426]/10 bg-white p-6 shadow-[0_18px_50px_rgba(7,20,38,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(7,20,38,0.14)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-[#F6F1E8] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B3F]">
                      {item.tag}
                    </span>

                    <span className="text-4xl font-semibold tracking-[-0.06em] text-[#071426]/10 transition duration-300 group-hover:text-[#C8A96A]/45">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#071426]">
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

            <div className="mt-12 rounded-[2rem] border border-[#C8A96A]/30 bg-[#FFF9ED] p-6 text-center sm:p-8">
              <p className="text-lg font-semibold leading-8 text-[#071426]">
                Estos son solo algunos de los resultados obtenidos.
              </p>

              <p className="mt-2 text-base leading-7 text-[#071426]/68">
                Entre muchos otros casos de éxito y libertades recuperadas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#071426] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#DCC08B] sm:tracking-[0.28em]">
              Agenda una consulta
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Cada causa requiere una estrategia particular
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
              Si necesitas orientación en una causa penal, puedes comunicarte
              directamente para revisar los antecedentes y evaluar los próximos
              pasos.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/56934430939"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-[#071426] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(200,169,106,0.28)]"
              >
                Hablar por WhatsApp
              </a>

              <a
                href="mailto:karinaosoriorendon@gmail.com"
                className="inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Enviar email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}