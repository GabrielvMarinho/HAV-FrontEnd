"use client"
import ActionButtons from '../Inputs/ActionButton';
import './css/style.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function TableList(props: {size :string, titles :string[], data :any[]}){


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

    console.log("LocalStorage SelectedManage:", localStorage.getItem('selectedManage'));

    return (
        <>
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

                        <tr className={selected.includes(obj.id)?"selectedRow tableRows":"tableRows"}>
                            <div className='marginSelectBox'>

                            <input
                            className='checkbox'
                                type="checkbox"
                                checked={selected.includes(obj.id)}
                                onChange={() => handleSelect(obj.id)}
                            />

                            </div>
                            {props.titles.map( name => 
                                <td >{obj[name]}</td>
                            )}
                            
                        </tr>
                    </>
                )}
            
            </tbody>
            
        </table>

        <ActionButtons selected={selected.length} context='admin'></ActionButtons>
        </>

        
    );
}