import React, { FC } from "react";
import NavBar from "./components/NavBar";
import MainRouter from "./app/routing";
import ConfigProvider from "./providers/configProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

const App: FC = () => {
   return (
      <QueryClientProvider client={client}>
         <ConfigProvider>
            <NavBar />
            <MainRouter />
         </ConfigProvider>
      </QueryClientProvider>
   );
};
export default App;
