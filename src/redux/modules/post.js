import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; //불변성 관리를 위해 사용

import { firestore } from "../../shared/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

//useState() 이것과 비슷.
const initialState = {
  list: [],
};

const initialPost = {
  id: 0,
  user_info: {
    user_name: "jmp",
    user_profile: "https://jmpimages.s3.ap-northeast-2.amazonaws.com/IMG_4667.JPG",
  },
  image_url: "https://jmpimages.s3.ap-northeast-2.amazonaws.com/IMG_4667.JPG",
  contents: "괌에서 자기랑",
  comment_cnt: 10,
  insert_dt: "2022-04-01 23:43:00",
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        //['comment_cnt', 'contents', ...]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return { ...acc, user_info: { ...acc.user_info, [cur]: _post[cur] } };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );
        post_list.push(post);

        // let _post = {
        //   id: doc.id,
        //   ...doc.data(),
        // };
        // let post = {
        //   id: doc.id,
        //   user_info: {
        //     user_name: _post.user_name,
        //     user_profile: _post.user_profile,
        //     user_id: _post.user_id,
        //   },
        //   image_url: _post.image_url,
        //   contents: _post.contents,
        //   comment_cnt: _post.comment_cnt,
        //   insert_dt: _post.insert_dt,
        // };

        // post_list.push(post);
      });
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
};

export { actionCreators };
