import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

interface Video {
  position: number;
  id: string;
  title: string;
  thumbnail: string;
}

const VideoPlay: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const listId = searchParams.get("list");
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchVideos = async (token: string | null = null) => {
    setIsLoading(true); // Set loading to true when fetching new videos
    if (listId) {
      let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${listId}&key=AIzaSyDK0C0ZHiM-zoK_X_ClsDKVkduWimXEXmI`;

      if (token) {
        url += `&pageToken=${token}`;
      }

      try {
        const response = await axios.get(url);
        const videosData = response.data.items.map((item: any, index: number) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          position: index,
          thumbnail: item.snippet.thumbnails.default.url,
        }));

        setVideos((prevVideos) => [...prevVideos, ...videosData]);
        setNextPageToken(response.data.nextPageToken);
        setIsLoading(false); // Set loading to false after fetching new videos
        if (!searchParams.has("w") && videosData.length > 0) {
          setSelectedVideo(videosData[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false if there's an error
      }
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [listId]);

  useEffect(() => {
    const videoId: string | null = searchParams.get("w");

    if (videoId) {
      setSelectedVideo(videoId);
    } else if (videos.length > 0) {
      setSelectedVideo(videos[0].id);
    }
  }, [searchParams, videos]);

  const handleLoadAll = async () => {
    setIsLoading(true);
    let token = nextPageToken;
    while (token) {
      await fetchVideos(token);
      token = nextPageToken;
    }
    setIsLoading(false);
  };

  return (
    <div className="flex gap-5 flex-col-reverse lg:flex-row">
      <div className="lg:w-96 w-full">
        <h2 className="mb-5 font-bold text-xl dark:text-slate-50 text-slate-800">Danh sách video</h2>
        <div>
          {videos.map((video, index) => (
            <div key={video.id + index}>
              <Link
                to={{
                  pathname: "/video",
                  search: `?list=${listId}&w=${video.id}`,
                }}
              >
                <div className="flex gap-4 mb-3 dark:text-slate-300 text-slate-800">
                  <div className="size-24 rounded-lg overflow-hidden min-w-24">
                    <img className="size-full object-cover" src={video.thumbnail} alt={video.title} />
                  </div>
                  <p>{video.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {nextPageToken && (
          <button
            onClick={handleLoadAll}
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none text-slate-50 font-semibold h-10 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Tải tất cả"}
          </button>
        )}
      </div>
      <div className="w-full h-96">
        <h2 className="mb-5 font-bold text-xl dark:text-slate-50 text-slate-800">Video đang chọn</h2>
        <div className="w-full lg:h-[80vh] h-[400px] bg-slate-300 dark:bg-slate-600">
          <iframe className="size-full" src={`https://www.youtube.com/embed/${selectedVideo}`} frameBorder="0" allowFullScreen title="Selected Video"></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
