import Navigation from "../../components/navigation/Navigation.jsx";
import DWP from "../../assets/LandingPageImg.jpg";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage.jsx";

function HomePage() {


    return (
        <>
            <main>
                <img src={DWP}/>
            </main>

        </>
    )
}

export default HomePage
