import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

/* Resolve metadataBase automatically from Vercel env or fallback */
const getBaseUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "IAlem — Leve seu negócio além com IA, sem perder o jeito humano",
    template: "%s | IAlem",
  },
  description:
    "Agência de Automação Inteligente. Levamos seu negócio além com agentes de IA sob medida — do atendimento à operação — com time consultivo e um ponto de contato do diagnóstico à operação. Sem perder o jeito humano.",
  keywords: [
    "inteligência artificial",
    "agentes de IA",
    "atendimento automatizado",
    "automação WhatsApp",
    "chatbot inteligente",
    "qualificação de leads",
    "automação comercial",
    "CRM",
    "agendamento automático",
    "atendimento 24/7",
    "IA para empresas",
    "automação de vendas",
  ],
  authors: [{ name: "IAlem" }],
  creator: "IAlem",
  publisher: "IAlem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "IAlem",
    title: "IAlem — Leve seu negócio além com IA, sem perder o jeito humano",
    description:
      "Agência de Automação Inteligente. Levamos seu negócio além com agentes de IA sob medida — do atendimento à operação — com time consultivo e um ponto de contato do diagnóstico à operação. Sem perder o jeito humano.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAlem — Leve seu negócio além com IA, sem perder o jeito humano",
    description:
      "Leve seu negócio além com IA — do atendimento à operação. Agência que desenha, treina e opera agentes sob medida.",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1515260019958983');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1515260019958983&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
}
