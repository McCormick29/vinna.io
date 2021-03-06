import axios from "axios";

const getUniqueTokens = (array) => {
    const tokens = array?.map((token) => ({
      tokenName: token.tokenName,
      tokenAddress: token.contractAddress,
    }));
    const uniqueTokens = [
      ...new Map(tokens.map((v) => [v.tokenAddress, v])).values(),
    ];
    return uniqueTokens
  };

export default async function handler(req, res) {
    try{
    const { param } = req.query
    const response = await axios.get(`${process.env.ETH_API_URL}?module=account&action=tokentx&address=${param}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${process.env.ETH_API_KEY}`)
    const uniqueTokens = getUniqueTokens(response.data.result)
    res.status(200).json(uniqueTokens)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}