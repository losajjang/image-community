import React, { useEffect, useState } from "react";
import { Grid, Button, Text } from "../elements/Index";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux"; //store에 있는 값을 가져와 사용할 수 있게 한다.
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import Permit from "../shared/Permit";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  // useEffect(() => {
  //   let cookie = getCookie("user_id");
  //   // console.log(cookie);

  //   if (cookie) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });

  // if (is_login && is_session) {
  //   return (

  //   );
  // }

  <Permit>
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text
            disp="inline"
            cursor="pointer"
            margin="0px"
            size="24px"
            bold
            _onClick={() => {
              history.push("/");
            }}
          >
            헬로
          </Text>
        </Grid>
        <Grid is_flex>
          <Button margin="5px" color="black" text="내정보"></Button>
          <Button margin="5px" color="black" text="알림"></Button>
          <Button
            margin="5px"
            color="black"
            text="로그아웃"
            _onClick={() => {
              dispatch(userActions.logoutFB());
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  </Permit>;
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text
            margin="0px"
            size="24px"
            bold
            _onClick={() => {
              history.push("/");
            }}
          >
            헬로
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            margin="5px"
            color="black"
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            margin="5px"
            color="black"
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
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
