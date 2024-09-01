const express = require("express");
const URL = require("./models/url");
const { connect } = require("./connection");
const URLRoute = require("./routes/url");

const app = express();

require("dotenv").config();

const env = process.env;

const PORT = env.PORT || 3000;
// const URI = env.MONGO_URI;

connect();

app.use(express.json());

app.use("/url", URLRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const url = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true } // Return the updated document
    );

    if (!url) {
      return res.status(404).send("Short ID not found.");
    }

    res.redirect(url.redirectUrl);
  } catch (error) {
    console.error("Error updating visit history:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
