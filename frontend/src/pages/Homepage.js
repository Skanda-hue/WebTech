import React from "react";
import Box from "../components/Boxcomponent";
import Top from "../components/Topcomponent";
import "./Homepage.css";
export default function Homepage() {
  return (
    <div>
      <br />
      <h1 id="heading_for_quiz">Quizzards of Oz.</h1>
      <Top />
      <br />
      <br />
      <h2 id="heading_for_quiz">
        {" "}
        <i>People Who can use this website most likely:</i>
      </h2>
      <Box
        heading="Mobile Addicts "
        content="Take this quiz from your Mobile, gain some knowledge to take back "
        image="Person1.jpg"
      />
      <Box
        heading="Classroom People"
        content=" By adding gamification to education improve your skill in grasping stuff "
        image="Cp1.jpg"
      />
      <Box
        heading="Edutainment"
        content="Are your students retaining your lessons? Find out in real time!"
        image="Ed1.jpg"
      />
      <Box
        heading="Sport Lovers"
        content="Engage during breaks and intermissions to learn more about Sports"
        image="Sp1.jpg"
      />
    </div>
  );
}
