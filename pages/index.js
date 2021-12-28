import React, { useEffect, useState } from "react";
import axios from "axios";
import Loginpage from "../components/loginpage";
import User from "../components/user";
import Dashboard from "../containers/dashboard";

const Home = () => {
  const loginurl =
    "https://identity-qa.schooglink.com/version1.0/auth/loginuser/ ";

  const profileurl =
    "https://identity-qa.schooglink.com/version1.0/auth/getprofile/ ";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [codename, setCodeName] = useState("");
  const [user, setUser] = useState({});

  //Function to fetch profile of user after logged in
  const getProfile = (token, codename) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      Token: token,
      CodeName: codename,
      IpAddress: "127.0.0.1",
    };
    axios
      .post(profileurl, data, {
        headers: headers,
      })
      .then((response) => {
        const data = response.data[0];
        console.log(response.data[0]);
        const { EmailId, CodeName } = data;
        setUser({ EmailId, CodeName });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Function to fetch User information
  const fetchUser = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      EmailId: email,
      Password: password,
      IpAddress: "127.0.0.1",
    };
    axios
      .post(loginurl, data, {
        headers: headers,
      })
      .then((response) => {
        const data = response.data[0];
        console.log(response.data[0]);
        setToken(data.Token);
        setCodeName(data.CodeName);
        getProfile(token, codename);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    fetchUser(email, password);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: "80%",
        maxWidth: "1170px",
        minHeight: "100vh",
        // border: "2px solid red",
      }}
    >
      {Object.keys(user).length === 0 ? (
        <Loginpage
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        // <User user={user} />
        <Dashboard token={token} codename={codename} />
      )}
    </div>
  );
};

export default Home;
