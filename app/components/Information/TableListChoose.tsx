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

    console.log("action")
    console.log(props.action)
    
    
    
    const pathname = usePathname();
    //tem que chamar antes para ele não salvar acidentalmente no state antes de 
    //deletar pois o useefect carrega dps do usestate
    const previousPathname = localStorage.getItem('previousPathname');
    if (previousPathname && previousPathname !== pathname) {
        localStorage.removeItem('selectedManage');
    }

    
    localStorage.setItem('previousPathname', pathname);
        useEffect(() =>{
            console.log("lets go")
            localStorage.removeItem('selectedManage')
        }, [pathname])

    const [selected, setSelected] = useState<string[]>(() => {
        const saved = localStorage.getItem('selectedManage');
        console.log("copiando os dados para o state")

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('selectedManage', JSON.stringify(selected));
    }, [selected]);



    const handleSelect = (option: string) => {
        console.log(option);
        setSelected((prev: string[]) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    }

    const searchParams = useSearchParams();
  
    const params = Object.fromEntries(searchParams.entries());
    console.log(params)
    const returnToPropertyOne = function() {
        
        console.log(":::::::::::::::::")

        const parsedData = JSON.parse(localStorage.getItem("selectedManage") || "");  


        params["proprietor"] = parsedData[0]

        const queryString = new URLSearchParams(params);
        const id = queryString.get("id"); // "123"
        queryString.delete("id");

        const finalQuery = queryString.toString()
        localStorage.removeItem("selectedManage")
        console.log("asdasd")
        if(props.action==="add"){
            window.location.href = `/manage/properties/add?${finalQuery}`
        }
        else{
            window.location.href = `/manage/properties/edit/${id}?${finalQuery}`

        }



    }

    const returnToPropertyMany = function() {
        
        console.log(":::::::::::::::::")

        const parsedData = JSON.parse(localStorage.getItem("selectedManage") || "[]");  
        

        params["realtors"] = parsedData

        const queryString = new URLSearchParams(params);
        const id = queryString.get("id"); // "123"
        queryString.delete("id");
        
        const finalQuery = queryString.toString()

        localStorage.removeItem("selectedManage")
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
                                onChange={() => handleSelect(Object.values(obj)[0])}
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