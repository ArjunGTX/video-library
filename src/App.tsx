import { Route, Routes } from "react-router-dom";
import { LandingPage, Login, SignUp } from "./pages";
import { Path } from "./util/constant";

export const App = () => {
  return (
    <Routes>
      <Route path={Path.HOME} element={<LandingPage />} />
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.SIGN_UP} element={<SignUp />} />
    </Routes>
  );
};
