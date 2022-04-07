import React, { useRef } from "react";
import { Button } from "../elements/Index";
import { storage } from "./firebase";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";

const Upload = () => {
  const fileInput = useRef();
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);

  const selectFile = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.files[0]);

    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
  };

  return (
    <React.Fragment>
      <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading} />
      <Button _onClick={uploadFB}>업로드를 하시오</Button>
    </React.Fragment>
  );
};

export default Upload;
