import useFetch from "react-fetch-hook"


export const getAccountTokenTransfers = (address) => {
    const {data} = useFetch(`${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokentx&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    return data?.result
}

export const getMaxSupply = ({token}) => {
    const {data} = useFetch(`${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokentx&address=${address}&&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);

}

// might need later, but might delete too
// export const getAccountTokenBalance = (address) => {
//     console.log('address', address)
//     const {data} = useFetch(`${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokenbalance&address=${address}&tag=latest&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
//     console.log(data)
// }