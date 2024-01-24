import './Navigation.css';
import {useState, useEffect, useContext} from "react";
import {Link, useNavigate} from 'react-router-dom';
import navTextChange from '../../helpers/navTextChange.js'
import Header from "../header/Header.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
// import NavButton from "../custombutton/NavButton.jsx";

export default function NavLoggedIn() {
    const [navtext, setNavtext] = useState("")
    const [headerTitle, setHeaderTitle] = useState("")
    const navigate = useNavigate();

    const wat = useContext(AuthContext)
    const {isAuth, logout} = useContext(AuthContext);
    console.log(wat);
    return (<>

            <nav>
                <div className="main-navigation outer-content-container">
                    <Header
                        title={headerTitle}
                    />
                    <div className="inner-nav-container logged-in">
                        <button type="button" onClick={() => {
                            navigate('/')
                            setHeaderTitle("Welkom");
                        }}
                                onMouseEnter={() => setNavtext(navTextChange("homepage"))}
                                onMouseLeave={() => setNavtext(navTextChange(""))}>

                            <span className="material-icons">&#xE88A;</span>
                        </button>
                        <button type="button" onClick={() => {
                            navigate('/RegistrationPage')
                            setHeaderTitle("Registratie");
                        }}
                                onMouseEnter={() => setNavtext(navTextChange("Uitloggen"))}
                                onMouseLeave={() => setNavtext(navTextChange(""))}>
                            <span className="material-icons">&#xE8AC;</span>
                        </button>
                        <button type="button"
                                onClick={
                                    () => {
                                        navigate('/LoginPage');
                                        setHeaderTitle("login");
                                    }}
                                onMouseEnter={() => setNavtext(navTextChange("inloggen"))}
                                onMouseLeave={() => setNavtext(navTextChange(""))}>
                            <span className="material-icons">&#xEA77;</span>
                        </button>
                        {/*<NavButton type="button" onClickNav='/RegistrationPage' textOnButton="R"
                                   onClickHeaderTitle="Registration Page"
                                   onMouseEnter={() => setNavtext(navTextChange("Registreren"))}
                                   onMouseLeave={() => setNavtext(navTextChange(""))}
                        />*/}

                        <h3 className="navtext-right">
                            {navtext}
                        </h3>

                    </div>

                </div>
            </nav>
        </>
    );
}

