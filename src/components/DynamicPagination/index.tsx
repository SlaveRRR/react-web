import React, { FC, useEffect } from "react";
import CardFilm from "../CardFilm";
import { Row, Col, Spin, Empty } from "antd";
import { useInView } from "react-intersection-observer";
import { BlockObserver } from "./styles";
import { useInfiniteQuery } from "@tanstack/react-query";
import { filmsApi } from "@/api/films";

const LIMIT = 12;

const DymanicPagination: FC = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   const { data, isFetching, fetchNextPage } = useInfiniteQuery({
      queryKey: ["films"],
      queryFn: async ({ pageParam }) => {
         const resp = await filmsApi.getFilms(pageParam, LIMIT);
         return { films: resp.docs, page: resp.page };
      },
      getNextPageParam: (lastPage) => lastPage && lastPage.page + 1,
      initialPageParam: 1,
   });

   useEffect(() => {
      if (inView) {
         fetchNextPage();
      }
   }, [inView]);

   return (
      <div className="container">
         <h1>Films</h1>
         <Spin spinning={isFetching} fullscreen />
         {data ? (
            <Row align="top" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
               {data.pages.map((el) =>
                  el?.films.map((film, i) => (
                     <Col key={i} xs={24} sm={12} md={4}>
                        <CardFilm testid={"movies"} film={film} />
                     </Col>
                  )),
               )}
            </Row>
         ) : (
            <Empty />
         )}
         {!isFetching && <BlockObserver data-testid="observer" ref={ref}></BlockObserver>}
      </div>
   );
};

export default DymanicPagination;
