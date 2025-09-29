import { useEffect, useState } from "react";
import EpisodeCard from "../components/EpisodeCard";

function Season1() {
  const [videos, setVideos] = useState([]);
  const PLAYLIST_ID = "2215601608908478";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`/api/fb-videos?playlistId=${PLAYLIST_ID}`);
        const data = await res.json();
        if (data.data) setVideos(data.data);
      } catch (error) {
        console.error("Error fetching Season 1 videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-4">Kuruluş Orhan - Season 1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <EpisodeCard key={video.id} title={video.title} url={video.permalink_url} />
        ))}
      </div>
    </div>
  );
}

export default Season1;
