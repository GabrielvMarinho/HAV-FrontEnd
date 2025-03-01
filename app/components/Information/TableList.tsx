import './css/style.css';
import SelectBox from '../Inputs/SelectBox';

export default function TableList(props: {size :string, titles :string[], data :any[]}){

    
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
                {props.data && props.data.map( obj =>
                    <>
                    
                        <div className='tableListLine'></div>

                        <tr className="tableRows">
                            <div className='marginSelectBox'><SelectBox dataType='data-select-box-table-list'/></div>
                            {Object.values(obj).map( (value, index) =>
                                <td>{value}</td>
                            )}
                            
                        </tr>
                    </>
                )}
            
            </tbody>
            
        </table>
        
    );
}