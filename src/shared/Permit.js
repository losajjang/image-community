import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

//Permit 변수를 만든 이유
//session의 존재와 login여부를 확인하여 어떤 처리를 할 것인지를 구분하기 위해.
const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_session && is_login) {
    return (
    <React.Fragment>{props.children}</React.Fragment>
    );
  }
  return null;
};

export default Permit;
