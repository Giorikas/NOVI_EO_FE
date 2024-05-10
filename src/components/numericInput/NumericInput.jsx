import './NumericInput.css';
import {useState} from 'react';

export default function NumericInput ({id, step, startValue, childToParent, labelTxt, suffix}){
    const [value, setValue] = useState(0.0);

    const handleChange = event => {
        const newVal = event.target.value;
        const chkFloat = parseFloat(newVal)
        if (chkFloat) {
            childToParent(chkFloat)
        } else {
            setValue(0.0);
        }
    }
    // console.log(value);
    // console.log(typeof value);
    // console.log(Number(value));
    return (
        <div className="numeric-input">
            <label htmlFor={id}>{labelTxt}</label>
            <input
                type="number"
                id={id}
                defaultValue={startValue}
                step={step}
                onChange={handleChange}
            />
            {suffix}
        </div>
    );
}




