import './App.css';
import {useContext, useState} from 'react';
import VappLogo from './assets/VappLogo.svg';
import DWP from './assets/LandingPageImg.jpg'
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import Footer from "./components/footer/Footer"
import Navigation from "./components/navigation/Navigation.jsx";
import CommentSection from "./components/commentsection/CommentSection.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import {AuthContext} from "./context/AuthContext.jsx";

function App() {

    const {isAuth} = useContext(AuthContext);

  return (
    <>

        <Navigation />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/LoginPage" element={<LoginPage />}/>
                <Route path="/RegistrationPage" element={<RegistrationPage />}/>
                <Route path="/ProjectsPage" element={isAuth ? <ProjectsPage /> : <Navigate to="/" />}/>
            </Routes>
        </main>
        <CommentSection />
        <Footer />

    </>
  )
}

export default App
