"use client"
import { useEffect, useState } from "react";
import ArrowBack from "../IconsTSX/ArrowBack";
import './css/style.css';

export default function PageManager(props: {totalPages :number}){

    

    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const url = new URL(window.location.href);
        const currentPage = url.searchParams.get('page');
        if (currentPage !== null) {
            setPage(parseInt(currentPage));
        }
    }, []);

    const addOneToPageQuery = function() {
        
        const newPage = page + 1; // Incrementa a página atual
        const url = new URL(window.location.href);
        url.searchParams.set('page', newPage.toString());
        
        setPage(newPage);
        
        window.location.href = url.toString();
    };
    
    const takeOneFromPageQuery = function() {
        
        const newPage = page -1; // Incrementa a página atual
        const url = new URL(window.location.href);
        url.searchParams.set('page', newPage.toString());
        
        setPage(newPage);
        
        window.location.href = url.toString();
    };
    
    
    
    return (
        <>
        {props.totalPages==0?"":
        <>
        <div className="arrowBackContainer">
            <button className={"arrowBack"} disabled={page==0?true:false} onClick={takeOneFromPageQuery}><ArrowBack width={20} height={20} color="var(--arrow-page-manager)"/></button>
            <p>{page+1}</p>
            <button className={"mirrored arrowBack"} disabled={page+1==props.totalPages?true:false} onClick={addOneToPageQuery}><ArrowBack width={20} height={20} color="var(--arrow-page-manager)"/></button>
            <label>{props.totalPages}</label>
        </div>
        </>}
        
        </>
    )
}