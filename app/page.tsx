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
import InputDropdown from "./components/Inputs/InputDrodown";
import NavBarAdm from "./components/Header/NavBarAdm"
import SlideRange from "./components/Filters/SlideRange"
import SearchBarDesktop from "./components/Filters/SearchBarDesktop";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>

      <SelectedStar width={54} height={54} color={"#001111"}/>
      <NotSelectedStar width={54} height={54} color={"#001111"}/>
      <DocumentIcon width={211} height={211} color={"#501010"}/>
      <Title size="small" tag="h1" text="titulo"/>
      <Title size="large" tag="h2" text="titulo"/>
      <Button size="small" text="adnasidunasd"/>
      <Button size="medium" text="acesse o chat"/>
      <Button size="large" text="acesse o chat"/>
      <TableList size="large" titles={["finalidade", "tipo imóvel",  "email", "proprietário"]} 
      data={[["COMPRA", "APARTAMENTO", "asdaoid@gmail.com", "Bianca Isabela Vaz"], 
      ["COMPRA ", "APARTAMENTO", "efvvv@gmail.com", "Bianca Isabela Vaz"]]}/>
      <Filter size="medium" 
      inputs={[<InputText size="medium" text="Nome" placeholder="ex: Bianca" id="nome"/>,
      <InputText size="medium" text="Email" placeholder="joao@gmail.com" id="email"/>,
      <InputText size="medium" text="Telefone" placeholder="ex: 672983579" id="telefone"/>,
      <InputText size="medium" text="CPF" placeholder="ex: 67298357955" id="cpf"/>,
      <InputDropdown size="medium" text="Status" id="status" 
      options={[['sssssss', "Indisponível"], ["bia", 'Disponível'], ["bia", 'Alugado'], ["bia", 'Vendido']]}/>,
      <SlideRange min={50000} max={2000000} step={10000}/>]}/>
      <SearchBarDesktop placeholder="Busca:"/>   
      <StarFavorite width={211} height={211} color={"#501010"} selected={true}/>
      <Dropdown options={[['sssssss', "Mais Próximo"], ["bia", 'Preço Mais Alto']]}/>
      <InputText id="email" size="small" text="texto" placeholder="hint"/>
      <InputText id="email" size="medium" text="texto" placeholder="hint"/>
      <InputText id="email" size="large" text="texto" placeholder="hint"/>
      <InputText id="email" size="extraLarge" text="texto" placeholder="hint"/>
      <NavBarAdm/>
      <InputText size="small" text="CPF" placeholder="hint" id="email"/>
      <ArrowIcon width={111} height={111} color={"#501010"}/>
      <Footer/>
      
      </>
      );

}

