const { nanoid } = require("shortid");

const URL = require("../models/url");
const shortid = require("shortid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "URL is required" });
  }
  const shortId = shortid();
  await URL.create({ shortId, redirectUrl: body.url });

  return res.status(201).json({ shortId });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistoryS,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
