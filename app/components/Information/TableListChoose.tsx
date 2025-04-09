"use client"
import ActionButton from '../Inputs/ActionButton';
import './css/style.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import MoreSignal from '../IconsTSX/MoreSignal';
import Trashcan from '../IconsTSX/Trashcan';
import Pencil from '../IconsTSX/Pencil';
import Graphic from '../IconsTSX/Graphic';
import Modal from '../Modal/Modal';
import ArchiveIn from '../IconsTSX/archiveIn';
import Folder from '../IconsTSX/Folder';
import ArchiveOut from '../IconsTSX/archiveOut';
import ArrowBack from '../IconsTSX/ArrowBack';
import PageManager from '../Inputs/PageManager';
import Verificar from '../IconsTSX/Verificar';
import { useRouter } from 'next/router';


export default function TableListChoose(props: {id? :any; action :string; type :string; totalPages :number; archived :boolean; size :string, titles :string[], data :any[]}){

    
    
    
    const pathname = usePathname();
    //tem que chamar antes para ele não salvar acidentalmente no state antes de 
    //deletar pois o useefect carrega dps do usestate
    const previousPathname = localStorage.getItem('previousPathname');

    if (previousPathname && previousPathname !== pathname) {
        localStorage.removeItem('selectedManage');
    }

    localStorage.setItem('previousPathname', pathname);

    useEffect(() =>{
        localStorage.removeItem('selectedManage')
    }, [pathname])

    const [selected, setSelected] = useState<string[]>(() => {
        const saved = localStorage.getItem('selectedManage');

        return saved ? JSON.parse(saved) : [];
    });

    const [selectedExtra, setSelectedExtra] = useState<[string, string][]>(() => {
        const saved = localStorage.getItem('selectedManageExtra');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        console.log("usereefct1")
        console.log(JSON.stringify(selected))
        localStorage.setItem('selectedManage', JSON.stringify(selected));
        
        console.log("usereefct")
        console.log(JSON.stringify(selectedExtra))
        localStorage.setItem('selectedManageExtra', JSON.stringify(selectedExtra));

    }, [selected]);
    
   


    const handleSelect = (option: string, firstData :string, secondData :string) => {
        const newItem: [string, string] = [firstData, secondData];

        setSelectedExtra((prev: [string, string][]) =>
            prev.some(([f, s]) => f === firstData && s === secondData)
                ? prev.filter(([f, s]) => !(f === firstData && s === secondData))
                : [...prev, newItem]
        );
        setSelected((prev: string[]) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    }

    const searchParams = useSearchParams();
  
    const params = Object.fromEntries(searchParams.entries());

    const returnToPropertyOne = function() {
        

        const parsedData = JSON.parse(localStorage.getItem("selectedManage") || "");  
        const parsedDataExtra = JSON.parse(localStorage.getItem("selectedManageExtra") || "[]");  


        params["proprietor"] = parsedData[0]
        params["proprietorsData"]=encodeURIComponent(parsedDataExtra[0])
        const queryString = new URLSearchParams(params);
        const id = queryString.get("id"); // "123"
        queryString.delete("id");

        const finalQuery = queryString.toString()
        localStorage.removeItem("selectedManage")
        localStorage.removeItem("selectedManageExtra")
        if(props.action==="add"){
            window.location.href = `/manage/properties/add?${finalQuery}`
        }
        else{
            window.location.href = `/manage/properties/edit/${id}?${finalQuery}`
        }



    }

    const returnToPropertyMany = function() {
        

        const parsedData = JSON.parse(localStorage.getItem("selectedManage") || "[]");  
        const parsedDataExtra = JSON.parse(localStorage.getItem("selectedManageExtra") || "[]");  

        params["realtors"] = parsedData

        params["realtorsData"] = encodeURIComponent(parsedDataExtra)

        const queryString = new URLSearchParams(params);
        const id = queryString.get("id"); // "123"
        queryString.delete("id");
        
        const finalQuery = queryString.toString()

        localStorage.removeItem("selectedManage")
        localStorage.removeItem("selectedManageExtra")

        if(props.action==="add"){

            window.location.href = `/manage/properties/add?${finalQuery}`
        }
        else{
            window.location.href = `/manage/properties/edit/${id}?${finalQuery}`

        }

    }


    return (
        <>
        <div>
        <table className="tableListData">
            <thead>
                    <tr>
                    <div className='tableListLineHide marginSelectBox'></div>

                        {props.titles.map( text => 
                                <th>{text.toLocaleUpperCase()}</th>
                            )}

                    </tr>
            </thead>
            
            <tbody>
                {props.data && props.data.map((obj, index) =>
                    <>
                    
                        <div className='tableListLine'></div>

                        <tr className={selected.includes(Object.values(obj)[0])?"selectedRow tableRows":"tableRows"}>
                            <div className='marginSelectBox'>
                            

                            <input
                            className='checkbox'
                                type="checkbox"
                                checked={selected.includes(Object.values(obj)[0])}
                                onChange={() => handleSelect(Object.values(obj)[0], Object.values(obj)[1], Object.values(obj)[2])}
                            />


                            </div>
                            {Object.values(obj).slice(1).map((value) => (
                                    <td>
                                        <div>
                                            {typeof value === 'number' && value > 10000? `R$${value.toLocaleString('en-US').replace(/,/g, '.')}` : value}
                                        </div>
                                    </td>

                                ))}
                        </tr>
                    </>
                )}
            
            </tbody>
            
        </table>
        <PageManager totalPages={props.totalPages}></PageManager>
        </div>
        <div className="actionButtons"> 
            {props.type=="one"?<ActionButton onClick={returnToPropertyOne} className={`${selected.length==1?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={Verificar}></ActionButton>
            :    <ActionButton onClick={returnToPropertyMany} className={`${selected.length>0?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={Verificar}></ActionButton>
        }
        </div>
        </>

        
    );
}