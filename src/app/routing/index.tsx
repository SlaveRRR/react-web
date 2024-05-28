import React, { FC } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import { FILMS, HOME, PROFILE, NEWS, SIGNIN, SIGNUP } from "./config";
import { FilmsPage, HomePage, NewsPage, ProfilePage, SignInPage, SignUpPage } from "../../pages";

import RequiredAuth from "../../components/RequiredAuth";

const MainRouter: FC = () => {
   const resultPaths: RouteObject[] = [
      { path: HOME, element: <HomePage /> },
      { path: FILMS, element: <FilmsPage /> },
      { path: SIGNIN, element: <SignInPage /> },
      { path: SIGNUP, element: <SignUpPage /> },
      {
         path: PROFILE,
         element: (
            <RequiredAuth>
               <ProfilePage />
            </RequiredAuth>
         ),
      },
      {
         path: NEWS,
         element: (
            <RequiredAuth>
               <NewsPage />
            </RequiredAuth>
         ),
      },
      { path: "*", element: <Navigate to={"/"} replace /> },
   ];

   return useRoutes(resultPaths);
};

export default MainRouter;
