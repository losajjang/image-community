import React from "react";
import { Grid, Text, Image } from "../elements/Index";

const Card = (props) => {
  const { image_url, user_name, post_id } = props;

  return (
    <Grid padding="16px" is_flex bg="white" margin="8px 0px">
      <Grid width="auto" margin="0px 8px 0px 0px">
        <Image size={75} shape="smallRect" image_url={image_url} />
      </Grid>
      <Grid>
        <Text>
          <b>{user_name}</b> 께서 게시글에 댓글을 남겼다고 하오.
        </Text>
      </Grid>
    </Grid>
  );
};

Card.defaultProps = {
  image_url: "",
  user_name: "",
  post_id: null,
};

export default Card;
