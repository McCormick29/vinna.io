import React from 'react'
import { getAccountTokenHolds } from '../utils/eth_api';

export const AmountOfToken = ({account, token}) => {
    console.log(account, token)
const value = getAccountTokenHolds(account, token)
    return (
        <div className='value'>
           Amount: {value}
           <style jsx>{`
        .value {
          margin-left: 40px;
          color: purple;
        }
      `}</style>
        </div>
    )
}

