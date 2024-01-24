import './ProjectsPage.css'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";

export default function projectsPage(){

    const [headerText, setHeaderText] = useState("Projecten")
    const {setHeaderStaticPage} = useContext(HeaderTitleContext)

    useEffect(()=> {
        setHeaderStaticPage(headerText)
    },[])

    return(

         <>

         </>


    );
}