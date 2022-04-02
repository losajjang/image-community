import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";
import { Grid, Image, Text } from "../elements/Index";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src}></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
        <div>user profile/user name/insert dt</div>
        <div>contents</div>
        <div>image</div>
        <div>comment cnt</div>
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
};

export default Post;
