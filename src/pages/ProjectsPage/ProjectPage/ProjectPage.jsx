import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState, useContext} from "react";
// import projectBarProjects from "../../../helpers/Projectenlijst.json";

export default function ProjectPage() {

    const baseURL = 'http://localhost:8080/projects';
    const { id } = useParams();
    const [projectData, setProjectData] = useState({})
//    let project = projectBarProjects[id];

    useEffect(()=> {
        // setHeaderStaticPage(headerText);

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
            <h1>{projectData.name}</h1>
            <h2>{id}</h2>
            {/*<div>Het productnummer is {project.id}</div>*/}
        </>
    )
}
