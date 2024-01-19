import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

export default function AuthContextProvider({children}){

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        userEmail: '',
        userRole: '',
    });

    const navigate = useNavigate();

    function login(userEmail){
        console.log("Ingelogd");
        toggleIsAuth({
            isAuth: true,
            userEmail: userEmail,
        //     userRole: ????,
        })
        navigate('../ProjectsPage')
    }

    function logout() {
        console.log("UITgelogd");
        toggleIsAuth({
            isAuth: false,
            userEmail: '',
            userRole: '',
        });
        navigate('/');
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        userEmail: isAuth.userEmail,
        userRole: isAuth.userRole,
        login: login,
        logout: logout,

    }

    return (

            <AuthContext.Provider value={contextData}>
            {children}
            </AuthContext.Provider>
        );


}