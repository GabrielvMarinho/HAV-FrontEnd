export default function TableList(props: {size :string, titles :string[], data :string[][]}){
    return (
        <table className="tableListData">
            <tr>
                {props.titles.map( text => 
                    <th>{text}</th>
                    )}
            </tr>
            {props.data.map( texts =>
                <tr>
                    {texts.map( text =>
                        <td>{text}</td>
                    )}
                    
                </tr>
            )}
            
            
        </table>
    );
}