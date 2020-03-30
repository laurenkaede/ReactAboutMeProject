import React from "react";
import Bella from "../bella.jpg";
import Daisy from "../daisy.jpg";

const Pet = (props) => {
  return (
    <div>
      <p id="cats">I have two {props.pet}, one called Bella and the other called Daisy.</p>
      <img src={Bella} alt="Bella" /> 
      <img src={Daisy} alt="Daisy" />
    </div>
  );
};

export default Pet;