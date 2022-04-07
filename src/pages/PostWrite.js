import React, { useState } from "react";
import { Grid, Text, Image, Input, Button } from "../elements/Index";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);

  const { history } = props;

  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  if (!is_login) {
    return (
      <Grid is_center padding="16px" margin="100px 0px">
        <Text size="32px" bold>
          이보시오. 방문자양반.
        </Text>
        <Text size="20px" bold>
          로그인을 해야만 글을 쓸 수 있다 하오.
        </Text>
        <Button
          hvBtn="gray"
          bg="dimgray"
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인을 하러 가 보오.
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        <Image shape="rectangle" src={preview ? preview : "https://jmpimages.s3.ap-northeast-2.amazonaws.com/%EC%A0%9C%EB%AA%A9%EC%9D%84+%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-001-2.png"}></Image>
      </Grid>
      <Grid padding="16px">
        <Input _onChange={changeContents} label="게시글 내용" placeholder="게시글 작성" multiLine />
      </Grid>
      <Grid padding="16px">
        <Button text="게시글 작성" hvBtn="gray" bg="dimgray" _onClick={addPost}></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
