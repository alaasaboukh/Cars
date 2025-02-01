import "./about.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
      <div className="top">
        <p>HOW ITS WORK</p>
        <h1>Rent with 3 Easy Steps</h1>
      </div>
      <div className="bottom">
        <div className="steps">
          <div className="icons">
            <LocationOnIcon className="icon" />
          </div>
          <h3>Choose A Location</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consecteturLorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="steps">
          <div className="icons">
            <DirectionsCarIcon className="icon" />
          </div>
          <h3>Pick-Up Date</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consecteturLorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="steps">
          <div className="icons">
            <EventIcon className="icon" />
          </div>
          <h3>Book A Car</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consecteturLorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
