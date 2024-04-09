import './ProjectsPage.css'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";
import CustomButton from "../../components/custombutton/CustomButton.jsx";
import ProjectBar from "../../components/projectcomponents/ProjectBar.jsx";
//import projectBarProjects from "../../helpers/Projectenlijst.json";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import projectBarProjects from "../../helpers/Projectenlijst.json";

export default function ProjectsPage(){

    const [headerText, setHeaderText] = useState("Projecten");
    const {setHeaderStaticPage} = useContext(HeaderTitleContext);
    const [shownStatus, setShownStatus] = useState('status');
    const [cssStatusClassName, setCssStatusClassName] = useState('')
    const navigate = useNavigate();
    const [projectBarProjects, setProjectBarProjects] = useState([]);

    useEffect(()=> {
        setHeaderStaticPage(headerText);

        async function fetchProjects(){
            try {
                const r = await axios.get('http://localhost:8080/projects');
                setProjectBarProjects(r.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProjects().then(/* rebind pagina */)

        // CHECK if array is not empty!

    },[])

    function newProject(){
        navigate('/ProjectsPage/NewProjectPage')
    }



    return(
         <>
             <fieldset>
                 <legend>
                 <CustomButton classname="new-project" type="button" disabled={false} onClick={newProject}>
                     <span className="material-icons">add_road</span>
                 </CustomButton>
                 </legend>
             </fieldset>

                 {projectBarProjects.map((projectBarProjects, index) =>
                     <ProjectBar key={index} data={projectBarProjects}/>
                 )}





         </>
    );
}