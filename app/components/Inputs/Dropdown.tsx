
import './css/style.css';

//the parameters represent the content and the string that will be passed to the api
export default function Dropdown(props: {options :[string, string][]}){
    return(
            <select className="dropDown">
                <option className="optionDropDown" value="" disabled selected>Selecione Algo</option>

                {props.options.map(option =>
                    <option className="optionDropDown" value = {option[0].toUpperCase()} key={option[1].toUpperCase()}>{option[1].toUpperCase()}</option> 
                )}
            </select>
    );
    
}