//Login.js

import React, { useState } from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements/Index";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    console.log(id);

    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란이오. 확인해 주시오.");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않소.");
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해 주시오."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            type="password"
            label="패스워드"
            placeholder="패스워드를 입력해 주시오."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Button
          hvBtn="gray"
          bg="dimgray"
          text="로그인 하겠소"
          _onClick={() => {
            console.log("로그인함");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
