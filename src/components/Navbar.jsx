import React from "react";
import styled from "styled-components";
import image from "../images/youtube.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  height: 56px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 0px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  gap: 5px;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
`;
const Image = styled.img`
  height: 25px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 5px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  background-color: transparent;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={image} />
          GTube
        </Logo>
        <Search>
          <Input placeholder="Seach" />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
