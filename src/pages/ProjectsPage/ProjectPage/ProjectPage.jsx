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

export default function ProjectPage() {

    const baseURL = 'http://localhost:8080/projects';
    const { id } = useParams();
    const [projectData, setProjectData] = useState({ crossSections: []});

    // Project (CrossSections Params: cs=crossSection; csp = crossSectionPart)
    const [csParamLeftBorder, setCsParamLeftBorder] = useState('');
    const [csParamRightBorder, setCsParamRightBorder] = useState('');
    const [csParamWidth, setCsParamWidth] = useState(17.5);
    const [cspParameters, setCspParameters] = useState([{
        cspName: "",
        type: "",
        pavementWidth: 0.0,
        typePavement: "",
        designVelocity: 0,
        intensities: 0
    }]);

    //Array Fillers for Dynamic Dropdowns:
    const borderTypes = crossSectionBorderTypes(); // Array of Objects of crossectionParts

// Switch to test site with roles:
    const [isRoleTraffic, setIsRoleTraffic] = useState(true);

// let project = projectBarProjects[id];

    useEffect(()=> {

        async function fetchProject() {
            try {
                const r = await axios.get(`${baseURL}/${id}`);
                setProjectData(r.data);
            } catch (e) {
                console.error(e);
            }
        }
    fetchProject().then(/* rebind pagina */);
    // passing r.data to object.
    // setCspParameters(r.data);

    },[DynamicDropDown, NumericInput])

    // Child to Parent Functions....:
        // CS Borders:
        const leftBorder = (crossSectionBordersData) => {setCsParamLeftBorder(crossSectionBordersData);}
        // console.log("Projectpage L: "+ csParamLeftBorder)
        const rightBorder = (crossSectionBordersData) => {setCsParamRightBorder(crossSectionBordersData);}
        // console.log("Projectpage R: "+ csParamRightBorder)
        const csWidth = (crossSectionBordersData) => {setCsParamWidth(crossSectionBordersData);}
        // console.log("Projectpage W: "+ csParamWidth)
        const crossSectionToProject = (crossSectionToProjectData) => {setCspParameters(crossSectionToProjectData);}

        // CS Params:
        //const cspParams = (index, isDelete, crossSectionPartData) => {handleCrossSectionParts(index, isDelete,
        // crossSectionPartData)}

    function handleBtnClick(){
        setIsRoleTraffic(!isRoleTraffic);
        console.log(isRoleTraffic);
    }

    function handleSubmitCspJSON(){
        console.log(cspParameters)

        const result = axios.post('http://localhost:8080/crossSections', cspParameters );

        // const  strJson = JSON.stringify(cspParameters);
        // console.log("JSON string" + cspParameters);
    }


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
                        id = "crossSectionWidth" step=".05" startValue="17.50" childToParent = {csWidth}
                        labelTxt = "is de afstand:" suffix = "meter"
                    />
                </div>
                <section id="cross-section-parameters">
                    <div className="cross-section-parameters-left">

                        <div className="function-titles align-seven-vertical-elements">

                            {/*<p>Naam</p>*/}
                            <p>Functie</p>
                            <p>Breedte</p>
                            <p>Deklaag</p>
                            <p>Snelheid <i className="mathematics-font">v<sub>0</sub></i></p>
                            <p>Intensiteit <i className="mathematics-font">I</i></p>
                            <p></p>

                        </div>
                        <div className="csp-left-filler"></div>
                        <div className="cross-section-parts-table">
                            <AddCrossSectionParts
                                childToParent={crossSectionToProject}/>
                        </div>

                    </div>
                    <div className="cross-section-parameters-right">
                        <div className="buttons-area">
                            <CustomButton type="button"
                                          disabled={false}
                                          onClick={handleSubmitCspJSON}
                                              >
                                <span className="material-icons">thumb_up</span>

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
