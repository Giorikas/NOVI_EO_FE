import './Navigation.css';
import {useState, useEffect, useContext} from "react";
import {Link, useNavigate} from 'react-router-dom';
import navTextChange from '../../helpers/navTextChange.js'
import Header from "../header/Header.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";

export default function Navigation() {
    const [navtext, setNavtext] = useState("")
    const [navtextR, setNavtextR] = useState("")
    const [navHeaderTitle, setNavHeaderTitle] = useState('')
    const navigate = useNavigate();

    const {isAuth, logout} = useContext(AuthContext);
    const {headerTitle, setHeaderStaticPage} = useContext(HeaderTitleContext)

    function makeNavButton(navigateTo, navHeaderTitle, naviText, buttonSymbol, clName = '', navTextLeft = true) {

        return (
            <button type="button"
                    className={clName}
                    onClick={
                        () => {
                            navigate(navigateTo);
                            setHeaderStaticPage(navHeaderTitle);
                        }}
                    onMouseEnter={() => {
                        if (navTextLeft) {
                            setNavtext(navTextChange(naviText))
                        } else {
                            setNavtextR(navTextChange(naviText))
                        }
                    }
                    }
                    onMouseLeave={() => {
                        if (navTextLeft) {
                            setNavtext(navTextChange(""))
                        } else {
                            setNavtextR(navTextChange(""))
                        }
                    }
                    }>
                <span className="material-icons">{buttonSymbol}</span>
            </button>
        )
    }

    return (<>

            <nav>
                <div className="main-navigation outer-content-container">
                    {!isAuth ?
                        <div className="inner-nav-container">
                            <div className="left-part">
                                <div className="left-in-container">
                                    {makeNavButton('/', 'Welkom', 'homepage', "home")}
                                    {makeNavButton('/RegistrationPage', "Registratie", "registreren", "power_settings_new")}
                                    {makeNavButton('/LoginPage', "Login", "inloggen", "login", "")}
                                    <h3 className="navtext-center">
                                        {navtext}
                                    </h3>
                                </div>
                            </div>
                            <div className="center-part">
                                <Header title={headerTitle}/>
                            </div>
                            <div className="right-part">
                                <div className="right-in-container">
                                    {makeNavButton('/ContactPage', "Contact", "contact", "chat mail phone", "pill-button", false)}
                                    <h3 className="navtext-center">
                                        {navtextR}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="inner-nav-container">
                            <div className="left-part">
                                <div className="left-in-container">
                                    <button className="button-red" type="button" onClick={logout}>
                                        <span className="material-icons">logout</span>
                                    </button>
                                    {makeNavButton('/ProjectsPage', "Overzicht Projecten", "overzicht projecten", "build")}
                                    {makeNavButton('/ManualPage', "Handleiding", "handleiding", "info", "information-button")}
                                    <h3 className="navtext-center">
                                        {navtext}
                                    </h3>
                                </div>
                            </div>
                            <div className="center-part">
                                <Header title={headerTitle}/>
                            </div>
                            <div className="right-part">
                                <div className="right-in-container">
                                    {makeNavButton('/ContactPage', "Contact", "contact", "chat mail phone", "pill-button", false)}
                                    <h3 className="navtext-center">
                                        {navtextR}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

