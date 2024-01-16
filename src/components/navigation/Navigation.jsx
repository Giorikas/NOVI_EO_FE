import './Navigation.css';
import {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import navTextChange from '../../helpers/navTextChange.js'
import Header from "../header/Header.jsx";

// import NavButton from "../custombutton/NavButton.jsx";

function Navigation() {
    const [navtext, setNavtext] = useState("")
    const [headerTitle, setHeaderTitle] = useState("Homepage")
    const navigate = useNavigate();
    return (<>

            <nav>
                <div className="main-navigation outer-content-container">
                    <Header
                        title={headerTitle}
                    />
                    <div className="inner-nav-container">
                        <button type="button" onClick={() => {
                            navigate('/')
                            setHeaderTitle("Homepage");
                        }}
                                onMouseEnter={() => setNavtext(navTextChange("homepage"))}
                                onMouseLeave={() => setNavtext(navTextChange(""))}>
                        <span className="material-icons">&#xE88A;</span>
                        </button>
                        <button type="button" onClick={() => {
                            navigate('/RegistrationPage')
                            setHeaderTitle("Registratie");
                        }}
                                onMouseEnter={() => setNavtext(navTextChange("registreren"))}
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

export default Navigation;