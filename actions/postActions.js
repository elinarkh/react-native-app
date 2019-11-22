import * as actionTypes from '../constants/actionTypes';
import * as postApi from '../api/postApi';

export const getPosts = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_POSTS_STARTED
  });

  postApi
    .getPosts()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const posts = JSON.parse(value);
              dispatch({
                type: actionTypes.ACTION_GET_POSTS_SUCCESS,
                posts,
              });
            }
          );
      }
    )
};

export const getPost = (id) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_POSTS_STARTED
  });

  postApi
    .getPost(id)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const post = JSON.parse(value);
              //const post_ = value.json();
              console.log("value " + value)
              console.log("post " + JSON.parse(value))
              dispatch({
                type: actionTypes.ACTION_GET_POSTS_SUCCESS,
                post,
              });
            }
          );
      }
    )
};

