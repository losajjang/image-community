import React from "react";
import styled from "styled-components";
import { TiPlus } from "react-icons/ti";

const AddButton = (props) => {
  const { _onClick } = props;

  return (
    <React.Fragment>
      <ElAddBtn onClick={_onClick}>
        <Plus />
      </ElAddBtn>
    </React.Fragment>
  );
};

AddButton.defaultProps = {
  _onClick: () => {},
};

const Plus = styled(TiPlus)`
  font-size: 34px;
`;

const ElAddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: slategray;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 25%;
  right: 28%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  ${Plus} {
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    ${Plus} {
      transform: rotate(90deg);
    }
  }
`;

export default AddButton;
