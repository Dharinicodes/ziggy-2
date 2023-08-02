import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");

    return (
      <div>
        <h1>About Us</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>Logged In User: {loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <h2>
          We are a startup trying to grow as high as swiggy and even beyond them
        </h2>
        <User name={"Akshay Saini"} location={"Dehradun"} />
      </div>
    );
  }
}

export default About;
