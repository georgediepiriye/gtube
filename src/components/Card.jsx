import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://i.ytimg.com/vi/ADAirrqoxrM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3nNLJdQW0wXcNOH5aA4xSjfEiPQ" />
        <Details>
          <ChannelImage src="https://yt3.ggpht.com/ytc/AMLnZu-ky2nzVZ6Wu1If8A4REH7h894bnLlg-MwX0SeMQQ=s68-c-k-c0x00ffffff-no-rj" />
          <Texts>
            <Title>Main title</Title>
            <ChannelName>George channel</ChannelName>
            <Info>555,00 views - 2days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
