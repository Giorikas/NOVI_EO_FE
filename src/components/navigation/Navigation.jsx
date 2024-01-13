import './Navigation.css';
import {useState, useEffect} from "react";
import CustomButton from '../custombutton/CustomButton.jsx';
import logoSmall from '../../assets/VappLogoSmall.svg';
import {Link, useNavigate} from 'react-router-dom';
import navTextChange from '../../helpers/navTextChange.js'


function Navigation() {
    const [navtext, setNavtext] = useState("Q")
    const navigate = useNavigate();
    return (
        <nav className="main-navigation outer-content-container">
            <div className="inner-nav-container">
                <button type="button" onClick={() => navigate('/')}>
                    <span className="material-icons">&#xE88A;</span>
                </button>
                <button type="button" onClick={() => navigate('/RegistrationPage')}>
                    <span className="material-icons">&#xE8AC;</span>
                </button>
                <button type="button" onClick={() => navigate('/LoginPage')}>
                    <span className="material-icons">&#xEA77;</span>
                </button>
                    <p></p>
                <CustomButton type="button" variant="primary" onClick={() => navigate('/')}>
                    QQQ
                </CustomButton>

                <ul className="main-navigation-links">
                </ul>
            </div>

        </nav>
    );
}

export default Navigation;