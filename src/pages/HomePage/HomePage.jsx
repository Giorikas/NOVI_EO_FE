import '../../index.css'
import DWP from "../../assets/LandingPageImg.jpg";
import Header from "../../components/header/Header.jsx";

function HomePage() {
    Header.setHeaderTitle = "Homepage"

    return (
        <>
            <div>
                <img className="logo"  src={DWP}/>

                    <h3><span className="material-symbols-outlined">&#xE163;</span></h3>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam aliquid animi assumenda atque blanditiis dicta dolorem eius eligendi eos error esse exercitationem fugiat fugit illo illum impedit in incidunt inventore iste laboriosam, maxime mollitia nesciunt nisi non numquam optio quam recusandae repellat reprehenderit, sequi soluta vero vitae voluptas voluptates voluptatum? Ab consequatur corporis magnam odit officia quisquam veniam. Distinctio, et fuga inventore necessitatibus repellat repellendus veritatis voluptate? Accusantium aliquid, cumque cupiditate eaque fugiat impedit iste, libero maxime nesciunt officia officiis optio quaerat temporibus veritatis voluptatibus. Aperiam autem illo iste laborum modi odit possimus, reprehenderit sint ut veniam voluptatem.
                </p>
            </div>
        </>
    )
}

export default HomePage
