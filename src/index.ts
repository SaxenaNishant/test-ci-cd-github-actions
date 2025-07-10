const express = require('express');
const app = express();

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Welcome to AWS tutorial by Shivam Bhadani");
})

app.get("/health", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Everything is OK");
})

app.listen(8080, () => console.log("Sever is listening on Port 8080"))

