const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;
  try {
    const r = await axios.put("https://api.chatengine.io/users/", {
      username: req.body.username,
      secret: req.body.secret,
      first_name: req.body.username,
    }, {
      headers: { "private-key": "1e6c0d02-8094-42b1-bad5-31a4023a9c93" }
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
