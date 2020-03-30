import React from "react";

const Person = (props) => {
  return (
    <div>
      <h2 className="title">Hi my name is {props.name} and I'm a {props.job} from {props.city}</h2>
      <p>My favourite colour is {props.colour}!</p>
      <p>I enjoy {props.sing}, {props.read} and spending time with my {props.family} and {props.friends}.</p>
     
     
    </div>
  );
};

export default Person;