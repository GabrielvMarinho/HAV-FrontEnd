"use client"

import DocumentIcon from "./components/IconsTSX/DocumentIcon"
import Button from "./components/Inputs/Button";
import Dropdown from "./components/Inputs/Dropdown";
import ArrowIcon from "./components/IconsTSX/ArrowIcon";
import InputText from "./components/Inputs/InputText"
import SelectedStar from "./components/IconsTSX/SelectedStar"
import NotSelectedStar from "./components/IconsTSX/NotSelectedStar"
import StarFavorite from "./components/Inputs/StarFavorite"
import Title from "./components/NonInteractable/Title"
import TableList from "./components/Information/TableList";
import Filter from "./components/Filters/Filter";
import InputDropdown from "./components/Inputs/InputDropdown";
import NavBarAdm from "./components/Header/NavBarAdm"
import SlideRange from "./components/Filters/SlideRange"
import SearchBarDesktop from "./components/Filters/SearchBar";
import Modal from "./components/Modal/Modal";
import SelectBox from "./components/Inputs/SelectBox";
import Link from "next/link";
import ActionButton from "./components/Inputs/ActionButton";
import Footer from "./components/Footer/Footer";
import HeaderAdm from "./components/Header/HeaderAdm";
import TapeCardImovel from "./components/Information/TapeCardImovel";
import StatusCardImovel from "./components/Information/CategoryCardImovel";
import RetangleStatusImovel from "./components/Information/RetangleStatusImovel";
import ButtonComprarAlugar from "./components/Inputs/ButtonComprarAlugar";
import CardImovel from "./components/Cards/CardImovel";

export default function Home() {
      const checkSelects = function () {
            var itens = document.body.querySelectorAll("[datatype='data-select-box-table-list'].selectedBox");

            console.log(itens)
      }
      return (
            <>
                  <HeaderAdm width={25.9} height={25.4} color="" />
                  <Link href="/Imoveis">Imóveis</Link>
                  <Link href="/RelatorioEAnalise">Relatório de analise</Link>
                  <SelectedStar width={54} height={54} color={"#001111"} />
                  <NotSelectedStar width={54} height={54} color={"#001111"} />
                  <DocumentIcon width={211} height={211} color={"#501010"} />
                  <Title tag="h1" text="titulo" />

                  <Title tag="h2" text="titulo" />
                  <Button func={checkSelects} size="small" text="adnasidunasd" backgroundColor="" color="" hover="darkHover" />
                  <Button func={checkSelects} size="medium" text="acesse o chat" backgroundColor="" color="" hover="darkHover" />
                  <Button func={checkSelects} size="large" text="acesse o chat" backgroundColor="" color="" hover="darkHover" />
                  <Modal id="x" trigger={
                        <Button func={checkSelects} size="large" text="abrir modal" backgroundColor="" color="" hover="darkHover" />
                  }></Modal>
                  <TableList size="large" titles={["finalidade", "tipo imóvel", "email", "proprietário"]}
                        data={[["COMPRA", "APARTAMENTO", "asdaoid@gmail.com", "Bianca Isabela Vaz"],
                        ["COMPRA ", "APARTAMENTO", "efvvv@gmail.com", "Bianca Isabela Vaz"]]} />
                  <Button func={checkSelects} size="large" text="mostrar todas as selectbox da pagina" backgroundColor="" color="" hover="darkHover" />
                  <Filter size="medium"
                        inputs={[<InputText size="medium" text="Nome" placeholder="ex: Bianca" id="nome" />,
                        <InputText size="medium" text="Email" placeholder="joao@gmail.com" id="email" />,
                        <InputText size="medium" text="Telefone" placeholder="ex: 672983579" id="telefone" />,
                        <InputText size="medium" text="CPF" placeholder="ex: 67298357955" id="cpf" />,
                        <InputDropdown size="medium" text="Status" id="status"
                              options={[['sssssss', "Indisponível"], ["bia", 'Disponível'], ["bia", 'Alugado'], ["bia", 'Vendido']]} />,
                        <SlideRange min={50000} max={2000000} step={10000} />]} />
                  <SearchBarDesktop placeholder="Busca:" />
                  <StarFavorite width={211} height={211} color={"#501010"} selected={true} />
                  <Dropdown options={[['sssssss', "Mais Próximo"], ["bia", 'Preço Mais Alto']]} />
                  <InputText id="email" size="small" text="texto" placeholder="hint" />
                  <InputText id="email" size="medium" text="texto" placeholder="hint" />
                  <InputText id="email" size="large" text="texto" placeholder="hint" />
                  <InputText id="email" size="extraLarge" text="texto" placeholder="hint" />
                  <NavBarAdm />
                  <InputText size="small" text="CPF" placeholder="hint" id="email" />
                  <ArrowIcon width={111} height={111} color={"#501010"} />
                  <ActionButton width={25} height={25} color="" context="admin" />
                  <div style={{marginBottom: "60px"}}>
                        <TapeCardImovel text="Promoção" />
                        <StatusCardImovel text="Venda" />
                        <RetangleStatusImovel text="Promoção" />
                        <ButtonComprarAlugar />
                        <CardImovel bairro="Bairro Czerniewicz" cidade="Jaraguá do Sul"
                              valor="r$999.00" infoParcela="/mês" quantQuartos={1} quantSala={1} quantBanheiros={2} informationStatus="Lançamento"
                              category="compra"/>
                  </div>
                  <Footer width={25} height={25} color="" />
            </>
      );

}