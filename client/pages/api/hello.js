// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default function handler(req, res) {
  axios.get("http://localhost:8080/hello")
      .then(function(response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        res.send(error)
      })
}