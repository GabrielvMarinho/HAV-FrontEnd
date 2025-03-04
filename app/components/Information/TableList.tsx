"use client"
import './css/style.css';
import { useState } from 'react';

export default function TableList(props: {size :string, titles :string[], data :any[]}){
    const [selected, setSelected] = useState<string[]>([]);

    const handleSelect = (option: string) =>{
        console.log(option)
        setSelected((prev :string[]) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option])
    }
    return (
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

                        <tr className="tableRows">
                            <div className='marginSelectBox'>

                            <input
                                type="checkbox"
                                checked={selected.includes(obj.id)}
                                onChange={() => handleSelect(obj.id)}
                            />

                            </div>
                            {props.titles.map( name => 
                                <td>{obj[name]}</td>
                            )}
                            
                        </tr>
                    </>
                )}
            
            </tbody>
            
        </table>
        
    );
}