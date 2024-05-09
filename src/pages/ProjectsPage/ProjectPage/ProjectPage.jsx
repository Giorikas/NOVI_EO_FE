import './ProjectPage.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState, useContext} from "react";
import ImageManagement from "../../../components/ImageManagement/ImageManagement.jsx";
import CrossSectionBorders from "../../../components/crossSectionBorders/CrossSectionBorders.jsx";

export default function ProjectPage() {

    const baseURL = 'http://localhost:8080/projects';
    const { id } = useParams();
    const [projectData, setProjectData] = useState({});

    const [csParamLeftBorder, setCsParamLeftBorder] = useState('');
    const [csParamRightBorder, setCsParamRightBorder] = useState('');
    const [csParamWidth, setCsParamWidth] = useState(0.0);

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

    },[CrossSectionBorders])

    //Input from child Components:
        // dropDownLeft
    const leftBorder = (crossSectionBordersData) => {setCsParamLeftBorder(crossSectionBordersData);}
    console.log("Projectpage : "+ csParamLeftBorder)
    const rightBorder = (crossSectionBordersData) => {setCsParamRightBorder(crossSectionBordersData);}
    const csWidth = (crossSectionBordersData) => {setCsParamWidth(crossSectionBordersData);}


    return (
        <>
            <h2>{projectData.name}</h2>
            <fieldset>
                <legend>Opbouw Dwarsprofiel</legend>
                <div className="flex-row-center">
                    <ImageManagement/>
                </div>
                <div id="cross-section-borders">
                    <h3> {csParamLeftBorder} {csParamRightBorder} {csParamWidth} </h3>
                    <CrossSectionBorders
                        leftBorder = {leftBorder}
                        rightBorder = {rightBorder}
                        csWidth = {csWidth}
                    />
                </div>
                <section id="cross-section-parameters">

                    <div className="function-titles">
                        <h3>Functie</h3>
                        <h4>Breedte</h4>
                        <h4>Type deklaag</h4>
                        <h4>Ontwerpsnelheid</h4>
                        <h4>Intensiteit</h4>
                    </div>
                </section>
            </fieldset>
            {/*<div>Het productnummer is {project.id}</div>*/}
        </>
    )
}
