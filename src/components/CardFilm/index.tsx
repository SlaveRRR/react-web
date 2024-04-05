import React, { FC } from "react";
import { IFilm } from "../../types/films";
import { Image } from "antd";
import { Card, Meta } from "./styles";

interface ICardFilmProps {
   film: IFilm;
   testid: string;
}

const CardFilm: FC<ICardFilmProps> = ({ film: { name, poster, shortDescription }, testid }) => {
   return (
      <Card
         hoverable
         data-testid={testid}
         cover={
            <Image
               src={poster.previewUrl}
               style={{
                  width: "100%",
                  objectFit: "cover",
               }}
               alt="poster"
            />
         }
      >
         <Meta title={name} description={shortDescription} />
      </Card>
   );
};

export default CardFilm;
