"use client"
import ActionButton from '../Inputs/ActionButton';
import './css/style.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import MoreSignal from '../IconsTSX/MoreSignal';
import Trashcan from '../IconsTSX/Trashcan';
import Pencil from '../IconsTSX/Pencil';
import Graphic from '../IconsTSX/Graphic';
import Folder from '../IconsTSX/Folder';
import Modal from '../Modal/Modal';


export default function TableList(props: {context :string; size :string, titles :string[], data :any[]}){

    props.data.map((obj, index) =>{
        console.log(Object.values(obj)[0])
        console.log()
    
    }
    )
    

    //ACTION BUTTON RELATED
    const router = useRouter();

    //EDIT RELATED
    const editFunction = function(){
        router.push(`${window.location.pathname}/edit`);
    }

    //ADD RELATED
    const addFunction = function(){
        router.push(`${window.location.pathname}/add`);
    }

    //DELETE RELATED
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const openDeleteModal = function(){
        setIsDeleteModalOpen(true)
    }
    const deleteEntitiesFunction = function(){
        console.log("deletaar", localStorage.getItem("selectedManage"))
    }

    //ARCHIVES RELATED
    const archiveFunction = function(){
        router.push(`${window.location.pathname}/archive`);
    }

    //GRAPHS RELATED
    const graphFunction = function(){
        router.push(`${window.location.pathname}/graphs`);
    }

    //RESETING THE LOCAL STORAGE
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

                        <tr className={selected.includes(Object.values(obj)[0])?"selectedRow tableRows":"tableRows"}>
                            <div className='marginSelectBox'>

                            <input
                            className='checkbox'
                                type="checkbox"
                                checked={selected.includes(Object.values(obj)[0])}
                                onChange={() => handleSelect(Object.values(obj)[0])}
                            />

                            </div>
                            {Object.values(obj).map((value) => (
                                    <td>
                                        {typeof value === 'number' ? `R$${value.toLocaleString('en-US').replace(/,/g, '.')}` : value}
                                    </td>

                                ))}
                        </tr>
                    </>
                )}
            
            </tbody>
            
        </table>

        <div className="actionButtons">
            {props.context === 'admin' && (
                <ActionButton onClick={graphFunction} className="graphicButton darkHover" Icon={Graphic}  />
            )}
            {/* Botões para Editor e Admin */}
            <ActionButton onClick={addFunction} className="addButton darkHover" Icon={MoreSignal} />
            <ActionButton onClick={selected.length==1?editFunction:""} className={`${selected.length==1?"darkHover":"nonClickableButton"} editButton `} Icon={Pencil}  />
            <ActionButton onClick={selected.length>0?openDeleteModal:""} className={`${selected.length>0?"darkHover":"nonClickableButton"} deleteButton `} Icon={Trashcan} />
            <ActionButton onClick={selected.length>0?archiveFunction:""} className={`${selected.length>0?"darkHover":"nonClickableButton"} archiveButton `} Icon={Folder}  />
            
            <Modal content={<div>delete modal</div>} id = "deleteModal" isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={deleteEntitiesFunction}></Modal>

        </div>
        </>

        
    );
}