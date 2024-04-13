const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username, secret } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: secret,
        first_name: username,
      },
      {
        headers: {
          "PRIVATE-KEY": process.env.CHAT_SECRET_KEY || "",
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
/*
d13e0ae7-9e18-4ecf-ba82-f85e39d6d130
a900c3dc-29ff-4915-a69a-aef5369bff53
*/
