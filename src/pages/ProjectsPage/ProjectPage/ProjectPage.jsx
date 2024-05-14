import './ProjectPage.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState, prevState, useContext} from "react";

//Components:
import ImageManagement from "../../../components/imageManagement/ImageManagement.jsx";
import DynamicDropDown from "../../../components/dynamicDropDown/DynamicDropDown.jsx";
import NumericInput from "../../../components/numericInput/NumericInput.jsx";
import CustomButton from "../../../components/custombutton/CustomButton.jsx";
import AddCrossSectionParts from "../../../components/addCrossSectionParts/AddCrossSectionParts.jsx";
import {crossSectionBorderTypes} from '../../../helpers/crossSectionBorderTypes';

import crossSectionPartPavementTypes from "../../../helpers/crossSectionPartPavementTypes.json"
import crossSectionPartFunction from "../../../helpers/crossSectionPartFunction.json"
export default function ProjectPage() {

    const baseURL = 'http://localhost:8080/projects';
    const { id } = useParams();
    const [projectData, setProjectData] = useState({});


    // Project (CrossSections Params: cs=crossSection; csp = crossSectionPart)
    const [csParamLeftBorder, setCsParamLeftBorder] = useState('');
    const [csParamRightBorder, setCsParamRightBorder] = useState('');
    const [csParamWidth, setCsParamWidth] = useState(0.0);
    const [cspParameters, setcspParameters] = useState([{
        cspName: "",
        type: "",
        pavementWidth: 0.0,
        typePavement: "",
        designVelocity: 0,
        intensities: 0
    }]);


    //Array Fillers for Dynamic Dropdowns:
    const borderTypes = crossSectionBorderTypes(); // Array of Objects of crossectionParts
    const functionTypes = crossSectionPartFunction; // Array of Objects of functionTypes with default values.
    const pavementTypes = crossSectionPartPavementTypes; //Array of Objects of PavementTypes


// Switch to test site with roles:
    const [isRoleTraffic, setIsRoleTraffic] = useState(true);

//    let project = projectBarProjects[id];

    useEffect(()=> {

        async function fetchProject() {
            try {
                const r = await axios.get(`${baseURL}/${id}`);
                setProjectData(r.data)

            } catch (e) {
                console.error(e);
            }
        }
    fetchProject().then(/* rebind pagina */);

    },[DynamicDropDown, NumericInput])

    // Child to Parent Functions....:
        // CS Borders:
        const leftBorder = (crossSectionBordersData) => {setCsParamLeftBorder(crossSectionBordersData);}
        console.log("Projectpage L: "+ csParamLeftBorder)
        const rightBorder = (crossSectionBordersData) => {setCsParamRightBorder(crossSectionBordersData);}
        console.log("Projectpage R: "+ csParamRightBorder)
        const csWidth = (crossSectionBordersData) => {setCsParamWidth(crossSectionBordersData);}
        console.log("Projectpage W: "+ csParamWidth)
    console.log(pavementTypes)
    console.log(functionTypes)

        // CS Params:
        //const cspParams = (index, isDelete, crossSectionPartData) => {handleCrossSectionParts(index, isDelete,
    // crossSectionPartData)}




    function handleBtnClick(){
        setIsRoleTraffic(!isRoleTraffic);
        console.log(isRoleTraffic);
    }

    // function handleCrossSectionParts(index, isDelete, crossSectionPartData){}


    return (
        <>
            <h2>{projectData.name}</h2>
            <fieldset>
                <legend>Opbouw Dwarsprofiel</legend>
                <div className="flex-row-center">
                    <ImageManagement/>
                </div>
                <div className="cross-section-borders">
                    <DynamicDropDown
                        options = {borderTypes} optionsValue = "type" name = "leftBorder" placeholder = "Linker Grens" id = "leftBorderTypeSelector"
                        labelTxt = "Van: " childToParent = {leftBorder}
                    />
                    <DynamicDropDown
                        options = {borderTypes} optionsValue = "type" name = "rightBorder" placeholder = "Rechter Grens" id = "RightBorderTypeSelector"
                        labelTxt = "tot: "
                        childToParent = {rightBorder}
                    />
                    <NumericInput
                        id = "crossSectionWidth" step=".05" startValue="12.00" childToParent = {csWidth}
                        labelTxt = "is de afstand:" suffix = "meter"
                    />
                </div>
                <section id="cross-section-parameters">
                    <div className="cross-section-parameters-left">

                        <div className="function-titles">
                            <h3>Functie</h3>
                            <h4>Breedte</h4>
                            <h4>Type deklaag</h4>
                            <h4>Ontwerpsnelheid</h4>
                            <h4>Intensiteit</h4>
                        </div>
                        <div className="cross-section-parts-table">
                            <AddCrossSectionParts/>
                        </div>


                    </div>

                    <div className="cross-section-parameters-right">

                        <div className="buttons-area">
                            <CustomButton type="button" disabled={false} onClick={handleBtnClick}>
                                <span className="material-icons">add</span>
                            </CustomButton>

                            <CustomButton type="button" disabled={false} >
                                <span className="material-icons">remove</span>
                            </CustomButton>

                            <CustomButton type="button" disabled={false} >
                                <span className="material-icons">loop</span>
                            </CustomButton>
                        </div>
                    </div>
                </section>
                <button disabled={false} onClick={handleBtnClick}>
                    <span className="material-icons">loop</span>
                </button>
            </fieldset>
        </>
    )
}
