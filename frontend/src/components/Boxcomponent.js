import React from "react";
import ReactDOM from "react-dom";

class Box extends React.Component {
  render() {
    return (
      <div id="box">
        <img id="im1" src={this.props.image}></img>
        <h2 id="heading">
          <b>{this.props.heading}</b>
        </h2>
        <p id="content">
          <b>{this.props.content}</b>
        </p>
      </div>
    );
  }
}

export default Box;
