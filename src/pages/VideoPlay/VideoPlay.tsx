import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

const VideoPlay: React.FC = () => {
  const location = useLocation();
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const listId = searchParams.get("list");

        if (listId) {
          let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${listId}&key=AIzaSyDK0C0ZHiM-zoK_X_ClsDKVkduWimXEXmI`;

          if (nextPageToken) {
            url += `&pageToken=${nextPageToken}`;
          }

          const response = await axios.get(url);

          const videosData = response.data.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
          }));

          setVideos((prevVideos) => [...prevVideos, ...videosData]);
          setNextPageToken(response.data.nextPageToken);

          if (!searchParams.has("w") && videosData.length > 0) {
            setSelectedVideo(videosData[0].id);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideos();
  }, [location.search, nextPageToken]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const videoId: string | null = searchParams.get("w");

    if (videoId) {
      setSelectedVideo(videoId);
    } else if (videos.length > 0) {
      setSelectedVideo(videos[0].id);
    }
  }, [location.search, videos]);

  return (
    <div className="flex gap-5 flex-col-reverse lg:flex-row">
      <div className="lg:w-96 w-full">
        <h2 className="mb-5 font-bold text-xl dark:text-slate-50 text-slate-800">Danh sách video</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <Link
                to={{
                  pathname: "/video",
                  search: `?list=${location.search.split("=")[1]}&w=${video.id}`,
                }}
              >
                <div className="flex gap-4 mb-3 dark:text-slate-300 text-slate-800">
                  <div className="size-24 rounded-lg overflow-hidden min-w-24">
                    <img className="size-full object-cover" src={video.thumbnail} alt={video.title} />
                  </div>
                  <p>{video.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-96">
        <h2 className="mb-5 font-bold text-xl dark:text-slate-50 text-slate-800">Video đang chọn</h2>
        {selectedVideo && <iframe className="w-full lg:h-[90vh] h-[400px]" src={`https://www.youtube.com/embed/${selectedVideo}`} frameBorder="0" allowFullScreen title="Selected Video"></iframe>}
      </div>
    </div>
  );
};

export default VideoPlay;
