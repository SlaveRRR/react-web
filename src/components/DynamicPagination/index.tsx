import React, { FC, useEffect, useState } from "react";
import { IFilm, ResponseFilms } from "../../types/films";
import CardFilm from "../CardFilm";
import { Row, Col, Spin } from "antd";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { BlockObserver } from "./styles";



const LIMIT = 12;
const apiUrl = " https://api.kinopoisk.dev/v1.4/";



const DymanicPagination: FC = () => {
  const [films, setFilms] = useState<IFilm[]>([]);

  const [page, setPage] = useState<number>(1);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 1,
  });

 

  const getData = async (page: number, limit: number) => {
    try {
    setIsLoading(true)
      const response = await axios.get<ResponseFilms>(
        `${apiUrl}movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=genres&selectFields=releaseYears&type=movie&sortField=votes.kp&sortType=-1`,
        {
          headers: {
            "X-API-KEY": "Q1KQG8F-X2K4TP2-N3Y4TEM-G0TY6S7",
            "Content-Type": "application/json",
          },
        }
      );

      const {
        data: { docs },
      } = response;
      setFilms(prev => [...prev,...docs])
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };


 

  useEffect(() => {
    getData(page, LIMIT);
  }, [page]);

  useEffect(() => {
     if (inView) { 
        setPage((prev) => prev + 1) 
    }
    }, [inView]);

  return (
    <div className="container">
      <h1>Films</h1>
      <Spin spinning={isLoading} fullscreen/>
      <Row align='top' gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
        {films.map((film) => (
          <Col span={4}>
            <CardFilm film={film}  />
          </Col>
        ))}
      </Row>
     
      {!isLoading && <BlockObserver ref={ref}></BlockObserver>}
    </div>
  );
};

export default DymanicPagination;
