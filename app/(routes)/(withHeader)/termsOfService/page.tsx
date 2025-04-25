import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "./style/style.css"; // Altere para o arquivo CSS correto
import Title from "@/app/components/NonInteractable/Title";
import NavBarAdm from "@/app/components/Header/NavBarAdm";
import { NavBarPath } from "@/app/components/globalFormsConfig/navBarPaths";
import Footer from "@/app/components/Footer/Footer";

export default function page() {
  return (
    <>
      <Title tag={"h1"} text={"POLÍTICA DE PRIVACIDADE E TERMOS DE USO"} />
      <NavBarAdm options={NavBarPath.policy} />

      <div className="terms-of-use-container">
        <div className="terms-of-use-text">
          <h1>TERMOS DE USO</h1>
          <section>
            <h2>1. Introdução</h2>
            <p>
              1.1. Estes Termos de Uso regem o acesso e uso dos serviços fornecidos pela Imobiliária Hav, incluindo seu site, aplicativos, e outras plataformas digitais. Ao acessar nossos serviços, você aceita os Termos aqui descritos. Caso não concorde, por favor, interrompa o uso da plataforma.
            </p>
            <p>
              1.2. Leia atentamente este documento antes de utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2>2. Objeto</h2>
            <p>
              2.1. Os serviços oferecidos pela Imobiliária Hav incluem a intermediação de compra, venda e locação de imóveis, bem como a divulgação de anúncios e agendamentos de visitas.
            </p>
            <p>
              2.2. A Hav empenha-se em garantir a qualidade das informações fornecidas, mas não se responsabiliza por erros ou omissões. Alterações nos termos podem ser realizadas a qualquer momento.
            </p>
          </section>

          <section>
            <h2>3. Responsabilidades do Usuário</h2>
            <p>
              3.1. O usuário compromete-se a utilizar a plataforma para finalidades lícitas, fornecendo informações verídicas e atualizadas.
            </p>
            <p>
              3.2. O uso indevido da plataforma, como práticas de scraping, divulgação de informações falsas ou violação de direitos autorais, resultará em medidas legais.
            </p>
          </section>

          <section>
            <h2>4. Limitação de Responsabilidade</h2>
            <p>
              A Hav não se responsabiliza por:
            </p>
            <p>
              4.1. Indisponibilidade temporária da plataforma devido a manutenções ou problemas técnicos.
            </p>
            <p>
              4.2. Ações ou relações entre usuários, proprietários e terceiros.
            </p>
          </section>

          <section>
            <h2>5. Direitos e Licenças</h2>
            <p>
              5.1. Os serviços e conteúdos da plataforma são de propriedade exclusiva da Hav e protegidos por direitos autorais. É proibido reproduzir, modificar ou explorar qualquer parte da plataforma sem autorização prévia.
            </p>
          </section>

          <section>
            <h2>6. Alterações nos Termos</h2>
            <p>
              6.1. A Hav reserva-se o direito de modificar os Termos de Uso, com vigência imediata após sua publicação.
            </p>
          </section>
        </div>
      </div>

      
      <Footer/>
    </>
  );
}
