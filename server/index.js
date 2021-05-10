const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const { urlencoded } = require("express");

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/token", async (req, res) => {
  const urlToken = "https://mp1.iprobonus.com/api/v3/clients/accesstoken";
  const urlData = "https://mp1.iprobonus.com/api/v3/ibonus/generalinfo";

  const preResult = await fetch(urlToken, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "AccessKey": "891cf53c-01fc-4d74-a14c-592668b7a03c",
    },
    body: JSON.stringify(req.body),
  });
  const result = await preResult.json();
  const accessToken = result.accessToken;
  const preData = await fetch(urlData+`/${accessToken}`);
  const data = await preData.json();

  const date = new Date(data.data.dateBurning);
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const newDate = day + '.' + month;
  data.data.dateBurning = newDate;
  
  res.json({fx: data.data});
});

app.listen(8080, console.log("Server started at 8080 port"));
