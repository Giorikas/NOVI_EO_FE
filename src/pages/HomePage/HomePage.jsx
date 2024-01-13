import Navigation from "../../components/navigation/Navigation.jsx";
import DWP from "../../assets/LandingPageImg.jpg";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage.jsx";
import Header from "../../components/header/Header.jsx";

function HomePage() {
    Header.setHeaderTitle = "Homepage"

    return (
        <>
            <main>
                <img className="logo"  src={DWP}/>
            </main>

        </>
    )
}

export default HomePage
