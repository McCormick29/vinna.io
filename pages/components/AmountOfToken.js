import React from "react";
import { getAccountTokenHolds } from "../utils/eth_api";
import { css } from "@emotion/css";

export const AmountOfToken = ({ account, token }) => {
  const getStyles = css({
    "& .amount-value": {
      marginLeft: 40,
      color: "purple",
    },
  });
  const value = getAccountTokenHolds(account, token);

  return (
    <div className={getStyles}>
      <span className="amount-value">Amount: {value}</span>
    </div>
  );
};
