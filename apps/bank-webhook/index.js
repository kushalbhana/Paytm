import express from "express";

const app = express();

app.get("/hdfcwebhook", (req, res) => {
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,

  }
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});