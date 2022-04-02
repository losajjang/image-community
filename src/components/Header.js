import React from "react";
import { Grid, Button, Text } from "../elements/Index";

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>헬로</Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {
  // btnName: {
  //   home: "Home",
  //   login: "Login",
  //   signup: "SignUp",
  // },
  // titleText: {
  //   loginText: "로그인",
  //   signupText: "회원가입",
  // },
};

export default Header;
