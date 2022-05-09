import { Playlist, Video } from "./video";

export interface Auth {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  userId: string;
}

export interface User {
  id: string;
  _id: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  history: Video[];
  likes: Video[];
  watchlater: Video[];
  playlists: Playlist[];
  updatedAt: string;
}

export interface LoginResponse {
  encodedToken: string;
  foundUser: User;
}

export interface SignUpResponse {
  encodedToken: string;
  createdUser: User;
}
