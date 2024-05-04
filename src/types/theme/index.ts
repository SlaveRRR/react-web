export interface ITheme {
   mode: "light" | "dark";
   Menu: {
      colorBgContainer: "whitesmoke" | "black";
      colorText: "white" | "black";
   };
   Typography: {
      colorText: "white" | "black";
      colorError: "red" | "white";
   };
   Divider: {
      colorSplit: "white" | "rgba(5, 5, 5, 0.06)";
   };
   Statistic: {
      colorText: "white" | "black";
      colorTextDescription: "rgba(0, 0, 0, 0.45)" | "white";
   };
}
