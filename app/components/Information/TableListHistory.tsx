"use client";
import ActionButton from "../Inputs/ActionButton";
import "./css/style.css";
import { useState, useEffect } from "react";

import PageManager from "../Inputs/PageManager";
import FindHistoryByCustomerId from "@/app/apiCalls/Schedules/FindHistoryByCustomerId";
import TapeCardImovel from "./TapeCardImovel";
import TapeRetangleCardImovel from "../IconsTSX/TapeRetangleCardImovel";
import TapeTopCardImovel from "../IconsTSX/TapeTopCardImovel";
import CategoryCardImovel from "./CategoryCardImovel";
import RetangleStatusImovel from "./RetangleStatusImovel";
import StatusScheduling from "./StatusScheduling";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ModalScheduling from "../Modal/ModalScheduling";
import FindHistoryByRealtorId from "@/app/apiCalls/Schedules/FindHistoryByRealtorId";

export default function TableListHistorySchedule(props: {
  for: string;
  titles: string[];
  page: string;
  data :string,
  status :string,

}) {
   const [customerHistory, setCustomerHistory] = useState<schedulesHistoryCustomerDTO[]>([]);
  const [realtorDetails, setRealtorDetails] = useState(false);
  const [realtorHistory, setRealtorHistory] = useState<schedulesHistoryCustomerDTO[]>([]);
  const [customerDetails, setCustomerDetails] = useState<{}[]>([]);

  const [totalPage, setTotalPage] = useState(0); 

  const [modalId, changeModalId] = useState<string | null>(null)

  const findCustomer = async () => {
    try {
      const { schedules, totalPages } = await FindHistoryByCustomerId(
        props.page,
        props.data,
        props.status
      );

      setCustomerHistory(schedules);
      setTotalPage(totalPages);
      
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };
  const findRealtor = async () => {
    try {
      const { schedules, totalPages } = await FindHistoryByRealtorId(
        props.page,
        props.data,
        props.status
      );

      setRealtorHistory(schedules);
      setTotalPage(totalPages);
      
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };
  
  console.log(customerHistory)
  const setChangeModalId = function (id :string){

    changeModalId(id)
  }
 
  useEffect(() => {
    if (props.for === "user") {
      findCustomer();
    } else if (props.for === "realtor") {
      findRealtor();
    }
  }, [props.for, props.data, props.page, props.status]); 

  
  const renderTable = (history: schedulesHistoryCustomerDTO[]) => (
    <>
    <table className="tableListData">
      <thead>
        <tr>
          {props.titles.map((text, index) => (
            <th key={index}>{text.toLocaleUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {history.map((obj: any, index) => (
          <>
          <div className='tableListLine'></div>
          <tr className="tableRows pointer" onClick ={() =>{setChangeModalId(obj.id)}} key={index}>
            <td>{obj?.day} - {obj?.start_hour}</td>
            <td >{obj?.realtorName}</td>
            <td><CategoryCardImovel text={obj?.purpose} /></td>
            <td><CategoryCardImovel text={obj?.propertyType} /></td>
            <td><StatusScheduling text={obj?.status}/></td>            
            
          </tr>
          {modalId && modalId==obj?.id?
            <div className="overlay">
            <ModalScheduling onClose={() =>{setChangeModalId("-1")}} obj={obj}/>
            </div>
            :""
          }  
          </>
          
        ))}

      </tbody>
    </table>
    
    </>
  );
  
  return (
    <>
    {props.for == "user" ?
      <div>
        {customerHistory.length > 0 ?
          renderTable(customerHistory)
        : <div>Nenhum histórico encontrado.</div>}
        <PageManager totalPages={totalPage} />
      </div>
      :
      <div>
        {realtorHistory.length > 0 ?
          renderTable(realtorHistory)
        : <div>Nenhum histórico encontrado.</div>}

          <PageManager totalPages={totalPage} />
        </div>
        
        
      }
      
    </>
  );
}
