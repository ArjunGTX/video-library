import { Route, Routes } from "react-router-dom";
import { PageWrapper } from "./components";
import {
  HistoryList,
  LandingPage,
  LikedList,
  Login,
  PageNotFound,
  Playlists,
  PlaylistInfo,
  SignUp,
  VideoDetails,
  VideoList,
  WatchLaterList,
  Profile,
} from "./pages";
import { Path } from "./util/constant";

export const App = () => {
  return (
    <Routes>
      <Route path={Path.HOME} element={<LandingPage />} />
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.SIGN_UP} element={<SignUp />} />
      <Route
        path={Path.VIDEOS}
        element={
          <PageWrapper>
            <VideoList />
          </PageWrapper>
        }
      />
      <Route
        path={`${Path.VIDEOS}/:videoId`}
        element={
          <PageWrapper>
            <VideoDetails />
          </PageWrapper>
        }
      />
      <Route
        path={Path.LIKES}
        element={
          <PageWrapper requiresAuth>
            <LikedList />
          </PageWrapper>
        }
      />
      <Route
        path={Path.HISTORY}
        element={
          <PageWrapper requiresAuth>
            <HistoryList />
          </PageWrapper>
        }
      />
      <Route
        path={Path.WATCH_LATER}
        element={
          <PageWrapper requiresAuth>
            <WatchLaterList />
          </PageWrapper>
        }
      />
      <Route
        path={Path.PLAYLIST}
        element={
          <PageWrapper requiresAuth>
            <Playlists />
          </PageWrapper>
        }
      />
      <Route
        path={`${Path.PLAYLIST}/:playlistId`}
        element={
          <PageWrapper requiresAuth>
            <PlaylistInfo />
          </PageWrapper>
        }
      />
      <Route
        path={`${Path.PROFILE}`}
        element={
          <PageWrapper requiresAuth>
            <Profile />
          </PageWrapper>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
