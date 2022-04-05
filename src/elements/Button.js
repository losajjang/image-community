import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { margin, bg, color, hvBtn, atvBoxSdwBtn, BoxSdwBtn, text, _onClick } = props;

  const styles = {
    margin: margin,
    bg: bg,
    color: color,
    hvBtn: hvBtn,
    atvBoxSdwBtn: atvBoxSdwBtn,
    BoxSdwBtn: BoxSdwBtn,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  margin: false,
  bg: "#C4C4C4",
  color: "white",
  hvBtn: "darkgray",
  atvBoxSdwBtn: "none",
  BoxSdwBtn: "0px 0px 10px 1px lightgray",
};

const ElButton = styled.button`
  :hover {
    background-color: ${(props) => props.hvBtn};
  }
  :active {
    box-shadow: ${(props) => props.atvBoxSdwBtn};
  }
  box-shadow: ${(props) => props.BoxSdwBtn};
  width: 100%;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin:${props.margin}` : "")}
`;

export default Button;
