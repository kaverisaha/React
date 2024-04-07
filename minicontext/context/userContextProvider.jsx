import React from "React";
import { useState } from "react";
import userContext from "./userContext";

const userContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContextProvider;
