import React, { useReducer } from 'react';
import './Blog.css';

interface BlogPostData {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface State {
  likes: number;
  comments: string[];
  isBookmarked: boolean;
}

interface Action {
  type: string;
  payload?: string;
}

const initialState: State = {
  likes: 0,
  comments: [],
  isBookmarked: false,
};

const actions = {
  incrementLikes: 'INCREMENT_LIKES',
  addComment: 'ADD_COMMENT',
  toggleBookmark: 'TOGGLE_BOOKMARK',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.incrementLikes:
      return { ...state, likes: state.likes + 1 };
    case actions.addComment:
      return { ...state, comments: [...state.comments, action.payload || ''] };
    case actions.toggleBookmark:
      return { ...state, isBookmarked: !state.isBookmarked };
    default:
      return state;
  }
};

const BlogPost: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementLikes = () => {
    dispatch({ type: actions.incrementLikes });
  };

  const addComment = (comment: string) => {
    dispatch({ type: actions.addComment, payload: comment });
  };

  const toggleBookmark = () => {
    dispatch({ type: actions.toggleBookmark });
  };

  return (
    <div className="blog-post-interaction">
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

const Blog: React.FC = () => {
  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      title: 'Welcome to My Blog',
      date: 'October 8, 2024',
      content: 'This is a training post on my blog. Here, I will share my thoughts, projects, and tutorials on web development and more!',
    },
    {
      id: 2,
      title: 'Understanding React',
      date: 'October 1, 2024',
      content: 'React has changed the way we build components of websites. With React, I will dive into creating new components, new blogs, and more.',
    },
    {
      id: 3,
      title: 'Building Responsive Portfolio',
      date: 'September 24, 2024',
      content: 'With React, we can create responsive portfolios that more users can access from various devices. Building responsive designs is crucial. Here’s how you can make your site look great on any screen size.',
    },
    {
      id: 4,
      title: 'New Terms from Today’s Workshop',
      date: 'October 9, 2024',
      content: `Const: Creates constants, which means that once you assign a value to a variable declared with const, you cannot change the reference to a new value later. =>: Arrow function, a shorter syntax for defining functions.`,
    },
    {
      id: 5,
      title: 'How to Create a New React App, Connect VSCode to GitHub, and Deploy to GitHub Pages',
      date: 'October 15, 2024',
      content: `To successfully deploy a React app to GitHub Pages, you need to follow these steps: ... [Truncated for brevity]`,
    },
  ];

  return (
    <div className="blog-container">
      <h1>Salim Saay's Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-content">{post.content}</p>
            <BlogPost /> {/* Adds interaction functionality for each post */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
