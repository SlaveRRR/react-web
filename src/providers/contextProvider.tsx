import React, { FC, useEffect, useState } from "react";
import { ctx } from "../context";
import { ITheme } from "../types/theme";
import { usersApi } from "@/api/users";

interface ContextProviderProps {
   children: React.ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
   const [isAuth, setIsAuth] = useState<boolean>(false);
   const checkAuth = async () => {
      const response = await usersApi.checkAuth();
      if (response.status === 200) {
         localStorage.setItem("token", response.headers.authorization);
         setIsAuth(true);
      }
   };
   const [theme, setTheme] = useState<ITheme>({
      mode: "light",
      Menu: {
         colorBgContainer: "whitesmoke",
         colorText: "black",
      },
      Typography: {
         colorText: "black",
         colorError: "red",
      },
      Divider: {
         colorSplit: "rgba(5, 5, 5, 0.06)",
      },
      Statistic: {
         colorText: "black",
         colorTextDescription: "rgba(0, 0, 0, 0.45)",
      },
   });
   useEffect(() => {
      if (localStorage.getItem("token")) {
         checkAuth();
      }
   });
   return <ctx.Provider value={{ isAuth, setIsAuth, theme, setTheme }}>{children}</ctx.Provider>;
};

export default ContextProvider;
