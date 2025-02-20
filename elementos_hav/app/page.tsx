import DocumentIcon from "./components/IconsTSX/DocumentIcon"
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import ArrowIcon from "./components/IconsTSX/ArrowIcon";
import InputText from "./components/InputText"
import ToggleButton from "./components/ToggleButton"
import SelectedStar from "./components/IconsTSX/SelectedStar"
import NotSelectedStar from "./components/IconsTSX/NotSelectedStar"
import StarFavorite from "./components/StarFavorite"
import Title from "./components/Title"
import TableList from "./components/TableList";
import NavBarAdm from "./components/NavBarAdm";

export default function Home() {
  return (
    <div>
      <SelectedStar width={54} height={54} color={"#001111"}/>
      <NotSelectedStar width={54} height={54} color={"#001111"}/>
      <DocumentIcon width={211} height={211} color={"#501010"}/>
      <Title size="small" tag="h1" text="titulo"/>
      <Title size="large" tag="h2" text="titulo"/>
      <Button size="small" text="adnasidunasd"/>
      <Button size="medium" text="acesse o chat"/>
      <Button size="large" text="acesse o chat"/>
      <TableList size="large" titles={["finalidade", "tipo imóvel",  "email", "proprietário", "id imóvel"]} 
      data={[["COMPRA", "APARTAMENTO", "asdaoid@gmail.com", "Bianca Isabela Vaz", "391471"], 
      ["COMPRA ", "APARTAMENTO", "efvvv@gmail.com", "Bianca Isabela Vaz", "391471"]]}/>

      <StarFavorite width={211} height={211} color={"#501010"} selected={true}/>
      <Dropdown options={[['sssssss', "Mais Próximo"], ["bia", 'Preço Mais Alto']]}/>
      <InputText size="small" text="texto" placeholder="hint"/>
      <InputText size="medium" text="texto" placeholder="hint"/>
      <InputText size="large" text="texto" placeholder="hint"/>
      <InputText size="extraLarge" text="texto" placeholder="hint"/>
      <NavBarAdm/>
      <ArrowIcon width={111} height={111} color={"#501010"}/>

      </div>
      );

}

