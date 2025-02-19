
import DocumentIcon from "./IconsTSX/DocumentIcon"
import Button from "./Button";
import Dropdown from "./Dropdown";
import ArrowIcon from "./IconsTSX/ArrowIcon";
import InputText from "./InputText"
import ToggleButton from "./ToggleButton"
import SelectedStar from "./IconsTSX/SelectedStar"
import NotSelectedStar from "./IconsTSX/NotSelectedStar"
import StarFavorite from "./StarFavorite"
import Title from "./Title"

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
      <StarFavorite width={211} height={211} color={"#501010"} selected={true}/>
      <Dropdown options={[['sssssss', "Mais Próximo"], ["bia", 'Preço Mais Alto']]}/>
      <InputText size="small" text="texto" placeholder="hint"/>
      <InputText size="medium" text="texto" placeholder="hint"/>
      <InputText size="large" text="texto" placeholder="hint"/>
      <InputText size="extraLarge" text="texto" placeholder="hint"/>

      <ArrowIcon width={111} height={111} color={"#501010"}/>

      </div>
      );

}

