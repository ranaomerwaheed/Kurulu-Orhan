// Example backend proxy for Facebook API
// (Needs Node.js server or Vercel serverless function setup)

import fetch from "node-fetch";

export default async function handler(req, res) {
  const { playlistId } = req.query;
  const ACCESS_TOKEN = process.env.FB_TOKEN; // set in Vercel env

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${playlistId}/videos?fields=title,permalink_url&access_token=${ACCESS_TOKEN}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Facebook videos" });
  }
}
