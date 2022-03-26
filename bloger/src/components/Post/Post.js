import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <p>Here is the post</p>
        </div>
    );
};

export default Post;