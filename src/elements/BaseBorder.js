import React from "react";
import styled from "styled-components";

const BaseBorder = (props) => {
  const { children, width, padding, margin, boxSdw, height, minHeight, maxHeight, verticalAlign, top } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    boxSdw: boxSdw,
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    verticalAlign: verticalAlign,
    top: top,
  };

  return (
    <React.Fragment>
      <BaseBox {...styles}>{children}</BaseBox>
    </React.Fragment>
  );
};

BaseBorder.defaultProps = {
  children: null,
  width: "100%",
  padding: false,
  margin: false,
  boxSdw: false,
  height: "100%",
  minHeight: false,
  maxHeight: false,
  verticalAlign: false,
  top: false,
};

const BaseBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight}` : "")};
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight}` : "")};
  top: ${(props) => props.top};
  vertical-align: ${(props) => props.verticalAlign};
  box-sizing: border-box;
  ${(props) => (props.boxSdw ? `box-shadow: ${props.boxSdw}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.is_flex ? `display:flex; align-items:center; justify-content:space-between` : "")}
`;

export default BaseBorder;
