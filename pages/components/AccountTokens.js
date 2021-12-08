import React from 'react'
// import { getAccountTokenBalance } from '../utils/eth_api';
import { getAccountTokenTransfers, getAccountTokenHolds } from '../utils/eth_api';
import { AmountOfToken } from './AmountOfToken';

export const AccountTokens = ({tokenAddress = '0xb70ac54e863d8F173e0C0EA9fE2848831bFDfA5B'}) => {
    const tokenArr = getAccountTokenTransfers(tokenAddress)
    console.log(tokenArr)
    const [tokens, setTokens] = React.useState(undefined)

    const getTokenRows = (array) => {
        const tokens = array?.map((token) => ({
            tokenName: token.tokenName,
            tokenAddress: token.contractAddress,
        }))
        const uniqueTokens = [...new Map(tokens.map(v => [v.tokenAddress, v])).values()]

        setTokens(uniqueTokens)
    }

    React.useEffect(() => {
        if(tokenArr === undefined){
            return null
        } else(
            getTokenRows(tokenArr)
        )
    }, [tokenArr])


    return (
        <div>
            Accounts Unique Tokens
            {tokens !== undefined ? (
            <div>
            {tokens?.map((token) => (
                <div> 
                    <div>Token: {token.tokenName}</div>
                    <div>Contract: {token.tokenAddress}</div>
                    <AmountOfToken account={tokenAddress} token={token.tokenAddress} />
                    {/* <div>Amount: {getAccountTokenHolds(tokenAddress, token.tokenAddress)}</div> */}
                </div>
            ))}
            </div>
            ) : <div> no transfers </div> }
        </div>
    )
}
