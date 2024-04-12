import './NewProjectPage.css'
import {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext.jsx";
import statusToClassname from "../../../helpers/statusToClassName.js";


export default function NewProjectPage(){

    const [isProjectNameVisible, setIsProjectNameVisible]  = useState(false)
    // const [typeOfWorks, setTypeOfWorks] = useState('')
    const [formStateNewProject, setFormStateNewProject] = useState({
        streetName: '',
        projectLocation: '',
        typeOfWorks: ''
    })
    const {isAuth} = useContext(AuthContext);


    useEffect( ()=> {
        setIsProjectNameVisible((formStateNewProject.streetName != '') && (formStateNewProject.projectLocation != '') && (formStateNewProject.typeOfWorks != ''))
    }), [formStateNewProject];

    function handleSubmit(e) {
g
        e.preventDefault();
        console.log(formStateNewProject);
    }

    function handleFormChange(e) {


        const changedFieldName = e.target.name;
        const newValue = e.target.type === ("checkbox") ? e.target.checked : e.target.value;

        setFormStateNewProject({
            ...formStateNewProject,
            [changedFieldName]: newValue,
        });
        if ((formStateNewProject.streetName != '') && (formStateNewProject.projectLocation != '') && (formStateNewProject.typeOfWorks != '')) {
        setIsProjectNameVisible(true)}
        console.log(formStateNewProject.typeOfWorks)
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
        console.log("Auth:  " + isAuth.userRole)
    }




    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Locatie</legend>
                    <label htmlFor="details-road">
                        <input
                            placeholder="Straatnaam of Wegnummer"
                            type="text"
                            name="streetName"
                            id="details-road"

                            value={formStateNewProject.streetName}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label htmlFor="details-location">
                        <input
                            placeholder="Plaats/Gemeente/Provincie"
                            type="text"
                            name="projectLocation"
                            id="details-location"
                            value={formStateNewProject.projectLocation}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Werkzaamheden</legend>

                    <label htmlFor="typeOfWorksMaintenance">
                        <input type="radio"
                               name="typeOfWorks"
                               value="Onderhoud"
                            //checked={formState.typeOfWorks === "TrafficEngineer"}
                               id="typeOfWorksMaintenance"
                               onChange={handleFormChange}

                        />Onderhoud
                    </label>
                    <label htmlFor="typeOfWorksReconstruction">
                        <input type="radio"
                               name="typeOfWorks"
                               value="Reconstructie"
                               id="typeOfWorksReconstruction"
                               onChange={handleFormChange}
                        /> Reconstructie
                    </label>
                    <label htmlFor="typeOfWorksNewlyBuilt">
                        <input type="radio"
                               name="typeOfWorks"
                               value="Nieuwbouw"
                            //checked={formState.typeOfWorks === "CivilEngineer"}
                               id="typeOfWorksNewlyBuilt"
                               onChange={handleFormChange}
                        /> Nieuwbouw
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Projectnaam</legend>
                    {(formStateNewProject.streetName != '') && (formStateNewProject.projectLocation != '') && (formStateNewProject.typeOfWorks != '') ?
                        (<h4>{formStateNewProject.typeOfWorks} | {formStateNewProject.streetName} | {formStateNewProject.projectLocation}</h4>)
                        : (<></>)}

                </fieldset>
                <button type="submit" disabled={!isProjectNameVisible}>
                    <span className="material-icons">&#xE163;</span>
                </button>
            </form>
        </>
    );
}





