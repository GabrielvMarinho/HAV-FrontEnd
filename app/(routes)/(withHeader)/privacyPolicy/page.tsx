import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "./style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import Footer from "@/app/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Title tag={"h1"} text={"POLÍTICA DE PRIVACIDADE E TERMOS DE USO"} />
      <NavBarAdm options={NavBarPath.policy} />

      {/* Container principal para centralizar o conteúdo */}
      <div className="privacy-policy-container">
        {/* Container para o conteúdo com o texto */}
        <div className="privacy-policy-text">
          <h1>POLÍTICA DE PRIVACIDADE E TERMOS DE USO</h1>
          <p>Atualizada em 2024</p>

          {/* Seções de conteúdo */}
          <section>
            <h2>1. Coleta de Dados Pessoais</h2>
            <p>1.1
              Coletamos informações fornecidas diretamente por você, como nome,
              telefone e e-mail, bem como dados coletados automaticamente, como
              endereço IP e preferências de navegação, para melhorar sua
              experiência em nossa plataforma.
            </p>
          </section>

          <section>
            <h2>2. Uso dos Dados</h2>
            <p>Os dados são utilizados para:</p>
            <p>2.1. Melhorar e personalizar sua experiência na plataforma.</p>
            <p>2.2. Garantir segurança contra fraudes.</p>
            <p>2.3. Enviar comunicações relevantes sobre nossos serviços.</p>
          </section>

          <section>
            <h2>3. Compartilhamento de Dados</h2>
            <p>Poderemos compartilhar seus dados com:</p>
            <p>3.1. Empresas parceiras para análise cadastral e prestação de serviços.</p>
            <p>3.2. Autoridades governamentais, mediante solicitação legal.</p>
          </section>

          <section>
            <h2>4. Proteção de Dados</h2>
            <p> 4.1. 
              Adotamos medidas técnicas para proteger suas informações, incluindo
              criptografia e controle de acesso.
            </p>
          </section>

          <section>
            <h2>5. Direitos do Usuário</h2>
            <p>De acordo com a LGPD, você tem direito a:</p>
            <p>5.1. Acessar, corrigir ou excluir seus dados.</p>
            <p>5.2. Revogar consentimentos ou solicitar informações sobre o tratamento de dados.</p>
          </section>

          <section>
            <h2>6. Retenção de Dados</h2>
            <p>
              6.1. Os dados são armazenados pelo tempo necessário para cumprir as
              finalidades para as quais foram coletados ou conforme exigido por
              lei.
            </p>
          </section>

          <section>
            <h2>Contato</h2>
            <p>
              Para dúvidas ou solicitações relacionadas à privacidade, entre em
              contato através de: privacidade@imobiliariahav.com.br
            </p>
          </section>

          <section>
            <h2>Atualizações</h2>
            <p>
              Esta política poderá ser atualizada periodicamente. A data da última
              atualização estará sempre destacada no início do documento.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
}
