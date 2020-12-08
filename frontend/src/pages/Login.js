import React, { useEffect, useContext, useState } from "react";
import { Center, Form, H1, WrappLogin, Input, Button } from "./styles";
import AuthGlobal from "../context/store/AuthGlobal";
import { loginUser } from "../context/actions/autenticacion.action";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import Main from "./Main";

export default function Login(props) {
  const context = useContext(AuthGlobal);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.history.push("/Main"); //takes u here ater login
    }
    setShowChild(true);
  }, [context.stateUser.isAuthenticated, props.history]);

  const handleSubmit = (e) => {
    const user = {
      email,
      password,
    };
    if (email === "" || password === "") {
      seterror("Enter correct details!");
    } else {
      loginUser(user, context.dispatch, seterror);
    }

    e.preventDefault();
  };

  if (!showChild) {
    return null;
  } else {
    return (
      <div script="">
        <Center>
          <Form onSubmit={handleSubmit}>
            <H1>Login</H1>
            <WrappLogin>
              <Input
                placeholder="Enter User"
                onChange={(e) => setemail(e.target.value)}
                id="email"
                name="email"
                value={email}
                autoComplete="off"
              />
              <Input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setpassword(e.target.value)}
                id="password"
                name="password"
                value={password}
              />
              <br />
              <Button type="submit">Enter</Button>

              {error ? <Error mensaje={error} /> : null}
              <Link to="/Register">Register Here</Link>
            </WrappLogin>
          </Form>
        </Center>
      </div>
    );
  }
}
