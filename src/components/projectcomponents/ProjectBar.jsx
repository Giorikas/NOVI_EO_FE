
import "./ProjectBar.css"
import {useContext, useEffect, useState} from "react";
import CustomButton from "../../components/custombutton/CustomButton.jsx";


export default function ProjectBar(props){

    // const [projectBarProject, setProjectBarProject] = useState({})
    console.log(props.data.id)
    console.log(props.data.status)
    console.log(props.data.name)



    return(
            <>
                <div>
                <CustomButton type="button" disabled={false} >
                    <span className="material-icons">edit_road</span>
                </CustomButton>
                    <h3>{props.data.name}</h3>
                </div>
            </>
    )

}