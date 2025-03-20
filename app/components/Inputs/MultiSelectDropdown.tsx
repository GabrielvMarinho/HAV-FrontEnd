"use client"
import { useState } from "react";
import ArrowIcon from "../IconsTSX/ArrowIcon";
import "../../variables.css"
const options: string[][] = [["Apple", "asdasd"], ["Banana", "Cherry"]];

export default function MultiSelectDropdown(props :{text :string, options :string[][], size :string}){

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); 

   const options = [
    { value: '1', label: 'asdascd' },
    { value: '2', label: 'Cherry' },
    { value: '3', label: 'Outro Item' },
  ];

  // Função para alternar o dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string, label: string) => {
    if (selectedItems.includes(label)) {
      setSelectedItems(selectedItems.filter((item) => item !== label));
    } else {
      setSelectedItems([...selectedItems, label]);
    }
  };

  return (
    <div className={"customMultiselect"}>
      <div className={"selectedItems"} onClick={toggleDropdown}>
        <div style={{display: "flex"}}>
          <span>
            {selectedItems.length > 0 ?  'Selecionados' : 'Selecione Algo'}
          </span>
          <span className={"arrow"}>{isOpen ? <div style={{width: "fit-content", height: "20px"}}className="rotateIcon"><ArrowIcon width={20} height={20} color="var(--text-light-red)" /></div> 
          : <div style={{width: "fit-content", height: "20px"}}><ArrowIcon width={20} height={20} color="var(--text-light-red)" /></div>
          }</span>
        </div>

      </div>

      {isOpen && (
        <div className={"dropdownOptions"}>
          {options.map((option) => (
            <label key={option.value} className={"option"}>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedItems.includes(option.label)}
                onChange={() => handleSelect(option.value, option.label)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

