import React, { FC } from "react";
import { Typography as antdTypography } from "antd";
import styled from "styled-components";
const { Title, Paragraph } = antdTypography;

const Typography = styled(antdTypography)`
   text-align: center;
`;

const Home: FC = () => {
   return (
      <div className="container">
         <Typography>
            <Title>Welcome to Filmix</Title>
            <Paragraph>Online cinema without ads</Paragraph>
         </Typography>
      </div>
   );
};

export default Home;
