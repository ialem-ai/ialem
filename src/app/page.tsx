import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LogoStrip from "@/components/LogoStrip";
import Agency from "@/components/Agency";
import Solution from "@/components/Solution";
import LiveDemo from "@/components/LiveDemo";
import HowItWorks from "@/components/HowItWorks";
import Numbers from "@/components/Numbers";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><LogoStrip /></Reveal>
      <Reveal><Agency /></Reveal>

      <Reveal><Solution /></Reveal>
      <Reveal><UseCases /></Reveal>
      <LiveDemo />
      <Reveal><Numbers /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Integrations /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>

      <Footer />
      <FloatingChat />
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1515260019958983');fbq('track','PageView');`}
      </Script>
      <noscript>
        <img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1515260019958983&ev=PageView&noscript=1" alt="" />
      </noscript>
    </>
  );
}
