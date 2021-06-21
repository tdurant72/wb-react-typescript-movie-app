import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogogImg } from "./Header.styles";

const Header:React.FC = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="RMDB-logo" />
      </Link>

      <TMDBLogogImg src={TMDBLogo} alt="TMDB-logo" />
    </Content>
  </Wrapper>
);
export default Header;
