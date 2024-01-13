import './App.css';
import { useState } from 'react';
import VappLogo from './assets/VappLogo.svg';
import DWP from './assets/LandingPageImg.jpg'
import {Link, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Navigation from "./components/navigation/Navigation.jsx";
import CommentSection from "./components/commentsection/CommentSection.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {


  return (
    <>
        <Header />
        <Navigation />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/LoginPage" element={<LoginPage />}/>
                <Route path="/LoginPage" element={<RegistrationPage />}/>
            </Routes>
        </main>
        <CommentSection />
        <Footer />

    </>
  )
}

export default App
