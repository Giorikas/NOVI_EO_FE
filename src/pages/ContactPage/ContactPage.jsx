import '../../index.css'
import './ContactPage.css';
import {useContext, useEffect, useState} from "react";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";

// import chkSamePasswords from "../../helpers/chkSamePasswords.js";
export default function ContactPage()

{
    const [headerText, setHeaderText] = useState("Contact")
    const {setHeaderStaticPage} = useContext(HeaderTitleContext)

    useEffect(()=> {
        setHeaderStaticPage(headerText)
    },[])


    return (
        <>
            <div className="contact-inline">
            <fieldset>
                <legend>Email en telefoon</legend>
                <p>
                    <b>vapp@vapp.nl</b> <br/>
                    <b>+31 (0)30 5 310 310</b>
                </p>
            </fieldset>
            <fieldset>
                <legend>Adressgegevens</legend>
                <p>
                    JHx engineering solutions <br/>
                    ABC-Straat 123 <br/>
                    3500 AB  Utrecht <br/>
                </p>
            </fieldset>
            </div>
        </>
    );
}

