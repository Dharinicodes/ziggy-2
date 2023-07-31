import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "Dummy", location: "Default location" },
    };
    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log("child component did mount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="user-pic" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location} </h2>
      </div>
    );
  }
}

export default User;
