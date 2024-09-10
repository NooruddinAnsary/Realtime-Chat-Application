import React, { useState } from "react";

//import '../style.css'
import _ from "lodash";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState();
  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
    //localStorage.setItem('avatar', `https://loremflickr.com/320/240/man`)
  };
  return (
    <div className="login_container">
      <div className="login_section">
        <div className="login_title">
          <img className="dpimg" src="/logo.png" alt="" />
          <h1>ChatLight App</h1>
        </div>
        <div className="login_form">
          <input
            type="text"
            placeholder="Enter a Unique Name"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUser();
            }}
          />
          <button onClick={handleUser}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
