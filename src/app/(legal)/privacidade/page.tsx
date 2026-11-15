import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a IAlem trata os dados de quem fala com a gente pelo WhatsApp, pelo Instagram ou pelo site, e como pedir a exclusão.",
  alternates: { canonical: "/privacidade" },
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

const toc: [string, string][] = [
  ["quem-somos", "Quem somos"],
  ["dados-coletados", "Dados que coletamos"],
  ["uso-dos-dados", "Uso dos dados"],
  ["base-legal", "Base legal"],
  ["inteligencia-artificial", "Inteligência artificial"],
  ["compartilhamento", "Compartilhamento"],
  ["retencao", "Tempo de guarda"],
  ["seus-direitos", "Seus direitos"],
  ["exclusao-de-dados", "Exclusão dos seus dados"],
  ["cookies", "Cookies e o site"],
  ["seguranca", "Segurança"],
  ["contato", "Mudanças e contato"],
];

const num = (n: number) => String(n).padStart(2, "0");

export default function PrivacidadePage() {
  return (
    <main className="legal" id="conteudo">
      <div className="legal-head">
        <p className="eyebrow">Documento legal</p>
        <h1>Política de privacidade</h1>
        <p className="legal-updated">Última atualização: 15 de novembro de 2026</p>
        <p className="legal-lede">
          Esta política explica como a IAlem trata os dados de quem fala com a gente pelo WhatsApp,
          pelo Instagram ou pelo site. Se tiver dúvida, escreva para <Mail />.
        </p>
      </div>

      <nav className="legal-toc" aria-labelledby="toc-titulo">
        <p className="legal-toc-title" id="toc-titulo">Nesta página</p>
        <ol>
          {toc.map(([id, label], i) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span>{num(i + 1)}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="legal-body">
        <section className="legal-sec" id="quem-somos" aria-labelledby="h-quem-somos">
          <h2 id="h-quem-somos"><span className="num">01</span>Quem somos</h2>
          <p>
            A IAlem, inscrita no CNPJ <strong>66.012.830/0001-47</strong>, é a responsável pelo
            tratamento dos seus dados pessoais. Pela Lei Geral de Proteção de Dados (Lei
            13.709/2018, a LGPD), somos a &quot;controladora&quot;.
          </p>
          <p>
            Nosso canal para qualquer assunto de privacidade é o e-mail <strong><Mail /></strong>.
          </p>
        </section>

        <section className="legal-sec" id="dados-coletados" aria-labelledby="h-dados-coletados">
          <h2 id="h-dados-coletados"><span className="num">02</span>Quais dados coletamos</h2>
          <p>
            Quando você conversa com o atendimento da IAlem pelo WhatsApp ou pelo Instagram (perfil
            ialem.ai), recebemos:
          </p>
          <ul>
            <li>o seu nome, como aparece no seu perfil;</li>
            <li>o seu telefone (no WhatsApp) ou o seu identificador no Instagram;</li>
            <li>o conteúdo das suas mensagens, inclusive áudios;</li>
            <li>o que você mesmo contar na conversa, como o nome da sua empresa e o que você precisa.</li>
          </ul>
          <p>
            Não precisamos de documentos, dados de pagamento nem dados sensíveis para atender você.
            Evite enviar esse tipo de informação na conversa.
          </p>
        </section>

        <section className="legal-sec" id="uso-dos-dados" aria-labelledby="h-uso-dos-dados">
          <h2 id="h-uso-dos-dados"><span className="num">03</span>Para que usamos os seus dados</h2>
          <p>Usamos os dados para três coisas:</p>
          <ol>
            <li>responder às suas mensagens;</li>
            <li>entender a sua necessidade (qualificar o contato);</li>
            <li>
              encaminhar a conversa ao time da IAlem, que recebe um resumo do atendimento por e-mail.
            </li>
          </ol>
          <p>
            Não usamos os seus dados para outra finalidade. Não vendemos dados pessoais. A IAlem não
            usa as suas conversas para treinar modelos de inteligência artificial.
          </p>
        </section>

        <section className="legal-sec" id="base-legal" aria-labelledby="h-base-legal">
          <h2 id="h-base-legal"><span className="num">04</span>Por que podemos tratar os seus dados</h2>
          <p>
            Tratamos os seus dados porque você nos procurou e pediu uma conversa ou uma proposta.
            Isso se apoia na LGPD, art. 7º, inciso V (procedimentos preliminares de um contrato, a
            pedido da pessoa) e, quando for o caso, no art. 7º, inciso IX (legítimo interesse da
            IAlem em atender e responder quem a procura).
          </p>
        </section>

        <section className="legal-sec" id="inteligencia-artificial" aria-labelledby="h-inteligencia-artificial">
          <h2 id="h-inteligencia-artificial"><span className="num">05</span>Atendimento com inteligência artificial</h2>
          <p>
            Parte do atendimento é feita por um assistente de inteligência artificial. Ele responde
            às suas mensagens e transcreve áudios. Quando você precisar falar com uma pessoa, o time
            da IAlem assume a conversa a partir do resumo enviado por e-mail.
          </p>
        </section>

        <section className="legal-sec" id="compartilhamento" aria-labelledby="h-compartilhamento">
          <h2 id="h-compartilhamento"><span className="num">06</span>Com quem compartilhamos os dados</h2>
          <p>
            Para o atendimento funcionar, os dados passam por empresas que prestam serviço a nós.
            Elas só tratam os dados para esse fim.
          </p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr>
                  <th scope="col">Quem</th>
                  <th scope="col">Para que</th>
                  <th scope="col">Onde fica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Quem"><strong>Meta</strong> (WhatsApp e Instagram)</td>
                  <td data-label="Para que">A conversa acontece nesses aplicativos e passa pela Meta.</td>
                  <td data-label="Onde fica">Conforme a Meta informa nas políticas dela</td>
                </tr>
                <tr>
                  <td data-label="Quem"><strong>OpenAI</strong></td>
                  <td data-label="Para que">Gera as respostas da inteligência artificial e transcreve áudios. A conta é da IAlem.</td>
                  <td data-label="Onde fica">Servidores fora do Brasil</td>
                </tr>
                <tr>
                  <td data-label="Quem"><strong>Servidor da IAlem</strong> (n8n e banco de dados, hospedados na SaveInCloud)</td>
                  <td data-label="Para que">Guarda e organiza as conversas e executa o atendimento. O servidor é contratado pela IAlem.</td>
                  <td data-label="Onde fica">Brasil</td>
                </tr>
                <tr>
                  <td data-label="Quem"><strong>Google</strong> (Gmail, e-mail da IAlem)</td>
                  <td data-label="Para que">Recebe o resumo de cada atendimento e os pedidos enviados ao nosso e-mail.</td>
                  <td data-label="Onde fica">Servidores do Google, que podem ficar fora do Brasil</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Também podemos compartilhar dados quando a lei ou uma autoridade exigir.</p>
          <h3>Transferência para fora do Brasil</h3>
          <p>
            A OpenAI e o Google podem processar dados em servidores fora do Brasil. Por isso, parte
            das suas mensagens e áudios é enviada ao exterior para gerar respostas e transcrições, e
            o resumo do atendimento fica no e-mail da IAlem. Fazemos isso nas hipóteses que a LGPD
            permite para transferência internacional (art. 33). Usamos a OpenAI apenas pela API
            contratada pela IAlem. A OpenAI informa que dados enviados pela API não são usados para
            treinar os modelos dela por padrão.
          </p>
        </section>

        <section className="legal-sec" id="retencao" aria-labelledby="h-retencao">
          <h2 id="h-retencao"><span className="num">07</span>Por quanto tempo guardamos os dados</h2>
          <p>
            Guardamos os seus dados pelo tempo necessário para atender você e cumprir obrigações
            legais. Depois disso, eles são excluídos.
          </p>
          <p>
            Cópias de segurança (backups) do servidor também podem conter os seus dados. Quando você
            pede a exclusão, ela alcança o backup assim que ele for substituído por uma cópia mais
            nova.
          </p>
        </section>

        <section className="legal-sec" id="seus-direitos" aria-labelledby="h-seus-direitos">
          <h2 id="h-seus-direitos"><span className="num">08</span>Os seus direitos</h2>
          <p>A LGPD (art. 18) garante que você pode pedir à IAlem:</p>
          <ul>
            <li>confirmar se tratamos dados seus;</li>
            <li>acessar os dados que temos;</li>
            <li>corrigir dados incompletos, errados ou desatualizados;</li>
            <li>anonimizar, bloquear ou eliminar dados desnecessários ou tratados fora da lei;</li>
            <li>eliminar os dados tratados com base no seu consentimento;</li>
            <li>receber seus dados em formato que permita levá-los a outro serviço (portabilidade);</li>
            <li>saber com quem compartilhamos os seus dados;</li>
            <li>
              saber o que acontece se você não quiser dar consentimento, e retirá-lo quando o
              tratamento depender dele.
            </li>
          </ul>
          <p>
            Para qualquer um desses pedidos, escreva para <strong><Mail /></strong>. Responderemos
            em até <strong>15 dias</strong>.
          </p>
          <p>
            Se achar que não resolvemos o seu problema, você pode reclamar à Autoridade Nacional de
            Proteção de Dados (ANPD).
          </p>
        </section>

        <section className="legal-sec" id="exclusao-de-dados" aria-labelledby="h-exclusao-de-dados">
          <h2 id="h-exclusao-de-dados"><span className="num">09</span>Como pedir a exclusão dos seus dados</h2>
          <p>
            Você pode pedir a qualquer momento que a IAlem apague os dados da sua conversa. É
            simples:
          </p>
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
          <p><strong>O que a IAlem não apaga por conta própria:</strong></p>
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
          </ul>
          <p>
            Os dados já enviados à OpenAI para gerar uma resposta ficam sob as regras de retenção da
            OpenAI para a API.
          </p>
        </section>

        <section className="legal-sec" id="cookies" aria-labelledby="h-cookies">
          <h2 id="h-cookies"><span className="num">10</span>Cookies e o site ialem.ai</h2>
          <p>
            O site ialem.ai usa o Meta Pixel na página inicial. Ele é um pequeno código da Meta que
            mede o resultado dos nossos anúncios, como quantas pessoas chegaram ao site depois de
            ver um anúncio. Para isso, ele pode usar cookies e registrar dados da sua visita, como o
            endereço IP e o navegador. Esses dados são tratados também pela Meta, conforme as
            políticas dela. Você pode bloquear cookies e rastreadores nas configurações do seu
            navegador ou do aparelho.
          </p>
          <p>O site não tem formulário de cadastro. O contato é feito por WhatsApp ou por e-mail.</p>
        </section>

        <section className="legal-sec" id="seguranca" aria-labelledby="h-seguranca">
          <h2 id="h-seguranca"><span className="num">11</span>Segurança</h2>
          <p>
            Guardamos os dados em servidor contratado pela IAlem. Adotamos medidas técnicas e
            administrativas razoáveis para proteger os dados, mas nenhum sistema é totalmente livre
            de risco. Se houver um incidente que possa causar dano a você, avisaremos você e a ANPD,
            como a lei determina.
          </p>
        </section>

        <section className="legal-sec" id="contato" aria-labelledby="h-contato">
          <h2 id="h-contato"><span className="num">12</span>Mudanças e contato</h2>
          <p>
            Podemos atualizar esta página. A data no topo mostra a última versão. Quando a mudança
            for importante, avisaremos pelos nossos canais.
          </p>
          <p>
            Dúvidas, pedidos ou reclamações sobre privacidade: <strong><Mail /></strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
