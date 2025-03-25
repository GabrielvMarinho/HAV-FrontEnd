"use client"
import { useState } from "react";
import ArrowIcon from "../IconsTSX/ArrowIcon";
import "../../variables.css"
import { UseFormRegister } from "react-hook-form";

type Option = {
  id: string;
  name: string;
};

export default function MultiSelectDropdown(props :{text :string, register?: UseFormRegister<T>, selectedItems: any[], handleSelect :(id: string, name: string) => void, options :Option[], size :string}){

  const [isOpen, setIsOpen] = useState(false);
  
  
  // Função para alternar o dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  console.log(JSON.stringify(props.selectedItems))
  return (
    <div className="inputContainer">
      <input name = {"additionals"} {...(props.register ? props.register("additionals") : {})} value={JSON.stringify(props.selectedItems)}/>
      <label className="label">{props.text}</label>

      <div className={"customMultiselect"}>


        <div className={"selectedItems"} onClick={toggleDropdown}>
          <div style={{display: "flex", height:"fit-content", width: "128px", justifyContent: "space-between"}}>
            <span className="spanMultiSelect">
              {props.selectedItems.length > 0 ?  'Selecionados' : 'Selecione Algo'}
            </span>
            <span className={"arrow"}>{isOpen ? <div style={{width: "fit-content", height: "17px"}}className="rotateIcon"><ArrowIcon width={17} height={17} color="var(--text-light-red)" /></div> 
            : <div style={{width: "fit-content", height: "17px"}}><ArrowIcon width={17} height={17} color="var(--text-light-red)" /></div>
            }</span>
          </div>

        </div>

        {isOpen && (
          <div className={"dropdownOptions"}>
            {props.options.flat().map((option) => (
              <label key={option?.id} className={"optionLabelMultiSelect"}>
                <input
                  type="checkbox"
                  value={option?.id}
                  checked={props.selectedItems.includes(option?.id)}
                  onChange={() => props.handleSelect(option?.id, option?.name)}
                />
                {option?.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
      );
};

