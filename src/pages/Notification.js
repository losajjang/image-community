import React from "react";
import { Grid, Text, Image } from "../elements/Index";
import Card from "../components/Card";

const Notification = (props) => {
  let noti = [
    { user_name: "aaa", post_id: "post1", image_url: "" },
    { user_name: "aaa", post_id: "post2", image_url: "" },
    { user_name: "aaa", post_id: "post3", image_url: "" },
    { user_name: "aaa", post_id: "post4", image_url: "" },
    { user_name: "aaa", post_id: "post5", image_url: "" },
    { user_name: "aaa", post_id: "post6", image_url: "" },
  ];
  return (
    <React.Fragment>
      <Grid padding="16px" bg="#eff6ff">
        {noti.map((n, idx) => {
          return (
          <Card key={n.post_id} {...n}></Card>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Notification;
