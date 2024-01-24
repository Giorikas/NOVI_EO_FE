import './CustomButton.css';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import navTextChange from "../../helpers/navTextChange.js";


function NavButton({
                       type,
                       children,
                       onClickNav,
                       onClickHeaderTitle,
                       /*   onMouseEnterNavTextChange, */
                       disabled = false,
                       variant = 'primary'
                   }) {

    const [navtext, setNavtext] = useState("")
    const [headerTitle, setHeaderTitle] = useState("Homepage")
    const navigate = useNavigate();

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={
                () => {
                    navigate(`${onClickNav}`);
                    setHeaderTitle(`${onClickHeaderTitle}`);
                }}
            className={variant === 'primary' ? 'button button-primary' : 'button button-invisible'}


            /*
                        onMouseEnter={() => {setNavtext(`${onMouseEnterNavTextChange}`)}}
                        onMouseLeave={() => {setNavtext((`{"t"}`))}}
            */
            >
            {children}
</button>
)
    ;
}

export default NavButton;