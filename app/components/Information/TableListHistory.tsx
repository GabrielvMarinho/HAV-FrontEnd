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

export default function TableListHistorySchedule(props: {
  for: string;
  id: string;
  titles: string[];
  page: string;
  data :string,
  status :string,

}) {
  const [customerHistory, setCustomerHistory] = useState<{}[]>([]);
  const [realtorDetails, setRealtorDetails] = useState(false);
  const [realtorHistory, setRealtorHistory] = useState<{}[]>([]);
  const [customerDetails, setCustomerDetails] = useState<{}[]>([]);

  const [totalPage, setTotalPage] = useState(0); 



  const findCustomer = async () => {
    try {
      const { schedules, totalPages } = await FindHistoryByCustomerId(
        props.id,
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


  useEffect(() => {
    if (props.for === "customer") {
      findCustomer();
    } else if (props.for === "realtor") {
    }
  }, [props.for, props.id, props.data, props.page, props.status]); 

  
  const renderTable = (history) => (
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
          <tr className="tableRows" key={index}>
            <td>{obj?.day} - {obj?.start_hour}</td>
            <td onClick={()=>{setRealtorDetails(true)}}>{obj?.realtorName}</td>
            <td><CategoryCardImovel text={obj?.purpose} /></td>
            <td><CategoryCardImovel text={obj?.propertyType} /></td>
            <td><StatusScheduling text={obj?.status}/></td>            
            
          </tr>
          </>
          
        ))}
      </tbody>
    </table>
    
    </>
  );
  
  return (
    <>
      {customerHistory.length > 0 ? (
        <div>
          {renderTable(customerHistory)}
          <PageManager totalPages={totalPage} />
        </div>
      ) : realtorHistory.length > 0 ? (
        <div>
          {renderTable(realtorHistory)}
          <PageManager totalPages={totalPage} />
        </div>
      ) : (
        <div>Nenhum histórico encontrado.</div>
      )}
    </>
  );
}
