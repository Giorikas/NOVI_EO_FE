import './ProjectsPage.css'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";
import CustomButton from "../../components/custombutton/CustomButton.jsx";
import lijst from "../../helpers/Projectenlijst.json";

export default function projectsPage(){

    const [headerText, setHeaderText] = useState("Projecten");

    const {setHeaderStaticPage} = useContext(HeaderTitleContext);
    const [projectNavText, setProjectNavText] = useState('Hallo Jasper');
    const [shownAmount, setShownAmount] = useState(0);


    useEffect(()=> {
        setHeaderStaticPage(headerText);
    },[])

    function newProject(){
        console.log(lijst)

        return (
            <h2>List</h2>
        )
    }

    function showAmounts(event){
        setShownAmount(lijst.find((lijstItem) => lijstItem.id == event.target.value)?.amount)

    }

    const lijstMetOpties = lijst.map((lijstItem) => (
            <option key={lijstItem.id} value={lijstItem.id}>
                {lijstItem.name}
            </option>
        )
    );


    return(

         <>
             <div className="subnav">
                 <h2>{projectNavText}</h2>
                 <CustomButton type="button" disabled={false} onClick={newProject}>
                     <span className="material-icons">home</span>
                 </CustomButton>
                 <select  onChange={showAmounts}>
                     {lijstMetOpties}
                 </select>
                    <h3>{shownAmount}</h3>
             </div>
         </>


    );
}