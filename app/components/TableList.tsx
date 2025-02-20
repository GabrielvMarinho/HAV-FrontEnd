export default function TableList(props: {size :string, titles :string[], data :string[][]}){
    return (
        <table className="tableListData">
            <thead>
                    <tr>
                        {props.titles.map( text => 
                                <th>{text.toLocaleUpperCase()}</th>
                            )}

                    </tr>
            </thead>
            
            <tbody>
                {props.data.map( texts =>
                    <tr>
                        {texts.map( text =>
                            <td>{text}</td>
                        )}
                        
                    </tr>
                )}
            
            </tbody>
            
        </table>
        
    );
}