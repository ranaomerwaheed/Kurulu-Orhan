// api/fb-videos.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { album } = req.query; // playlist/album ID
  const accessToken = process.env.FB_PAGE_TOKEN;

  try {
    const fbRes = await fetch(
      `https://graph.facebook.com/v21.0/${album}/videos?fields=id,title,permalink_url,created_time&access_token=${accessToken}`
    );
    const data = await fbRes.json();

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.status(200).json(
      data.data.map((v) => ({
        id: v.id,
        title: v.title,
        permalink_url: v.permalink_url,
        created_time: v.created_time,
      }))
    );
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}
