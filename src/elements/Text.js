import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, cursor, disp, color, size, children, margin, _onClick } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    cursor: cursor,
    disp: disp,
  };

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  _onClick: () => {},
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  cursor: "",
  disp: "",
};

const P = styled.p`
  :hover {
    cursor: ${(props) => props.cursor};
  }
  display: ${(props) => props.disp};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")}
`;

export default Text;
