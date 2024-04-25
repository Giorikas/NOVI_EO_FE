import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState, useContext} from "react";
import ImageManagement from "../../../components/ImageManagement/ImageManagement.jsx";

export default function ProjectPage() {

    const baseURL = 'http://localhost:8080/projects';
    const { id } = useParams();
    const [projectData, setProjectData] = useState({})
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

    },[])

    return (
        <>
            <h2>{projectData.name}</h2>
            <fieldset>
                <legend>Opbouw Dwarsprofiel</legend>
                <div className="flex-row-center">
                    <ImageManagement/>
                </div>



            </fieldset>
            {/*<div>Het productnummer is {project.id}</div>*/}
        </>
    )
}
