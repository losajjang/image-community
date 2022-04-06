// PostList.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "../components/Post";
import post from "../redux/modules/post";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  // console.log(post_list);

  useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  return (
    <React.Fragment>
      {/* <Post /> */}
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
    </React.Fragment>
  );
};

export default PostList;
