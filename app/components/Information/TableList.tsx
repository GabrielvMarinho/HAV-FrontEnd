import './css/style.css';
import SelectBox from '../Inputs/SelectBox';

export default function TableList(props: {size :string, titles :string[], data :any[]}){
    console.log("data", props.data);

    // {props.data.map( texts =>        
    //             {texts.map( text =>
    //                 console.log({text})
    //             )}
                
                
    // )}
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
                {props.data.map( texts =>
                    <>
                    
                        <div className='tableListLine'></div>

                        <tr className="tableRows">
                            <div className='marginSelectBox'><SelectBox dataType='data-select-box-table-list'/></div>
                            {texts.map( text =>
                                <td>{text}</td>
                            )}
                            
                            
                        </tr>
                    </>
                )}
            
            </tbody>
            
        </table>
        
    );
}