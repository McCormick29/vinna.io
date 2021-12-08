import React, { useContext } from "react";
import { AccountTokens } from "./components/AccountTokens";
import { AppContext } from "./utils/app_contex";

export default function Account() {
  const { ethAccount } = useContext(AppContext);

  return (
    <div>
      <AccountTokens account={ethAccount} />
    </div>
  );
}
