import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <img alt="avatar" src={props.avatar_url} className="avatar" />
      <div>
        <div className="user-login">{props.login}</div>
        <div>{props.email}</div>
        <a className="text-bold" href={props.url} target="_blank">
          {props.url}
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
