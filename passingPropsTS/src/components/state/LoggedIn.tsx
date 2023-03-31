import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handeLogin = () => {
    setIsLoggedIn(true)
  };
  const handeLogout = () => {
    setIsLoggedIn(false)
  };

  return (
    <>
      <button onClick={handeLogin}>Login</button>
      <button onClick={handeLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </>
  );
};
