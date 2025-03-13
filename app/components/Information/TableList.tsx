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
import Modal from '../Modal/Modal';
import ArchiveIn from '../IconsTSX/archiveIn';
import Folder from '../IconsTSX/Folder';
import ArchiveOut from '../IconsTSX/archiveOut';
import ArrowBack from '../IconsTSX/ArrowBack';
import PageManager from '../Inputs/PageManager';


export default function TableList(props: {totalPages :number; changeArchivedStatus :(ids: string[]) => Promise<void>; deleteFunction: (ids: string[]) => Promise<void>; archived :boolean; context :string; size :string, titles :string[], data :any[]}){

    

    
    const confirmDelete = async () => {
        const selectedIds = JSON.parse(localStorage.getItem('selectedManage') || "[]");
        console.log("-------------")
        console.log(props.deleteFunction)

        console.log("chamado ", selectedIds)
        if (selectedIds.length > 0) {
            await props.deleteFunction(selectedIds); 
            localStorage.removeItem("selectedManage")
            setIsDeleteModalOpen(false);
        }
    };



    //ACTION BUTTON RELATED
    const router = useRouter();


    const archiveRoute = function (){
        router.push(`${window.location.pathname}/archived`);
    }
    const notArchiveRoute = function(){
        router.push(window.location.pathname.replace(/\/archived$/, ""));

    }
    //EDIT RELATED
    const editFunction = function(){
        const selectedId = JSON.parse(localStorage.getItem('selectedManage') || "[]");
        localStorage.removeItem("selectedManage")
        router.push(`${window.location.pathname}/edit/${selectedId[0]}`);
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
    
    //ARCHIVE RELATED
    const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false)


    const openArchiveModal = function(){
        setIsArchiveModalOpen(true)
    }

    const changeArchivedStatus = async function (){

        const selectedIds = JSON.parse(localStorage.getItem('selectedManage') || "[]");
        console.log(selectedIds)
        console.log("-----------------")
        
        if (selectedIds.length > 0) {
            await props.changeArchivedStatus(selectedIds); 
            localStorage.removeItem("selectedManage")
            setIsDeleteModalOpen(false);


        }
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

    //PAGEABLE RELATED


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
            {props.archived===false? (
                <>
                {props.context === 'admin'?(
                <ActionButton onClick={graphFunction} className={`${selected.length==0?"darkHover actionButtonHover":"nonClickableButton"} changeRouteButton `} Icon={Graphic}  />

                ):("")}
                <ActionButton onClick={archiveRoute}  className={`${selected.length==0?"darkHover actionButtonHover":"nonClickableButton"} changeRouteButton `} Icon={Folder}  />
                <ActionButton onClick={addFunction} className={`${selected.length==0?"darkHover actionButtonHover":"nonClickableButton"} changeRouteButton `} Icon={MoreSignal} />
                <ActionButton onClick={selected.length==1?editFunction:""} className={`${selected.length==1?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={Pencil}  />
                <ActionButton onClick={selected.length>0?openDeleteModal:""} className={`${selected.length>0?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={Trashcan} />
                <ActionButton onClick={selected.length>0?openArchiveModal:""} className={`${selected.length>0?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={ArchiveIn}  />
                <Modal content={<div>delete modal</div>} id="deleteModal" isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={confirmDelete} />
                <Modal content={<div>arquivar modal</div>} id="archiveModal" isOpen={isArchiveModalOpen} onClose={() => setIsArchiveModalOpen(false)} onConfirm={changeArchivedStatus} />

                </>
            ) : (
            <>
                <ActionButton onClick={notArchiveRoute}  className={`${selected.length==0?"darkHover actionButtonHover":"nonClickableButton"} changeRouteButton `} Icon={ArrowBack}  />
                <ActionButton onClick={selected.length==1?editFunction:""} className={`${selected.length==1?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={Pencil}  />
                <ActionButton onClick={selected.length>0?openDeleteModal:""} className={`${selected.length>0?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={Trashcan} />
                <ActionButton onClick={selected.length>0?openArchiveModal:""} className={`${selected.length>0?"darkHover actionButtonHover":"nonClickableButton"} actionSelectedButton `} Icon={ArchiveOut}  />
                
                <Modal content={<div>desarquivar modal</div>} id="archiveModal" isOpen={isArchiveModalOpen} onClose={() => setIsArchiveModalOpen(false)} onConfirm={changeArchivedStatus} />
                <Modal content={<div>delete modal</div>} id="deleteModal" isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={confirmDelete} />
                </>
                )}
            
        </div>
        </>

        
    );
}