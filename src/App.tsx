import { Route, Routes } from "react-router-dom";
import { PageWrapper } from "./components";
import { LandingPage, Login, PageNotFound, SignUp, Videos } from "./pages";
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
            <Videos />
          </PageWrapper>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
