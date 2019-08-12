import React from "react";
import EmailInput from "./components/Inputs/Input";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import RequestPasswordButton from "./components/Buttons/Button";
import Link from "./components/Links";

//import redux module
import { connect } from "react-redux";

const ForgotpasswordForm = styled(Flex)`
  width: 100%;
`;

const InputContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #6ace1e;
  margin-bottom: 35px;
  margin-top: ${props => props.top};
`;

const Forgotpassword = ({ Email, dispatch }) => (
  <ForgotpasswordForm>
    <InputContainer>
      <EmailInput 
        type="email" 
        value={Email} 
        placeholder="Email" 
        onChange={e=>dispatch({type: "TYPING_EMAIL", value : e.target.Email})}
        material />
    </InputContainer>
    <RequestPasswordButton
      text={"Envoyer mot de passe"}
      bgColor={"#374960"}
      borderColor={"#374960"}
      rounded
    />
    <Link link="/member">Connecter</Link>
    <Link link="/member/signup">S'Enregistrer</Link>
  </ForgotpasswordForm>
);

//redux connection with component
const mapToProps = state => ({
  Email: state.signup.email,
});
export default connect(mapToProps)(Forgotpassword);
