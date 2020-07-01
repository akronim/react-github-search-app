import React, { Component, useState, useEffect } from "react";

const Button = ({ handleClick, label, type }) => {
  const onClick = () => {
    if (handleClick) handleClick();
  };
  return (
    <button className="btn" onClick={onClick} type={type}>
      {label}
    </button>
  );
};

const Form = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props._onSubmit(username);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
        className="input"
      />
      <Button type="submit" label="Search"></Button>
    </form>
  );
};

export default Form;
