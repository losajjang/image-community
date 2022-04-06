import React from "react";

import { Grid, Input, Button } from "../elements/Index";

const CommentWrite = () => {
  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Input padding="0px" placeholder="댓글 내용을 입력해 주시오." />
        <Button width="80px" margin="0px 2px 0px 2px" hvBtn="gray" bg="dimgray" text="작성하겠소"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
