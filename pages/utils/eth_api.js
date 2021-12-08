import React from 'react'
import axios from "axios";

const getData = (url) => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return { data };
};

export const getAccountTokenTransfers = (account) => {
  const { data } = getData(
    `${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokentx&address=${account}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data?.result;
};

export const getAccountTokenHolds = (account, token) => {
  const { data } = getData(
    `${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokenbalance&contractaddress=${token}&address=${account}&tag=latest&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data?.result;
  console.log(data);
};

export const getMaxSupply = ({ token }) => {
  const { data } = getData(
    `${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokentx&address=${address}&&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data?.result;
};

// might need later, but might delete too
// export const getAccountTokenBalance = (address) => {
//     console.log('address', address)
//     const {data} = useFetch(`${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokenbalance&address=${address}&tag=latest&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
//     console.log(data)
// }
