import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostDetail from "../pages/PostDetail";
import PostWrite from "../pages/PostWrite";
import BaseBorder from "../elements/BaseBorder";
import Search from "./Search";
import Notification from "../pages/Notification"

import Header from "../components/Header";
import { Grid, AddButton } from "../elements/Index";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "./firebase";
import Permit from "./Permit";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  //useEffect는
  //라이프사이클의 componentDidMount, componentDidUpdate를 동시에 수행하는 hooks중 하나.
  //대괄호안에 어떤 값이 있다면 그 값이 업데이트될 때 useEffect안에 있는 함수를 재실행한다.
  //대괄호가 비어있다면 한 번만 실행이 된다. componenetDidMount의 역할만 하게 된다.
  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <BaseBorder margin="auto" width="45vw" minHeight="80vh" maxHeight="100%" boxSdw="0px 0px 1px 1px lightgray">
        <Grid margin="0px 0px 1px 0px">
          <Grid>
            <Header></Header>
            <ConnectedRouter history={history}>
              <Route path="/" exact component={PostList} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/write" exact component={PostWrite} />
              <Route path="/write/:id" exact component={PostWrite} />
              <Route path="/post/:id" exact component={PostDetail} />
              <Route path="/search" exact component={Search} />
              <Route path="/noti" exact component={Notification} />
            </ConnectedRouter>
          </Grid>
          <Permit>
            <AddButton
              _onClick={() => {
                history.push("/write");
              }}
            />
          </Permit>
        </Grid>
      </BaseBorder>
    </React.Fragment>
  );
}

export default App;
