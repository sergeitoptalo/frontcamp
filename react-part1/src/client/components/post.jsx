import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ postItem }) => (
    <div className="post">
        <Link to={`/posts/${postItem._id}`}>{postItem.author.userName}</Link>
        <div>{postItem.date}</div>
        <p>{postItem.postText}</p>
    </div>
);

export default Post;
