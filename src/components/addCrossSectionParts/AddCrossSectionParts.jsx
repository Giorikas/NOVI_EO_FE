import './AddCrossSectionParts.css'

import { useState } from "react";
import crossSectionPartPavementTypes from "../../helpers/crossSectionPartPavementTypes.json"
import crossSectionPartFunction from "../../helpers/crossSectionPartFunction.json"
import DynamicDropDown from "../dynamicDropDown/DynamicDropDown.jsx";


export default function AddCrossSectionParts(childToParent) {

    const functionTypes = crossSectionPartFunction; // Array of Objects of functionTypes with defaultValues.
    const pavementTypes = crossSectionPartPavementTypes; //Array of Objects of PavementTypes
    // console.log(functionTypes)
    // console.log(pavementTypes)

    const [inputs, setInputs] = useState([{ name: "", type: "", pavementWidth: "", typePavement: "", designVelocity: 30, intensities: 0}]);

    const handleAddInput = () => {
        setInputs([...inputs, { name:"", type: "", pavementWidth: "", typePavement: "", designVelocity: 30,
                intensities: 0}]);
    };

    const [selectedItem, setSelectedItem] = useState("");
    // console.log("F:   " + functionTypes)
    // console.log("P:   " + pavementTypes)

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
        inputToJson();
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
        inputToJson();
    };

    function handleSelect(event, index) {
        console.log("Component selected: ", event.target.value);
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setSelectedItem(value);
        setInputs(onChangeValue);
        inputToJson();
    }

    function inputToJson(){
        const  strJson = JSON.stringify(inputs);
        console.log("JSON string" + strJson);
    }

    return (
        <div className="csp-params-input-container">
            {inputs.map((csp, index) => (
                <div className="csp-params-inputs align-seven-vertical-elements" key={index}>
                    {/*<p>{csp.type}</p>*/}
                    <input
                        id="cspParamInputType"
                        name="type"
                        type="text"
                        value={csp.type}
                        onChange={(event) => handleChange(event, index)}
                    />
                    <input
                        id="cspParamInputPavementWidth"
                        name="pavementWidth"
                        type="number"
                        step="0.05"
                        value={csp.pavementWidth}
                        onChange={(event) => handleChange(event, index)}
                    />
                    {/*<input*/}
                    {/*    id="cspParamInputTypePavement"*/}
                    {/*    name="typePavement"*/}
                    {/*    type="text"*/}
                    {/*    value={csp.typePavement}*/}
                    {/*    onChange={(event) => handleChange(event, index)}*/}
                    {/*/>*/}

                    <DynamicDropDown
                        options = {functionTypes}
                        optionsValue =
                    />

                    <select
                        name = "typePavement"
                        id = "typePavement"
                        value={selectedItem}
                        onChange={(event) => handleSelect(event, index)}>
                        <option value="Elements">Elementen</option>
                        <option value="Asphalt">Asfalt</option>
                        <option value="Concrete">Beton</option>

                    </select>

                    <input
                        id="cspParamInputDesignVelocity"
                        name="designVelocity"
                        type="number"
                        step="10"
                        value={csp.designVelocity}
                        onChange={(event) => handleChange(event, index)}
                    />
                    <input
                        id="cspParamInputIntensities"
                        name="intensities"
                        type="number"
                        step="100"
                        value={csp.intensities}
                        onChange={(event) => handleChange(event, index)}
                    />



                    <section className="csp-params-input-btn">

                    {index === inputs.length - 1 && (
                        <p onClick={() => handleAddInput()}>
                            <span className="material-icons">add_road</span>
                        </p>
                    )}
                    {inputs.length > 1 && (
                        <p className="delete-button" onClick={() => handleDeleteInput(index)}>
                            <span className="material-icons">remove_road</span>
                        </p>
                    )}
                    </section>
                </div>
            ))}
        </div>

    );
}


