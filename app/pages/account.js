import React, { useContext } from "react";
import { AccountTokens } from "./components/TokenList";
import { AppContext } from "./utils/app_contex";

export default function Account() {
  const { ethAccount } = useContext(AppContext);

  return (
    <div>
    {ethAccount}
      <AccountTokens account={ethAccount} />
    </div>
  );
}
