import './Navigation.css';
import {useState, useEffect} from "react";
import CustomButton from '../custombutton/CustomButton.jsx';
import logoSmall from '../../assets/VappLogoSmall.svg';
import {Link, useNavigate} from 'react-router-dom';
import navTextChange from '../../helpers/navTextChange.js'
import Header from "../header/Header.jsx";

function Navigation() {
    const [navtext, setNavtext] = useState("Hoi")
    const [headerTitle, setHeaderTitle] = useState("Homepage")
    const navigate = useNavigate();
    return (<>
            <Header
                title={headerTitle}
            />
            <nav>
                <div className="main-navigation outer-content-container">
                    <div className="inner-nav-container">
                        <button type="button" onClick={() => navigate('/')}>
                            <span className="material-icons">&#xE88A;</span>
                        </button>
                        <button type="button" onClick={() => navigate('/RegistrationPage')}>
                            <span className="material-icons">&#xE8AC;</span>
                        </button>
                        <button
                            type="button"
                            onClick={
                                () => {
                                    navigate('/LoginPage');
                                    setHeaderTitle("login");
                                }}
                            onMouseEnter={() => setNavtext(navTextChange("Login"))}
                            onMouseLeave={() => setNavtext(navTextChange(""))}>
                            <span className="material-icons">&#xEA77;</span>
                        </button>

                        {/*
                        <CustomButton type="button" variant="primary"
                                      onClick={() => setNavtext(navTextChange("Miauw!"))}>
                            CustomKnop
                        </CustomButton>*/}

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