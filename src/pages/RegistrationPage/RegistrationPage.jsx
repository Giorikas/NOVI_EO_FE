import '../../index.css'
import './RegistrationPage.css';
import {useState} from "react";
import axios from "axios";

// import chkSamePasswords from "../../helpers/chkSamePasswords.js";
export default function RegistrationPage()

{
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        roleChoice: ''

    });

        function postRegistration(formstate){
            try {
                const response = axios.post('http://localhost:8080/register', "stuff",
                    {
                        headers:
                            {
                                'Content-Type': 'application/json'
                            }
                    })
            }
            catch (e) {
                console.log(e)
            }
        }

        function handleSubmit(e) {
            // chkSamePasswords({formState.password},{formState.password2});
            e.preventDefault();
            console.log(formState);

            // This one works
            //const result = axios.get('http://localhost:8080/register');

            const result = axios.post('http://localhost:8080/register', {"Test": "Malakas"});
            //console.log(result);
        }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {

        const changedFieldName = e.target.name;
        const newValue = e.target.type === ("checkbox") ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,

        });
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    function handleRadioChange(e) {
        const newVal = e.target.value;
        console.log(newVal)
        formState.roleChoice = newVal;
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Rol</legend>
                    <label htmlFor="roleProjectLeader">
                        <input type="radio"
                               name="roleChoice"
                               value="ProjectLeader"
                               //checked={formState.roleChoice === "ProjectLeader"}
                               id="roleProjectLeader"
                               onChange={handleFormChange}
                        /> Projectleider</label>
                    <label htmlFor="roleTrafficEngineer">
                        <input type="radio"
                               name="roleChoice"
                               value="TrafficEngineer"
                               //checked={formState.roleChoice === "TrafficEngineer"}
                               id="roleTrafficEngineer"
                               onChange={handleRadioChange}
                               defaultChecked
                        />Verkeerskundig Ontwerper
                    </label>

                    <label htmlFor="roleCivilEngineer">
                        <input type="radio"
                               name="roleChoice"
                               value="CivilEngineer"
                               //checked={formState.roleChoise === "CivilEngineer"}
                               id="roleCivilEngineer"
                               onChange={handleRadioChange}
                        /> Civieltechnisch Ontwerper
                    </label>
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
                <button type="submit">
                    <span className="material-icons">&#xE163;</span>
                </button>
            </form>
        </>
    );
}

