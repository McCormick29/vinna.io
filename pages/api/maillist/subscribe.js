import axios from "axios";
var FormData = require('form-data');

export default async function handler(req, res) {

  // try {
    const form = new FormData();
    const double_opt_in = true;
    const { email } = req.query;
    const headers = {
      'Authorization': `Token ${process.env.REVUE_API_KEY}`,
    };
    const header = `Token ${process.env.REVUE_API_KEY.toString()}`

    form.append('email', email)
    form.append('double_opt_in', 'true')
    form.append('Authorization', header)


    const response = await axios.post(
      `${process.env.REVUE_API_URL}/v2/subscribers`, 
      form, {
        // You need to use `getHeaders()` in Node.js because Axios doesn't
        // automatically set the multipart form boundary in Node.
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Authorization ' + process.env.REVUE_API_KEY
      },     
      }
    );

    console.log(response.data);
    res.status(200).json(response.data);
  // } catch (err) {
  //   res.status(500).json({ error: err });
  // }
}
