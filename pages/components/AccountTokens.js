import React from 'react'
// import { getAccountTokenBalance } from '../utils/eth_api';
import { getAccountTokenTransfers } from '../utils/eth_api'


export const AccountTokens = ({tokenAddress = '0xb70ac54e863d8F173e0C0EA9fE2848831bFDfA5B'}) => {
    const tokenArr = getAccountTokenTransfers(tokenAddress)
    // const [tokens, setTokens] = React.useState([])
    console.log(tokenArr)

    
    return (
        <div>
            TOKENS
        </div>
    )
}
