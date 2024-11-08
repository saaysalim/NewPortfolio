import React, { useReducer } from 'react';

const initialState = {
  likes: 0,
  comments: [],
  isBookmarked: false,
};

const actions = {
  incrementLikes: 'INCREMENT_LIKES',
  addComment: 'ADD_COMMENT',
  toggleBookmark: 'TOGGLE_BOOKMARK',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.incrementLikes:
      return { ...state, likes: state.likes + 1 };
    case actions.addComment:
      return { ...state, comments: [...state.comments, action.payload] };
    case actions.toggleBookmark:
      return { ...state, isBookmarked: !state.isBookmarked };
    default:
      return state;
  }
};

const BlogPost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementLikes = () => {
    dispatch({ type: actions.incrementLikes });
  };

  const addComment = (comment) => {
    dispatch({ type: actions.addComment, payload: comment });
  };

  const toggleBookmark = () => {
    dispatch({ type: actions.toggleBookmark });
  };

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Likes: {state.likes}</p>
      <button onClick={incrementLikes}>Like</button>
      
      <div>
        <h3>Comments:</h3>
        <ul>
          {state.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <button onClick={() => addComment('New comment')}>Add Comment</button>
      </div>
      
      <button onClick={toggleBookmark}>
        {state.isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default BlogPost;
