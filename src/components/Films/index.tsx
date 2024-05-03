import React, { FC, useState } from "react";
import { AppstoreFilled, DatabaseFilled } from "@ant-design/icons";
import DymanicPagination from "../DynamicPagination";
import FilmsTable from "../FilmsTable";
import { Switch, Text, Flex } from "./styles";

type TView = "cards" | "table";

const Films: FC = () => {
   const [view, setView] = useState<TView>("cards");
   const toggleView = () => {
      setView((prev) => (prev === "cards" ? "table" : "cards"));
   };
   return (
      <>
         <Flex gap={10}>
            <Text>Вид:</Text>
            <Switch
               title="Вид"
               onChange={() => toggleView()}
               checkedChildren={<DatabaseFilled size={48} />}
               unCheckedChildren={<AppstoreFilled size={48} />}
            />
            <Text>{view === "cards" ? "Карточки" : "Таблица"}</Text>
         </Flex>
         {view === "cards" ? <DymanicPagination /> : <FilmsTable />}
      </>
   );
};
export default Films;
