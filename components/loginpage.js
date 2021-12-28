import React from "react";

const Loginpage = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to the Login page</h1>
      <form
        onSubmit={(e) => handleSubmit(e, email, password)}
        style={{
          // border: "2px solid orange",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            // border: "2px solid red",
            margin: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            columnGap: "1rem",
            padding: "1px 6px",
          }}
        >
          <label id="email" style={{ fontSize: "2rem" }}>
            Enter your Email Id
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontSize: "1.2rem", padding: "3px" }}
          />
        </div>
        <div
          style={{
            // border: "2px solid blue",
            margin: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            padding: "2px 8px",
            columnGap: "2rem",
          }}
        >
          <label id="password" style={{ fontSize: "1.5rem" }}>
            Enter Your Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "1.5rem", padding: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            border: "none",
            backgroundColor: "red",
            fontSize: "1.8rem",
            padding: "1rem 3rem",
            color: "purple",
            borderRadius: "1rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
