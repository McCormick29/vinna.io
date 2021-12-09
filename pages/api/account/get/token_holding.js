import axios from "axios";

export default async function handler(req, res) {
    try{
    const { account, token } = req.query
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}?module=account&action=tokenbalance&contractaddress=${token}&address=${account}&tag=latest&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = response.data
    //bug where its turning the number into a math eq
    res.status(200).json(data?.result)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}