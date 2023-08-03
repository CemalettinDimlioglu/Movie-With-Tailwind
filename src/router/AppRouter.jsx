 import React from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login from "./../pages/Login";
 import Main from "../pages/Main";
 import Navbar from "../components/Navbar";
 import Register from "../pages/Register";
 import MovieDetail from "../pages/MovieDetail";
 //Routes yerine switch //
 const AppRouter = () => {
   return (
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/details/:id" element={<MovieDetail />} />
       </Routes>
     </BrowserRouter>
   );
 };
 export default AppRouter;