function EpisodeCard({ title, url }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <h2 className="font-semibold mb-2">{title}</h2>
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          url
        )}&show_text=false&width=500`}
        width="100%"
        height="280"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
}

export default EpisodeCard;
