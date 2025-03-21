// PostCard.jsx
import React from 'react';
import LikeButton from './likebutton';
import '../App.css';

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="post-card">
      <div className="profile-info">
        <img src={post.profileImage} alt={post.username} className="profile-picture" />
        <h3 className="username">{post.username}</h3>
      </div>
      <p className="post-content">{post.content}</p>
      <LikeButton isLiked={post.isLiked} onLikeToggle={() => onLikeToggle(post.id)} />
    </div>
  );
};

export default PostCard;