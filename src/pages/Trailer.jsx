import { useEffect, useState } from "react";
import EpisodeCard from "../components/EpisodeCard";

function Trailer() {
  const [videos, setVideos] = useState([]);
  const PLAYLIST_ID = "1235879564959837";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`/api/fb-videos?playlistId=${PLAYLIST_ID}`);
        const data = await res.json();
        if (data.data) setVideos(data.data);
      } catch (error) {
        console.error("Error fetching Trailer videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-4">Kuruluş Orhan - Trailers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <EpisodeCard key={video.id} title={video.title} url={video.permalink_url} />
        ))}
      </div>
    </div>
  );
}

export default Trailer;
