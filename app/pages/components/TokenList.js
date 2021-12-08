import React from "react";
import { getAccountTokenTransfers } from "../utils/eth_api";
import { AmountOfToken } from "./AmountOfToken";
import { css } from "@emotion/css";

export const AccountTokens = ({
  tokenAddress = "0xb70ac54e863d8F173e0C0EA9fE2848831bFDfA5B",
}) => {
  const tokenArr = getAccountTokenTransfers(tokenAddress);
  const [tokens, setTokens] = React.useState(undefined);

  const getTokenRows = (array) => {
    const tokens = array?.map((token) => ({
      tokenName: token.tokenName,
      tokenAddress: token.contractAddress,
    }));
    const uniqueTokens = [
      ...new Map(tokens.map((v) => [v.tokenAddress, v])).values(),
    ];

    setTokens(uniqueTokens);
  };

  React.useEffect(() => {
    if (tokenArr === undefined) {
      return null;
    } else getTokenRows(tokenArr);
  }, [tokenArr]);

  const getStyles = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    "& > .account-info-contianer": {},
    "& > .token-container": {
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
    },
  });

  return (
    <div className={getStyles}>
      {tokens !== undefined ? (
        <div>
          {tokens?.map((token) => (
            <div className="token-container" key={token.tokenAddress}>
              <AmountOfToken
                account={tokenAddress}
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
