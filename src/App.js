import React from "react";
import "./App.css";
import Person from "./components/Person";
import Pet from "./components/Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <Person name="Lauren" job="Software Developer" colour="purple" city="Manchester" sing="singing" read="reading" family="family" friends="friends"/>
        <Pet pet="cats"/>
      </div>
    );
  }
}

export default App;
