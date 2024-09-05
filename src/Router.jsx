import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Layout } from "./components/Layout/Index";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Detail } from "./components/Books/Detail";
import BookState from "./contexts/books/BookState";

const Router = () => {
  return (
    <>
      <BookState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/iniciar-sesion" element={<Login />} />
              <Route path="/Detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BookState>
    </>
  );
};

export default Router;
