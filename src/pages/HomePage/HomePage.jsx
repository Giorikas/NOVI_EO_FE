import '../../index.css'
import DWP from "../../assets/LandingPageImg.jpg";
import {HeaderTitleContext} from "../../context/HeaderTitleContext.jsx";
import {useContext, useEffect, useState} from "react";

function HomePage() {

    const {setHeaderStaticPage} = useContext(HeaderTitleContext)
    useEffect(()=> {
        setHeaderStaticPage("Veel plezier met VAPP")
    },[])


    return (
        <>
            <section>
                <h3>Lorem ipsum dolor</h3>
                <img className="logo"  src={DWP}/>

                <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam aliquid animi assumenda atque blanditiis dicta dolorem eius eligendi eos error esse exercitationem fugiat fugit illo illum impedit in incidunt inventore iste laboriosam, maxime mollitia nesciunt nisi non numquam optio quam recusandae repellat reprehenderit, sequi soluta vero vitae voluptas voluptates voluptatum? Ab consequatur corporis magnam odit officia quisquam veniam. Distinctio, et fuga inventore necessitatibus repellat repellendus veritatis voluptate? Accusantium aliquid, cumque cupiditate eaque fugiat impedit iste, libero maxime nesciunt officia officiis optio quaerat temporibus veritatis voluptatibus. Aperiam autem illo iste laborum modi odit possimus, reprehenderit sint ut veniam voluptatem.
                </p>
            </section>
        </>
    )
}

export default HomePage
