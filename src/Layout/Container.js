import React from "react";
import styled from "styled-components";

const BoxPrincipaleContainer = styled.div`
  width: 100%;
`;

const Container = ({ children }) => (
  <BoxPrincipaleContainer>{children}</BoxPrincipaleContainer>
);

export default Container;
