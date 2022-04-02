//Login.js

import React from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements/Index";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("아이디입력");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요."
            _onChange={() => {
              console.log("패스워드입력");
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인함");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
