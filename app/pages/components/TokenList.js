import React from "react";
import { getAccountTokenTransfers } from "../utils/eth_api";
import { AmountOfToken } from "./AmountOfToken";
import { css } from "@emotion/css";
import axios from "axios";

export const AccountTokens = ({ ethAccount }) => {
  const [tokens, setTokens] = React.useState(undefined);

  const handleFetchPosts = async () => {
    const postsResponse = await axios(`/api/account/get/${ethAccount}`);
    setTokens(postsResponse.data);
  };

  React.useEffect(() => {
    if (ethAccount !== '') {
      handleFetchPosts();
    } else {
      return null;
    }
  }, [ethAccount]);

  const getStyles = css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    "& > .account-info-contianer": {},
    "& > .token-container": {
      display: "grid",
      gridTemplateRows: "repeat(4, 1fr)",
    },
  });

  return (
    <div className={getStyles}>
      {tokens !== undefined ? (
        <div>
          {tokens?.map((token) => (
            <div className="token-container" key={token.tokenAddress}>
              <AmountOfToken
                account={ethAccount}
                token={token.tokenAddress}
                tokenName={token.tokenName}
              />
            </div>
          ))}
        </div>
      ) : (
        <div> no transfers </div>
      )}
    </div>
  );
};
