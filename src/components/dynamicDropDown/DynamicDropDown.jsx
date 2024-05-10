import "./DynamicDropDown.css";
import {useState} from "react";


// export default function dynamicDropDown({leftBorder, rightBorder, csWidth}) {
export default function DynamicDropDown(props) {

    const [selectedItem, setSelectedItem] = useState("")
    const objOptions = props.options;

    function handleBorderTypeSelect(e) {
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
            onChange={e => handleBorderTypeSelect(e)}
            value={selectedItem}>

                <option disabled={true} value="">{props.placeholder}</option>
                {objOptions.map((options) => <option value={options.type}>{options.type}</option>)}
            </select>
        </div>
    )
}

