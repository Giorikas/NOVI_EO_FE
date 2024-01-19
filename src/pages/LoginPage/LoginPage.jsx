import './LoginPage.css';
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";


function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            Emailadres: email,
            Wachtwoord: password,
        });

        login(email);

    }

    return (

        <>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Inloggegevens</legend>
                    <label htmlFor="login-email">
                        email:
                        <input
                            type="email"
                            name="email"
                            id="login-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="login-password">
                        Wachtwoord:
                        <input
                            type="password"
                            name="password"
                            id="login-password"
                            value={password}
                            onChange={(e)=> setPassword((e.target.value))}
                            required
                        />
                    </label>
                </fieldset>
                <button className="pill-button" type="submit">
                    <span className="material-icons">&#xE163;</span>
                </button>
            </form>
        </>
    )
}
export default LoginPage;
