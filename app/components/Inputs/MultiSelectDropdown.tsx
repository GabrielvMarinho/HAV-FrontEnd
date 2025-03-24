"use client"
import { useState } from "react";
import ArrowIcon from "../IconsTSX/ArrowIcon";
import "../../variables.css"

type Option = {
  id: string;
  name: string;
};

export default function MultiSelectDropdown(props :{text :string, options :Option[], size :string}){

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); 

  props.options.map((option) => (
      console.log(option) 
  ))

  // Função para alternar o dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id: string, name: string) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  return (
    <div className="inputContainer">
      <label className="label">{props.text}</label>

      <div className={"customMultiselect"}>


        <div className={"selectedItems"} onClick={toggleDropdown}>
          <div style={{display: "flex", height:"fit-content", width: "128px", justifyContent: "space-between"}}>
            <span className="spanMultiSelect">
              {selectedItems.length > 0 ?  'Selecionados' : 'Selecione Algo'}
            </span>
            <span className={"arrow"}>{isOpen ? <div style={{width: "fit-content", height: "17px"}}className="rotateIcon"><ArrowIcon width={17} height={17} color="var(--text-light-red)" /></div> 
            : <div style={{width: "fit-content", height: "17px"}}><ArrowIcon width={17} height={17} color="var(--text-light-red)" /></div>
            }</span>
          </div>

        </div>

        {isOpen && (
          <div className={"dropdownOptions"}>
            {props.options.map((option) => (
              <label key={option.id} className={"optionLabelMultiSelect"}>
                <input
                  type="checkbox"
                  value={option.id}
                  checked={selectedItems.includes(option.name)}
                  onChange={() => handleSelect(option.id, option.name)}
                />
                {option.id}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
      );
};

