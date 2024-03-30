import './App.css';
import {useContext, useState} from 'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom';

// Components:
import Header from "./components/header/Header.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import CommentSection from "./components/commentsection/CommentSection.jsx";
import Footer from "./components/footer/Footer"

// Pages:
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import ManualPage from "./pages/ManualPage/ManualPage.jsx";

import {AuthContext} from "./context/AuthContext.jsx";
import {HeaderTitleContext} from "./context/HeaderTitleContext.jsx";




function App() {

    const {isAuth} = useContext(AuthContext);
    // const {headerTitle} = useContext(HeaderTitleContext)

  return (
    <>
        <Navigation />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/LoginPage" element={<LoginPage />}/>
                <Route path="/RegistrationPage" element={<RegistrationPage />}/>
                <Route path="/ContactPage" element={<ContactPage />}/>
                <Route path="/ProjectsPage" element={isAuth ? <ProjectsPage /> : <Navigate to="/" />}/>
                <Route path="/ManualPage" element={isAuth ? <ManualPage /> : <Navigate to="/" />}/>
            </Routes>
        </main>
        <CommentSection />
        <Footer />
    </>
  )
}

export default App
