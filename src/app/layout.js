import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://karinaosoriorendon.cl"),
  title: {
    default: "Karina Osorio Rendón | Abogada Penalista en Chile",
    template: "%s | Karina Osorio Rendón",
  },
  description:
    "Abogada penalista en Chile. Defensa penal privada y representación estratégica en causas por Ley 20.000, Ley de Armas, receptación, beneficios intrapenitenciarios, libertad condicional y querellas.",
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
    images: [
      {
        url: "/images/tarjetaabogada.jpeg",
        width: 1200,
        height: 630,
        alt: "Karina Osorio Rendón, abogada penalista en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karina Osorio Rendón | Abogada Penalista en Chile",
    description:
      "Defensa penal privada y representación estratégica en Chile. Asesoría legal penal personalizada.",
    images: ["/images/tarjetaabogada.jpeg"],
  },
  icons: {
    icon: "/images/tarjetaabogada.jpeg",
    shortcut: "/images/tarjetaabogada.jpeg",
    apple: "/images/tarjetaabogada.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17947230560"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17947230560');
        `}
      </Script>
    </html>
  );
}