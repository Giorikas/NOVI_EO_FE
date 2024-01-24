import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AuthContextProvider from "./context/AuthContext.jsx";
import HeaderTitleContextProvider from "./context/HeaderTitleContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <HeaderTitleContextProvider>
                    <App/>
                </HeaderTitleContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
)
