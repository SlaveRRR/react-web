import React, { FC } from "react";
import NavBar from "./components/NavBar";
import MainRouter from "./app/routing";
import ConfigProvider from "./providers/configProvider";

const App: FC = () => {
   return (
      <ConfigProvider>
         <NavBar />
         <MainRouter />
      </ConfigProvider>
   );
};
export default App;
