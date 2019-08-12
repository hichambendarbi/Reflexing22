import React from "react";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";
import { ReactComponent as Avatar } from "./ico/logo.svg";
import AvatarContainer from "./components/AvatarContainer";
import Forgopassword from "./Forgotpassword";

import { Route, Switch } from "react-router-dom";

const FormContainer = styled(Box)`
  width: 390px;
  background: #fff;
  padding-bottom: 20px;
  padding-top: 50px;
`;

export default () => (
  <Route path="/member" render={()=>
    <Flex>
      <FormContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <Switch>
        {/**page login */}
        <Route exact path="/member" component={Login} />
        {/**page signup */}
        <Route path="/member/signup" component={Signup} />
        {/**page forgetten */}
        <Route path="/member/forgotpassword" component={Forgopassword} />
        </Switch>
      </FormContainer>
    </Flex>}
  />
);
