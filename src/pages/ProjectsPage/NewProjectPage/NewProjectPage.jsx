import './NewProjectPage.css'
import {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext.jsx";
import statusToClassname from "../../../helpers/statusToClassName.js";
import {HeaderTitleContext} from "../../../context/HeaderTitleContext.jsx";


export default function NewProjectPage(){

    const [headerText, setHeaderText] = useState("Nieuw Project");
    const {setHeaderStaticPage} = useContext(HeaderTitleContext);
    const [isProjectNameVisible, setIsProjectNameVisible]  = useState(false)
    // const [typeOfWorks, setTypeOfWorks] = useState('')
    const [formStateNewProject, setFormStateNewProject] = useState({
        streetName: '',
        projectLocation: '',
        typeOfWorks: '',
        projectName: ''
    })
    const {isAuth} = useContext(AuthContext);

    const [loadedOnce, setLoadedOnce] = useState(false)

    useEffect( ()=> {
      if (loadedOnce) {setHeaderStaticPage(headerText);}
        //Without this radiobutton changes will only take efffect after changing radiobutton three tinmes ???!!!! :::
        //setIsProjectNameVisible((formStateNewProject.streetName != '') && (formStateNewProject.projectLocation !=
      // '') && (formStateNewProject.typeOfWorks != ''));
    }, [formStateNewProject]);

    function handleSubmit(e) {
        e.preventDefault();

        let sendProjectName = '';

        if (formStateNewProject.projectName == '') {
            sendProjectName = (formStateNewProject.typeOfWorks + " | " + formStateNewProject.streetName + " | " + formStateNewProject.projectLocation)
        } else sendProjectName = formStateNewProject.projectName;
        const sendObj = {"name" : sendProjectName, "status": "STARTED"};
        console.log(sendObj);
        console.log(sendProjectName);
        const result = axios.post('http://localhost:8080/projects', sendObj );
        console.log("result" + result);
    }

    function handleFormChange(e) {
        setLoadedOnce(true);
        // setIsProjectNameVisible here and use var isProjectNameVisible in render-return: one cycle to late;
        // setIsProjectNameVisible((formStateNewProject.streetName != '') &&
        // (formStateNewProject.projectLocation != '') && (formStateNewProject.typeOfWorks != ''));

        const changedFieldName = e.target.name;
        const newValue = e.target.type === ("checkbox") ? e.target.checked : e.target.value;

        setFormStateNewProject({
            ...formStateNewProject,
            [changedFieldName]: newValue,
        });
        if ((formStateNewProject.streetName != '') && (formStateNewProject.projectLocation != '') && (formStateNewProject.typeOfWorks != '')) {
            setIsProjectNameVisible(true)}
        //console.log(formStateNewProject.typeOfWorks)
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
        console.log("isProjectNameVisible - " + isProjectNameVisible)
        //console.log("Auth:  " + isAuth.userRole)
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
                               id="typeOfWorksNewlyBuilt"
                               onChange={handleFormChange}
                        /> Nieuwbouw
                    </label>

                </fieldset>

                <fieldset>
                    <legend>Projectnaam</legend>
                    {// isProjectNameVisible ? // <<< To late... On time >>>>
                        ((formStateNewProject.streetName != '') && (formStateNewProject.projectLocation != '') &&
                        (formStateNewProject.typeOfWorks != '')) ?
                        <div>
                            <p>
                                druk op de groene knop voor <strong><em>{formStateNewProject.typeOfWorks + " | " + formStateNewProject.streetName + " | " + formStateNewProject.projectLocation}</em></strong> of wijzig de naam van het project hieronder.
                            </p>

                            <label htmlFor="finalProjectName"></label>
                            <input  placeholder={formStateNewProject.typeOfWorks + " | " + formStateNewProject.streetName + " | " + formStateNewProject.projectLocation}
                                    className="input-project-name"
                                    type="text"
                                    id="finalProjectName"
                                    name="projectName"
                                    // value={formStateNewProject.projectName}
                                    onChange={handleFormChange}
                            />
                        </div>
                        : <></>
                    }

                </fieldset>
                <button type="submit" disabled={!((formStateNewProject.streetName != '') && (formStateNewProject.projectLocation != '') &&
                    (formStateNewProject.typeOfWorks != ''))
                  //  !isProjectNameVisible Not implemented due to radiobutton error...
                }>
                    <span className="material-icons">&#xE163;</span>
                </button>
            </form>
        </>
    );
}




