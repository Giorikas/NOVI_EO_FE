import {createContext, useState} from "react";

export const HeaderTitleContext = createContext({});

export default function HeaderTitleContextProvider({children}){

    const [headerTitle, setHeaderTitle] = useState({
        headerTitle: '',
        projectName:'',
        roadName:'',
        crossSectionName:'',
        crossSectionPartName:'',
    });

    function setHeaderStaticPage(pageName) {
        setHeaderTitle({
           headerTitle:  pageName
        });
    }

    const contextData = {
        headerTitle : headerTitle.headerTitle,
        projectName: headerTitle.projectName,
        roadName: headerTitle.roadName,
        crossSectionName: headerTitle.crossSectionName,
        crossSectionPartName: headerTitle.crossSectionPartName,
        setHeaderStaticPage: setHeaderStaticPage,
    }


    return (

        <HeaderTitleContext.Provider value = {contextData}>
            {children}
        </HeaderTitleContext.Provider>

    );


}