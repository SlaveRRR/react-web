import { useContext } from "react";
import { ctx } from "../context";
import { ITheme } from "../types/theme";

type ReturnTheme = ["light" | "dark", () => void];

export const useTheme = (): ReturnTheme => {
   const { theme, setTheme } = useContext(ctx);

   const { mode } = theme;

   const toggleTheme = () => {
      mode === "light"
         ? setTheme({
              ...theme,
              mode: "dark",
              Menu: {
                 colorBgContainer: "black",
                 colorText: "white",
              },
              Typography: {
                 colorText: "white",
                 colorError: "white",
              },
              Divider: {
                 colorSplit: "white",
              },
              Statistic: {
                 colorText: "white",
                 colorTextDescription: "white",
              },
           })
         : setTheme({
              ...theme,
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
   };
   return [mode, toggleTheme];
};
