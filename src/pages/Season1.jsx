import { useEffect, useState } from "react";

function Season1() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(`/api/fb-videos?album=${import.meta.env.VITE_SEASON1_ALBUM_ID}`);
      const data = await res.json();
      setVideos(data);
    }
    fetchVideos();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Kuruluş Orhan - Season 1</h2>
      <div className="grid gap-6">
        {videos.map((video) => (
          <div key={video.id} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{video.title}</h3>
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.permalink_url)}`}
              width="100%"
              height="400"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Season1;
