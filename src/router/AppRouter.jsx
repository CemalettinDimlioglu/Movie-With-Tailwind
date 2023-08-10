import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./../pages/Login";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRoute from "./PrivateRoute";
import Favorites from "../pages/Favorites";
//Routes yerine switch //
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRoute />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
        <Route path="/favorites" element={<PrivateRoute />}>
          <Route path="" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRouter;
