import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Layout } from "./components/Layout/Index";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Detail } from "./components/Books/Detail";
import BookState from "./contexts/books/BookState";
import { AuthRoute } from "./components/Auth/AuthRoute";
import UserState from "./contexts/users/UserState";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./components/Auth/PrivateRoute";

const Router = () => {
  return (
    <UserState>
      <BookState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/perfil" element={<PrivateRoute element={Profile} />} />
              <Route path="/registro" element={<AuthRoute element={Register} />} />
              <Route path="/iniciar-sesion" element={<AuthRoute element={Login} />} />
              <Route index element={<Home />} />
              <Route path="/Detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BookState>
    </UserState>
  );
};

export default Router;
