import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://karinaosoriorendon.cl"),
  title: {
    default: "Karina Osorio Rendón | Abogada Penalista en Chile",
    template: "%s | Karina Osorio Rendón",
  },
  description:
    "Abogada penalista en Chile. Defensa penal privada, representación estratégica en causas por Ley 20.000, Ley de Armas, receptación, beneficios intrapenitenciarios, libertad condicional y querellas.",
  keywords: [
    "abogada penalista",
    "abogada penal",
    "defensa penal",
    "defensa penalista",
    "abogada penal chile",
    "defensa penal privada",
    "abogada defensora penal",
    "ley 20.000",
    "ley de armas",
    "receptación",
    "beneficios intrapenitenciarios",
    "libertad condicional",
    "querella penal",
    "abogada penal privada chile",
    "karina osorio rendón",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Karina Osorio Rendón | Abogada Penalista en Chile",
    description:
      "Defensa penal privada y representación estratégica en Chile. Asesoría en Ley 20.000, Ley de Armas, receptación, libertad condicional y querellas.",
    url: "https://karinaosoriorendon.cl",
    siteName: "Karina Osorio Rendón",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body>{children}</body>
    </html>
  );
}