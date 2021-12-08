import React from "react";
export const AppContext = React.createContext();

export default ({ children }) => {
  const [ethAccount, setEthAccount] = React.useState("");

  const defaultContext = {
    ethAccount,
    setEthAccount,
  };
  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};
