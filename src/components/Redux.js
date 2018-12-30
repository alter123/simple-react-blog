import { combineReducers } from "redux";

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        )
    }

export const fetchPost = (url) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com'+url)
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POST,
                payload: posts
            })
        )
    }

// reducer.js
const initialState = {
    items: [],
    item: null
  };

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
        return {
            ...state,
            items: action.payload,
            item: null
        };
        case FETCH_POST:
        return {
            ...state,
            item: action.payload,
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    posts: postReducer,
})