import "./DynamicDropDown.css";
import {useState} from "react";


export default function DynamicDropDown(props) {

    const [selectedItem, setSelectedItem] = useState("")
    const objOptions = props.options;
    const valueDropDown = props.optionsValue;
    const keyDropDown = (props.optionsKey ? props.optionsKey : props.optionsValue);

    function handleSelected(e) {
        console.log("Component selected: ", e.target.value);
        const newVal = e.target.value
        setSelectedItem(newVal);
        props.childToParent(newVal)
    }
    return (

        <div className="dynamic-drop-down">
            <label htmlFor={props.id}>{props.labelTxt}</label>
            <select
            id={props.id}
            name={props.name}
            onChange={e => handleSelected(e)}
            value={selectedItem}>

                <option disabled={true} value="">{props.placeholder}</option>
                {objOptions.map((options) => <option key={options[keyDropDown]} value={options[valueDropDown]}>{options[valueDropDown]}</option>)}

                {/*T.Z.T. UITBREIDEN met mogelijkheid om aparte labels mee tegeven; ander key-value paar uit bronobject*/}

            </select>
        </div>
    )
}

