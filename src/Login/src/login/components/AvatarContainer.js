import React from "react";
import styled from "styled-components";
import { Box } from "reactflexing";

const LoginAvatar = styled.span`
  display: block;
  width: 180px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`;
const AvatarContainer = styled(Box)``;
export default ({ children }) => (
  <AvatarContainer>
    <LoginAvatar>{children}</LoginAvatar>
  </AvatarContainer>
);
