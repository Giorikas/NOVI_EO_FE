import './ProjectsPage.css'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";
import CustomButton from "../../components/custombutton/CustomButton.jsx";
import ProjectBar from "../../components/projectcomponents/ProjectBar.jsx";
import projectBarProjects from "../../helpers/Projectenlijst.json";
import {useNavigate} from "react-router-dom";

export default function ProjectsPage(){

    const [headerText, setHeaderText] = useState("Projecten");
    const {setHeaderStaticPage} = useContext(HeaderTitleContext);
    const [projectNavText, setProjectNavText] = useState('Hallo');
    const [shownStatus, setShownStatus] = useState('status');
    const [cssStatusClassName, setCssStatusClassName] = useState('')
    const navigate = useNavigate();

    useEffect(()=> {
        setHeaderStaticPage(headerText);

        // async function fetchProjects(){
        //     try {
        //         const r = await axios.get('SERVER..../projects/...')
        //         setProjectForBar(r.data);
        //     } catch (e) {
        //         console.error(e);
        //     }
        // }
        // fetchProjects()

        // CHECK if array is not empty!

    },[])




    function newProject(){
        console.log(projectBarProjects[1].status)
        navigate('/ProjectsPage/NewProjectPage')
    }

    function statusToClassname (str){
        switch (str) {
            case    "Started":
                setCssStatusClassName('st-')
                break
        }
    }

    return(
         <>
             <div className="subnav">
                 <h2>{projectNavText}</h2>
                 <CustomButton type="button" disabled={false} onClick={newProject}>
                     <span className="material-icons">add_road</span>
                 </CustomButton>
                    <h3>{shownStatus}</h3>
             </div>


                {/*{projectBarProjects.length >0 && projectBarProjects.map((projectBar, index) => {*/}
                {/*    return (*/}
                {/*                <ProjectBar*/}
                {/*                    key={index}*/}
                {/*                    data={projectBar}*/}
                {/*                />*/}
                {/*    );*/}
                {/*})}*/}

             {projectBarProjects.map((projectBarProjects, index) =>
             <ProjectBar key={index} data={projectBarProjects}/>)
             }

         </>
    );
}