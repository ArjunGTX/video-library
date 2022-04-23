export const getAccessToken = () => localStorage.getItem("auth");

export const getArray = (length: number) => Array.from(Array(length).keys());

export const getImageUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

export const getVideoUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}/?autoplay=1`;
