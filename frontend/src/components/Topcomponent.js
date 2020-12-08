import React from "react";
import ReactDOM from "react-dom";
class Top extends React.Component {
  render() {
    return (
      <div id="seen">
        <img
          id="animation-1"
          src="https://myquizhub-waveaccess.netdna-ssl.com/app/images/home/animation.gif?ver=4.0.202011021.15"
        ></img>
        <div id="contentseen">
          <p>
            {" "}
            <b>Hey You</b>
          </p>
          <p>
            <b>
              Do You wanna know how smart you are? How knowledgable you are?
            </b>
          </p>
          <p>
            <b>Then you've come to the right place!</b>
          </p>

          <br />
        </div>
        <div id="buttonforlink">
          <a href="/Login">
            <button className="toQuiz">
              <b>
                <i>
                  <u>Take Quiz Now!</u>
                </i>
              </b>
            </button>
          </a>
        </div>
        <br />
      </div>
    );
  }
}

export default Top;
