import { HiHome } from "react-icons/hi";
import {
  MdOutlineExplore,
  MdHistory,
  MdVideoLibrary,
  MdWatchLater,
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
}

export const SIDE_NAV_ITEMS = [
  {
    item: "Home",
    icon: HiHome,
    path: Path.HOME,
  },
  {
    item: "Explore",
    icon: MdOutlineExplore,
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
