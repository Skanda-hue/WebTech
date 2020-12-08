import React, { useEffect, useContext, useState } from "react";
import { Center, Form, H1, WrappReg, Input, Button } from "./styles";
import Error from "../components/Error";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Register(props) {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const history = useHistory();

  const handleSubmit = async function (e) {
    // console.log(e.target);
    const user = {
      name,
      email,
      password,
    };

    if (name === "" || email === "" || password === "") {
      seterror("Enter correct details!");
    }
    e.preventDefault();
    // console.log(1);

    console.log(user);
    await axios
      .post("http://localhost:3001/server/register", user)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log("error?!");
        console.log(err);
      });

    // console.log(2);
  };

  return (
    <Center>
      <Form onSubmit={handleSubmit}>
        <H1>Register</H1>
        <div>
          <div>
            <Input
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
              id="name"
              name="name"
              value={name}
              autoComplete="off"
            />
          </div>
          <div>
            <Input
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
              id="email"
              name="email"
              value={email}
              autoComplete="off"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setpassword(e.target.value)}
              id="password"
              name="password"
              value={password}
            />
          </div>
          <br />

          <Button type="submit">Enter</Button>

          {error ? <Error mensaje={error} /> : null}
          <Link to="/Login">Login Here</Link>
        </div>
      </Form>
    </Center>
  );
}
