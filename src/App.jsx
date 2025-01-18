import { useState } from "react";
import "./assets/styles.scss";
import NavBar from "./components/navBar";
import CatModel from "./components/catModel";

import vector2 from "./assets/images/Vector_2.svg";
import vector3 from "./assets/images/Vector_3.svg";
import Button from "./components/button";
import DogModel from "./components/dogModel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-landing-page">
        <NavBar />
        <div className="content-container">
          <div className="home-wrapper">
            <div className="landing-page">
              <div className="landing-page-text">
                Taking <CatModel /> Care <br />
                of Your Little <br />
                Friends
                <img src={vector3} alt="vector3" className="img1"/>
              </div>
              <div className="sub-content">
                Our highly skilled profetional associates love pets as much as
                you do, and we offer a wide range of pet services.
              </div>
              <img src={vector2} alt="vector1" className="img2"/>
            </div>
            <Button
              value={"Book a Schedule"}
              onClick={() => {
                console.log("Clicked");
              }}
              color={"#FF7A49"}
              color2={"#FFFFFF"}
            />
          </div>
          <DogModel />
        </div>
      </div>
    </>
  );
}

export default App;
