
import "./ProjectBar.css"
import {useContext, useEffect, useState} from "react";
import CustomButton from "../../components/custombutton/CustomButton.jsx";
import statusToClassname from "../../helpers/statusToClassName.js";
import {useNavigate} from "react-router-dom";


export default function ProjectBar(props){

    // const [projectBarProject, setProjectBarProject] = useState({})
    const [cssStatusClassName, setCssStatusClassName] = useState("");
    const [projectIsFinished, setProjectIsFinished] = useState("false");

    const navigate = useNavigate();
    // console.log(props.data.id);
    // console.log(props.data.status);
    // console.log(props.data.name);


    useEffect( ()=> {
        setCssStatusClassName(statusToClassname(props.data.status));
        if (props.data.status == "Finished"){setProjectIsFinished("true")}
    })



    if (cssStatusClassName == "") {return <></>} else {
        return(
            <>

                <div className={cssStatusClassName}>
                    <div className="left-incontainer-status">
                        <CustomButton
                            type="button"
                            disabled={false}
                            onClick={
                                () => {
                                    navigate("/ProjectsPage/"+props.data.id);
                                }}>
                            <span className="material-icons">menu_book</span>
                        </CustomButton>

                        <h3>{props.data.name}</h3>
                    </div>

                    <div className="right-incontainer">

                        <CustomButton type="button" disabled={false} >
                            <span className="material-icons">info</span>
                        </CustomButton>
                        <CustomButton type="button" disabled={projectIsFinished} >
                            <span className="material-icons">edit_road</span>
                        </CustomButton>
                        <CustomButton classname="delete-button" type="button" disabled={false} >
                            <span className="material-icons">remove_road</span>
                        </CustomButton>

                    </div>
                </div>
            </>
        )}

}