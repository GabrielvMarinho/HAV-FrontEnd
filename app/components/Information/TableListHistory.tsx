"use client";
import ActionButton from "../Inputs/ActionButton";
import "./css/style.css";
import { useState, useEffect } from "react";

import PageManager from "../Inputs/PageManager";
import FindHistoryByCustomerId from "@/app/apiCalls/Schedules/FindHistoryByCustomerId";

export default function TableListHistorySchedule(props: {
  for: string;
  id: string;
  titles: string[];
}) {
  const [customerHistory, setCustomerHistory] = useState<{}[]>([]);
  const [realtorDetails, setRealtorDetails] = useState(false);
  const [realtorHistory, setRealtorHistory] = useState<{}[]>([]);
  const [totalPage, setTotalPage] = useState(0); 

  const findCustomer = async () => {
    try {
      const { schedules, totalPages } = await FindHistoryByCustomerId(
        props.id,
        totalPage
      );

      if (schedules && schedules.length > 0) {
        setCustomerHistory(schedules);
        setTotalPage(totalPages);
      }
    } catch (error) {
      console.error("Erro ao buscar histórico", error);
    }
  };


  useEffect(() => {
    if (props.for === "customer") {
      findCustomer();
    } else if (props.for === "realtor") {
    }
  }, [props.for, props.id]); 


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
          <tr className="tableRows" key={index}>
            <td>{obj?.day} - {obj?.start_hour}</td>
            
            <td onClick={()=>{setRealtorDetails(true)}}>{obj?.realtorName}</td>
            <td>{obj?.purpose}</td>
            <td>{obj?.propertyType}</td>
            <td>{obj?.status}</td>
          </tr>
          
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
