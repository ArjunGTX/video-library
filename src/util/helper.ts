import { Filter } from "../context";
import { Video } from "../model/type";
import { Constant } from "./constant";

export const getAccessToken = () => localStorage.getItem(Constant.ACCESS_TOKEN);

export const getArray = (length: number) => Array.from(Array(length).keys());

export const getImageUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

export const getVideoUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}/?autoplay=1`;

export const getFilteredVideos = (videos: Video[], filter: Filter): Video[] => {
  if (filter === "latest")
    return [...videos].sort(
      (video1, video2) => video2.createdAt - video1.createdAt
    );
  if (filter === "oldest")
    return [...videos].sort(
      (video1, video2) => video1.createdAt - video2.createdAt
    );
  if (filter === "all") return videos;
  return videos.filter((video) => video.category === filter);
};
