import styled from "styled-components";
import { Box } from "reactflexing";

const Title = styled.span`
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #cb1414;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 70px;
`;
const WelcomeMessage = styled(Box)``;
export default ({ username }) => (
  <WelcomeMessage>
    <Title>Bienvenue {username}</Title>
  </WelcomeMessage>
);
