import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, is_center, width, padding, margin, bg, children } = props;

  const styles = {
    is_flex: is_flex,
    is_center: is_center,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };

  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_center: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : "")};
  ${(props) => (props.is_flex ? `display:flex; align-items:center; justify-content:space-between` : "")}
  ${(props) =>
    props.is_center ? `display:flex; flex-direction:column; align-items:center; justify-content:center` : ""}
`;

export default Grid;
