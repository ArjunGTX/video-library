import { Route, Routes } from "react-router-dom";
import { PageWrapper } from "./components";
import {
  LandingPage,
  LikedList,
  Login,
  PageNotFound,
  SignUp,
  VideoDetails,
  VideoList,
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
