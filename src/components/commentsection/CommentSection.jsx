import './CommentSection.css';
import {useState} from "react";

export default function CommentSection(){

    const [mesage, setMessage] = useState("Vak voor opmerkingen")

    return(<>



        <section className="greeting">
            <hr/>
            <h3> {mesage}</h3>
            <hr/>
        </section>

    </>)
}
