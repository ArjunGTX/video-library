import {
  MdHistory,
  MdVideoLibrary,
  MdWatchLater,
  MdExplore,
} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

export enum Path {
  HOME = "/",
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
  VIDEOS = "/videos",
  PLAYLIST = "/playlist",
  HISTORY = "/history",
  WATCH_LATER = "/watch-later",
  LIKES = "/likes",
}

export enum GuestUser {
  EMAIL = "guestuser@email.com",
  PASSWORD = "GuestUser@123",
}

export enum Constant {
  AUTH = "auth",
  ACCESS_TOKEN = "accessToken",
  CLOUDINARY_URL = "https://res.cloudinary.com/helmet-store/image/upload",
  VIDEO_REFRESH_INTERVAL = 2000,
  CATEGORY_REFRESH_INTERVAL = 2000,
  LIKES_REFRESH_INTERVAL = 2000,
  HISTORY_REFRESH_INTERVAL = 2000,
  WATCH_LATER_REFRESH_INTERVAL = 2000,
}

export const SIDE_NAV_ITEMS = [
  {
    item: "Explore",
    icon: MdExplore,
    path: Path.VIDEOS,
  },
  {
    item: "Likes",
    icon: AiFillLike,
    path: Path.LIKES,
  },
  {
    item: "Playlist",
    icon: MdVideoLibrary,
    path: Path.PLAYLIST,
  },
  {
    item: "History",
    icon: MdHistory,
    path: Path.HISTORY,
  },
  {
    item: "Watch Later",
    icon: MdWatchLater,
    path: Path.WATCH_LATER,
  },
];
