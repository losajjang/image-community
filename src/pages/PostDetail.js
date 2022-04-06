import React from "react";
import { Grid, Text, Image } from "../elements/Index";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Post />
      </Grid>
      <Grid>
        <CommentWrite />
      </Grid>
      <Grid>
        <CommentList />
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
