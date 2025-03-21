import React from 'react';
import '../App.css';

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={post.username} className="profile-img" />
      <div className="post-content">
        <p className="username">@{post.username}</p>
        <p className="content">{post.content}</p>
      </div>
      <button
        className={`like-btn ${post.isLiked ? 'liked' : ''}`}
        onClick={() => onLikeToggle(post.id)}
      >
        ❤️
      </button>
    </div>
  );
};

export default PostCard;
