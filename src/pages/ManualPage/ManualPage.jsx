import '../../index.css'
import DWP from "../../assets/LandingPageImg.jpg";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";
import {useContext, useEffect, useState} from "react";

export default function ManualPage() {

    const {setHeaderStaticPage} = useContext(HeaderTitleContext)
    useEffect(()=> {
        setHeaderStaticPage("Handleiding VAPP")
    },[])


    return (
        <>
            <section>
                <h3>Handleiding</h3>

                <p>
                   Hier een uitgebreide pagina met tekst, afbeeldingen en links
                </p>
            </section>
        </>
    )
}


