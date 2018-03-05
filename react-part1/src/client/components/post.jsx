import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ postItem }) => (
    <div className="post">
        <Link to={`/author/${postItem.author._id}`}>{postItem.author.userName}</Link>
        <div>{postItem.date}</div>
        <p>{postItem.postText}</p>
        <Link to={`/posts/${postItem._id}`}>></Link>
    </div>
);

export default Post;
