import * as api from ".";
import {
  AddHistoryResponse,
  AddLikeResponse,
  AddWatchLaterResponse,
  ClearHistoryResponse,
  DeleteHistoryResponse,
  DeleteLikeResponse,
  DeleteWatchLaterResponse,
  GetVideoInfoResponse,
  ListHistoryResponse,
  ListLikeResponse,
  ListVideoResponse,
  ListWatchLaterResponse,
  Video,
} from "../type";

export const getVideos = async () =>
  await api.axiosGet<ListVideoResponse>(`/api/videos`, false);

export const getVideoInfo = async (videoId: string) =>
  await api.axiosGet<GetVideoInfoResponse>(`/api/videos/${videoId}`, false);

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
