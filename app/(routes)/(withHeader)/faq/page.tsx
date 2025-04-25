"use client";

import Footer from "@/app/components/Footer/Footer";
import "./style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import SearchBarDesktop from "@/app/components/Filters/SearchBar";
import HavLogo from "@/app/components/IconsTSX/HavLogoLight";
import Button from "@/app/components/Inputs/Button";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";

export default function FAQPage() {
  return (
    <>
      <Title tag={"h1"} text={"Perguntas Frequentes"} />
      
      <div className="navSubtitle">
        <p>
          Aqui você encontra respostas rápidas e práticas para as dúvidas mais
          comuns sobre nossos produtos e serviços.
        </p>
      </div>

      {/* <div className="searchBar" style={{ width: "60%" }}>
        <SearchBarDesktop placeholder="Busca:" />
      </div> */}

      <div className="searchAndBoxesContainer">
        {/* CAIXA DE VENDA */}
        <div className="vendaBox">
          <HavLogo width={50} height={50} />
          <Title tag={"h2"} text={"Venda"} />
          
          <div className="questions">
            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>Quais tipos de imóveis estão disponíveis para compra?</p>
              </div>
              <div className="question-answer">
                <p>Temos apartamentos, casas, terrenos e imóveis comerciais em diversas localizações e padrões.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>O imóvel está pronto para morar ou em construção?</p>
              </div>
              <div className="question-answer">
                <p>Oferecemos ambos: imóveis prontos para moradia e em construção, com previsão de entrega detalhada.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>Quais são os documentos necessários para realizar a compra de um imóvel?</p>
              </div>
              <div className="question-answer">
                <p>RG, CPF, comprovante de renda e residência. Para financiamento, são necessários documentos adicionais como holerite e extrato bancário.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>Como funciona o processo de escritura e registro do imóvel?</p>
              </div>
              <div className="question-answer">
                <p>Nossos corretores acompanham todo o processo desde a documentação até a assinatura na cartório, garantindo segurança jurídica.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
          </div>
        </div>

        {/* CAIXA DE ALUGUEL */}
        <div className="aluguelBox">
          <HavLogo width={50} height={50} />
          <Title tag={"h2"} text={"Aluguel"} />
          
          <div className="questions">
            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>Há um período mínimo de contrato para aluguel?</p>
              </div>
              <div className="question-answer">
                <p>Sim, o contrato mínimo é de 12 meses, com possibilidade de renovação conforme acordo entre as partes.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>O aluguel inclui taxas como IPTU e condomínio?</p>
              </div>
              <div className="question-answer">
                <p>O valor base do aluguel não inclui essas taxas, mas oferecemos pacotes completos que podem incluir esses custos.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>Os imóveis estão mobiliados?</p>
              </div>
              <div className="question-answer">
                <p>Temos opções mobiliadas, semi-mobiliadas e vazias, conforme sua necessidade e preferência.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
            
            <div className="question-wrapper">
              <div className="question-trigger">
                <p>Como funciona a renovação do contrato de aluguel?</p>
              </div>
              <div className="question-answer">
                <p>A renovação é negociada 60 dias antes do término do contrato, podendo ser ajustados valor e condições.</p>
              </div>
            </div>

            <HorizontalLine size={300} color="#F0D8DC" />
          </div>
        </div>
      </div>

      {/* <div className="chatButtonContainer" style={{ display: "flex", alignItems: "center" }}>
            <Button type="button" size="large" text="ACESSE O CHAT" hover="darken" color="white" background="#B23F52"/>
            <span className="orText">OU</span><img src="/Image/whatsapp.png" alt="Whatsapp icon" />
            </div> */}

            <Footer/>
    </>
  );
}