import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exclusão de dados",
  description:
    "Como pedir que a IAlem apague os dados da sua conversa pelo WhatsApp ou pelo Instagram.",
  alternates: { canonical: "/exclusao-de-dados" },
};

const EMAIL = "ialemautomacao@gmail.com";

function Mail({ subject }: { subject?: string }) {
  const href = `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return (
    <a className="legal-mail" href={href}>
      {EMAIL}
    </a>
  );
}

export default function ExclusaoDeDadosPage() {
  return (
    <main className="legal" id="conteudo">
      <div className="legal-head">
        <p className="eyebrow">Documento legal</p>
        <h1>Exclusão de dados</h1>
        <p className="legal-updated">Última atualização: 15 de novembro de 2026</p>
        <p className="legal-lede">
          Se você falou com a IAlem pelo WhatsApp ou pelo Instagram (perfil ialem.ai), pode pedir a
          qualquer momento que a gente apague os dados da sua conversa.
        </p>
      </div>

      <div className="legal-body">
        <section className="legal-sec" id="como-pedir" aria-labelledby="h-como-pedir">
          <h2 id="h-como-pedir">Como pedir</h2>
          <ol>
            <li>
              Envie um e-mail para <strong><Mail subject="Exclusão de dados" /></strong> com o
              assunto <strong>&quot;Exclusão de dados&quot;</strong>.
            </li>
            <li>
              No texto, diga por qual canal você falou com a gente (<strong>WhatsApp</strong> ou{" "}
              <strong>Instagram</strong>) e informe o <strong>número de telefone</strong> ou o{" "}
              <strong>@ do Instagram</strong> que você usou. Precisamos disso para achar a sua
              conversa.
            </li>
            <li>
              Aguarde a nossa resposta. Podemos pedir uma confirmação de que o pedido é seu, para
              não apagar dados de outra pessoa.
            </li>
            <li>
              Apagamos os seus dados do nosso servidor e do e-mail do time, e{" "}
              <strong>avisamos por e-mail quando terminar</strong>. O prazo é de até{" "}
              <strong>15 dias</strong>.
            </li>
          </ol>
        </section>

        <section className="legal-sec" id="o-que-apagamos" aria-labelledby="h-o-que-apagamos">
          <h2 id="h-o-que-apagamos">O que apagamos</h2>
          <p>
            O seu nome, o seu telefone ou @ do Instagram, as mensagens e áudios da conversa e o
            resumo do atendimento que o time recebeu por e-mail. Cópias de segurança (backups) do
            servidor são substituídas com o tempo; a exclusão alcança o backup quando ele for
            trocado por uma cópia mais nova.
          </p>
        </section>

        <section className="legal-sec" id="o-que-nao-apagamos" aria-labelledby="h-o-que-nao-apagamos">
          <h2 id="h-o-que-nao-apagamos">O que a IAlem não apaga por conta própria</h2>
          <ul>
            <li>
              <strong>O histórico que fica no seu próprio aplicativo</strong> (WhatsApp ou
              Instagram). Você pode apagar essas mensagens direto no aplicativo.
            </li>
            <li>
              <strong>O que a Meta guarda.</strong> A Meta trata os dados do WhatsApp e do Instagram
              por conta própria, e só ela pode excluí-los. Para isso, use as configurações de
              privacidade da sua conta no WhatsApp ou no Instagram, ou procure a Meta pelos canais
              de privacidade dela.
            </li>
            <li>
              <strong>O que a lei nos obriga a manter.</strong> Se alguma lei exigir que guardemos
              uma informação, ela fica pelo tempo exigido e é apagada depois. Nesse caso, explicamos
              a você o motivo.
            </li>
            <li>
              Os dados já enviados à OpenAI para gerar uma resposta ficam sob as regras de retenção
              da OpenAI para a API.
            </li>
          </ul>
        </section>

        <section className="legal-sec" id="mais-informacoes" aria-labelledby="h-mais-informacoes">
          <h2 id="h-mais-informacoes">Mais informações</h2>
          <p>
            Veja como tratamos os seus dados na nossa <Link href="/privacidade">Política de privacidade</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
