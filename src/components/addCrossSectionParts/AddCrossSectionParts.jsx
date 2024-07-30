import './AddCrossSectionParts.css'

import { useState } from "react";
import crossSectionPartPavementTypes from "../../helpers/crossSectionPartPavementTypes.json"
import crossSectionPartFunction from "../../helpers/crossSectionPartFunction.json"



export default function AddCrossSectionParts({childToParent}) {

    const functionTypes = crossSectionPartFunction; // Array of Objects of functionTypes with defaultValues.
    const pavementTypes = crossSectionPartPavementTypes; //Array of Objects of PavementTypes --> vooralsnog hardcoded!
    // console.log("FUNCTIONTYPES -- ")
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
        updateToParent();
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
        updateToParent();
    };

    function handleSelect(event, index) {
        console.log("Component selected: ", event.target.value);
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;

        if (name == "type") {
            onChangeValue[index]["name"] = value + "-" + index;
        }

        setSelectedItem(value);
        setInputs(onChangeValue);
        
        updateToParent();
    }

    function updateToParent(){
        childToParent(inputs);
    }

    return (
        <div className="csp-params-input-container">
            {inputs.map((csp, index) => (
                <div className="csp-params-inputs align-seven-vertical-elements" key={index}>
                    <input
                        id="cspParamInputName"
                        name="name"
                        value={csp.name}
                        type="hidden"/>

                    <select
                        id="cspParamInputType"
                        name="type"
                        value={csp.type}
                        onChange={(event) => handleSelect(event, index)}>
                        <option disabled="true" value="">Kies functie</option>
                        {functionTypes.map((functionType) => <option key={functionType.type} value={functionType.type}>{functionType.labelNl}</option> )}

                    </select>

                    <input
                        id="cspParamInputPavementWidth"
                        name="pavementWidth"
                        type="number"
                        step="0.05"
                        value={csp.pavementWidth}
                        onChange={(event) => handleChange(event, index)}
                    />

                    <select
                        id = "cspParamInputTypePavement"
                        name = "typePavement"
                        value={csp.typePavement}
                        onChange={(event) => handleSelect(event, index)}>
                        <option disabled="true" value="">Kies verharding</option>
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


