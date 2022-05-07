import * as api from ".";
import {
  AddLikeResponse,
  CreatePlaylistResponse,
  AddWatchLaterResponse,
  ClearHistoryResponse,
  DeleteHistoryResponse,
  DeleteLikeResponse,
  DeletePlaylistResponse,
  DeleteWatchLaterResponse,
  GetVideoInfoResponse,
  ListHistoryResponse,
  ListLikeResponse,
  ListPlaylistResponse,
  ListVideoResponse,
  ListWatchLaterResponse,
  Video,
  AddHistoryResponse,
  GetPlaylistInfoResponse,
  AddToPlaylistResponse,
  RemoveFromPlaylistResponse,
} from "../type";

export const getVideos = async () =>
  await api.axiosGet<ListVideoResponse>(`/api/videos`, false);

export const getVideoInfo = async (videoId: string) =>
  await api.axiosGet<GetVideoInfoResponse>(
    `/api/user/videos/${videoId}`,
    false
  );

export const getLikes = async () =>
  await api.axiosGet<ListLikeResponse>(`/api/user/likes`, true);

export const addToLikes = async (video: Video) =>
  await api.axiosPost<AddLikeResponse>(`/api/user/likes`, true, video);

export const removeFromLikes = async (videoId: string) =>
  await api.axiosDelete<DeleteLikeResponse>(`/api/user/likes/${videoId}`, true);

export const getWatchLater = async () =>
  await api.axiosGet<ListWatchLaterResponse>(`/api/user/watchlater`, true);

export const addToWatchLater = async (video: Video) =>
  await api.axiosPost<AddWatchLaterResponse>(
    `/api/user/watchlater`,
    true,
    video
  );

export const removeFromWatchLater = async (videoId: string) =>
  await api.axiosDelete<DeleteWatchLaterResponse>(
    `/api/user/watchlater/${videoId}`,
    true
  );

export const getHistory = async () =>
  await api.axiosGet<ListHistoryResponse>(`/api/user/history`, true);

export const addToHistory = async (video: Video) =>
  await api.axiosPost<AddHistoryResponse>(`/api/user/history`, true, video);

export const removeFromHistory = async (videoId: string) =>
  await api.axiosDelete<DeleteHistoryResponse>(
    `/api/user/history/${videoId}`,
    true
  );

export const clearHistory = async () =>
  await api.axiosDelete<ClearHistoryResponse>(`/api/user/history/all`, true);

export const getPlaylist = async () =>
  await api.axiosGet<ListPlaylistResponse>(`/api/user/playlists`, true);

export const getPlaylistInfo = async (playlistId: string) =>
  await api.axiosGet<GetPlaylistInfoResponse>(
    `/api/user/playlists/${playlistId}`,
    true
  );

export const createPlaylist = async (title: string) =>
  await api.axiosPost<CreatePlaylistResponse>(`/api/user/playlists`, true, {
    title,
  });

export const deletePlaylist = async (playlistId: string) =>
  await api.axiosDelete<DeletePlaylistResponse>(
    `/api/user/playlists/${playlistId}`,
    true
  );

export const addToPlaylist = async (playlistId: string, video: Video) =>
  await api.axiosPost<AddToPlaylistResponse>(
    `/api/user/playlists/${playlistId}`,
    true,
    video
  );

export const removeFromPlaylist = async (playlistId: string, videoId: string) =>
  await api.axiosDelete<RemoveFromPlaylistResponse>(
    `/api/user/playlists/${playlistId}/${videoId}`,
    true
  );
