import Link from "next/link";
import IAlemLogo from "./IAlemLogo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div style={{ color: "var(--gold)", marginBottom: 4 }}>
            <IAlemLogo height={22} />
          </div>
          <p className="footer-tag">
            Leve seu negócio além.
          </p>
        </div>
        <div>
          <h4>Solução</h4>
          <ul>
            <li><a href="#">Agentes</a></li>
            <li><a href="#">Integrações</a></li>
            <li><a href="#">Fluxos</a></li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href="mailto:contato@ialem.ai">contato@ialem.ai</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 IAlem Agência de Automação Inteligente</span>
        <nav className="footer-legal" aria-label="Documentos legais">
          <Link href="/privacidade">Política de privacidade</Link>
          <Link href="/exclusao-de-dados">Exclusão de dados</Link>
        </nav>
        <span>CNPJ 66.012.830/0001-47 · Brasil</span>
      </div>
    </footer>
  );
}
