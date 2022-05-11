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
  PROFILE = "/profile",
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
  PLAYLIST_REFRESH_INTERVAL = 2000,
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

export enum ToastSuccess {
  LOGIN = "Login successful",
  SIGN_UP = "Sign up successful",
  LOG_OUT = "User logged out",
  PLAYLIST_CREATE = "Playlist created",
  PLAYLIST_DELETE = "Playlist deleted",
  ADD_TO_PLAYLIST = "Video added to Playlist",
  REMOVE_FROM_PLAYLIST = "Video removed from Playlist ",
  REMOVE_FROM_HISTORY = "Video deleted from History",
  CLEAR_HISTORY = "History cleared",
  ADD_TO_WATCH_LATER = "Video added to Watch later",
  REMOVE_FROM_WATCH_LATER = "Video removed from Watch later",
  LIKE = "Video liked",
  UNLIKE = "Video removed from Likes",
}

export enum ToastError {
  LOGIN = "Login failed, Please try again",
  SIGN_UP = "Sign up failed, Please try again",
  LOG_OUT = "Failed to logout user, PLease try again",
  PLAYLIST_CREATE = "Playlist creation failed, Please try again",
  PLAYLIST_DELETE = "Playlist deletion failed, Please try again",
  ADD_TO_PLAYLIST = "Could not add video to Playlist, Please try again",
  REMOVE_FROM_PLAYLIST = "Could not remove video from Playlist, Please try again",
  REMOVE_FROM_HISTORY = "Could not delete video from History, Please try again",
  CLEAR_HISTORY = "Could not clear History, Please try again",
  ADD_TO_WATCH_LATER = "Could not add video to Watch later, Please try again",
  REMOVE_FROM_WATCH_LATER = "Could not remove video from Watch later, Please try again",
  LIKE = "Could not like video, Please try again",
  UNLIKE = "Could not unlike video, Please try again",
}
