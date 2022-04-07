import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Image, Text, Button } from "../elements/Index";
import { actionCreators as postActions } from "../redux/modules/post";

import { history } from "../redux/configureStore";

const Post = (props) => {
  const dispatch = useDispatch();
  const deletePost = () => {
    dispatch(postActions.deletePostFB(props.id));
  };
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정이오
              </Button>
            )}
            {props.is_me && (
              <Button width="auto" padding="4px" margin="4px" _onClick={deletePost}>
                삭제요
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url}></Image>
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개요
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "jmp",
    user_profile: "https://jmpimages.s3.ap-northeast-2.amazonaws.com/IMG_4667.JPG",
  },
  image_url: "https://jmpimages.s3.ap-northeast-2.amazonaws.com/IMG_4667.JPG",
  contents: "괌에서 자기랑",
  comment_cnt: 10,
  insert_dt: "2022-04-01 23:43:00",
  is_me: false,
};

export default Post;
