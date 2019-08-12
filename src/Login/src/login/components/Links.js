import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  color: rgb(213, 40, 31);
  font-size: 16px;
  margin: 50px 10px 0;
  border-bottom: 1px solid rgb(213, 40, 31);
  cursor: pointer;
  transition: 0.2s color, 0.3s border;

  &:hover {
    color: rgb(213, 40, 31);
    border-bottom: 1px solid rgb(213, 40, 31);
    font-weight: 700;
  }
`;

export default ({ link, children }) => (
  <StyledLink to={link}>{children}</StyledLink>
);
