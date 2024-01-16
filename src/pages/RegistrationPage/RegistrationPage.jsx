import '../../index.css'
import './RegistrationPage.css';

import {useState} from "react";

export default function RegistrationPage() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',


    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,

        });
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Rol</legend>
                    <label><input type="radio" name="roleChoise" value="ProjectLeader"
                                  id="roleProjectLeader"/> Projectleider</label>
                    <label><input type="radio" name="roleChoise" value="TrafficEngineer" id="roleTrafficEngineer"
                                  defaultChecked/>Verkeerskundig
                        Ontwerper</label>
                    <label><input type="radio" name="roleChoise" value="CivilEngineer"
                                  id="roleCivilEngineer"/> Civieltechnisch Ontwerper</label>
                </fieldset>
                <fieldset>
                    <legend>Naam</legend>
                    <label htmlFor="details-firstname">
                        voornaam:
                        <input
                            type="text"
                            name="firstname"
                            id="details-firstname"
                            value={formState.firstname}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label htmlFor="details-lastname">
                        achternaam:
                        <input
                            type="text"
                            name="lastname"
                            id="details-lastname"
                            value={formState.lastname}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Inloggegevens</legend>
                    <label htmlFor="details-email">
                        email:
                        <input
                            type="email"
                            name="email"
                            id="details-email"
                            value={formState.email}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label htmlFor="details-password">
                        Wachtwoord:
                        <input
                            type="password"
                            name="password"
                            id="details-password"
                            value={formState.password}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label htmlFor="details-password2">
                        Herhaal wachtwoord:
                        <input
                            type="password"
                            name="password2"
                            id="details-password2"
                            value={formState.password2}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                </fieldset>
                <button className="pill-button" type="submit">
                    <span className="material-icons">&#xE163;</span>
                </button>
            </form>
        </>
    );
}


/*
return (
    <>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Register</legend>
                <fieldset>
                    <legend>Naam:</legend>
                    <label htmlFor="details.firstName">Naam:

                        <input
                            type="text"
                            name= "firstName"
                            id= "details-firstName"
                            value={formState.firtsName}
                            onChange={handleFormChange}
                        />
                    </label>
                </fieldset>
            </fieldset>
        </form>
    </>
)
}

*/

