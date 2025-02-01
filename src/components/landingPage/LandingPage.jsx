import { useState } from "react";
import "./landingPage.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function LandingPage(){
    const [index, setindex] = useState(0)
    const changeslider = [
        {
            img: "images/car1.jpg",
            type: "BMW M4",
            desc: "A luxury sports car with powerful performance.",
        },
        {
            img: "images/car2.jpg",
            type: "Koenigsegg Agera",
            desc: "One of the fastest cars with cutting-edge tech.",
        },
        {
            img: "images/car3.jpg",
            type: "Bugatti Divo",
            desc: "An engineering marvel with top-tier stability.",
        },
        {
            img: "images/car4.jpg",
            type: "Ferrari LaFerrari",
            desc: "A hybrid hypercar blending speed and tech.",
        },
        {
            img: "images/car5.jpg",
            type: "Bugatti Chiron",
            desc: "A hypercar with extreme power and luxury.",
        },
    ]
    const singleimage = changeslider[index];

    function previes(){
        setindex(index === 0 ? changeslider.length - 1 : index - 1);
    }

    function next(){
        setindex(index === changeslider.length - 1 ? 0 : index + 1);
    }

    return(
        <div className="landingPage" id="home">
            <div className="slider">
                <img src={singleimage.img} alt="" />
                <h2>{singleimage.type}</h2>
                <p>{singleimage.desc}</p>
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={previes} />
            <ArrowBackIosIcon className="arrow right" onClick={next} />
        </div>
    )
}