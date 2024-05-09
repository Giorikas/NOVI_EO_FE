import "./CrossSectionBorders.css";
import {useState} from "react";
import {crossSectionBorderTypes} from '../../helpers/crossSectionBorderTypes';

export default function CrossSectionBorders({leftBorder, rightBorder, csWidth}) {


    const [selectedBorderTypeLeft, setSelectedBorderTypeLeft] = useState("")
    const [selectedBorderTypeRight, setSelectedBorderTypeRight] = useState("")
    const borderTypes = crossSectionBorderTypes();

    async function handleBorderTypeSelectL(e) {
        console.log("Left Bordertype selected: ", e.target.value);
        const newVal = e.target.value
        setSelectedBorderTypeLeft(newVal);
        leftBorder(selectedBorderTypeLeft);}

    function handleBorderTypeSelectR(e) {
        console.log("Left Bordertype selected: ", e.target.value);
        const newVal = e.target.value
        setSelectedBorderTypeRight(newVal);
        rightBorder(selectedBorderTypeRight);
    }

    return (

        <div className="Container">

            <label htmlFor="leftBorderTypeSelector">Van: </label>
            <select
            id="leftBorderTypeSelector"
            name="Left Border"
            onChange={e => handleBorderTypeSelectL(e)}
            value={selectedBorderTypeLeft}>

                <option value="">linker grenstype</option>
                {borderTypes.map((borderTypesL) => <option value={borderTypesL.type}>{borderTypesL.type}</option>)}
            </select>

            <label htmlFor="rightBorderTypeSelector">Tot: </label>
            <select
                id="rightBorderTypeSelector"
                name="Right Border"
                onChange={e => handleBorderTypeSelectR(e)}
                value={selectedBorderTypeRight}>

                <option value="">rechter grenstype</option>
                {borderTypes.map((borderTypesR) => <option value={borderTypesR.type}>{borderTypesR.type}</option>)}
            </select>


        </div>
    )
}

