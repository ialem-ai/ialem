import Link from "next/link";
import IAlemLogo from "./IAlemLogo";

export default function LegalHeader() {
  return (
    <header className="legal-top">
      <Link href="/" className="logo" aria-label="IAlem, voltar ao início do site">
        <IAlemLogo height={22} />
      </Link>
      <Link href="/" className="legal-back">
        <span aria-hidden="true">←</span> Voltar ao site
      </Link>
    </header>
  );
}
