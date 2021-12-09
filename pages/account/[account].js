import React, { useContext } from "react";
import { useRouter } from 'next/router';
import { AccountTokens } from "../../components/AccountTokens";
import { AppContext } from "../utils/app_contex";

export default function Account() {
  const router = useRouter()
  const { account } = router.query
  const { setEthAccount } = useContext(AppContext);

  // This is probably overkill but I'm leaving it for the moment
  React.useEffect(() => {
    setEthAccount(account)
  }, [account])


  return (
    <div>
      {account ? 
      <AccountTokens ethAccount={account} /> 
      // will want to add a loading spinner here eventually
      : <div className="text-indigo-50"> loading... </div>
}
    </div>
  );
}
