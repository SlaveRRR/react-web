import React, { FC, useContext } from "react";
import { ConfigProvider as AntdProvider } from "antd";
import GlobalStyles from "@/global-styles";
import { ctx } from "../context";

interface ConfigProviderProps {
   children: React.ReactNode;
}

const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
   const { theme } = useContext(ctx);
   return (
      <>
         <AntdProvider
            theme={{
               components: {
                  Menu: {
                     algorithm: true,
                     ...theme.Menu,
                  },
                  Typography: {
                     algorithm: true,
                     ...theme.Typography,
                  },
                  Divider: {
                     algorithm: true,
                     ...theme.Divider,
                  },
                  Statistic: {
                     algorithm: true,

                     ...theme.Statistic,
                  },
                  Avatar: {
                     colorTextPlaceholder: "#636363",
                  },
               },
            }}
         >
            {children}
         </AntdProvider>
         <GlobalStyles mode={theme.mode} />
      </>
   );
};

export default ConfigProvider;
