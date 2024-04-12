import { useParams } from "react-router-dom";
import projectBarProjects from "../../../helpers/Projectenlijst.json";

export default function ProjectPage() {
    const { id } = useParams();

    let project = projectBarProjects[id];

    return (
        <>
            <h2>{id}</h2>
        <h1>{project.name}</h1>
        <div>Het productnummer is {project.id}</div>
        </>
    )
}
