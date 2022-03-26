import React, { Component } from "react";
import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";

class Blog extends Component{
    render() {
        return (
            <div className={classes.Blog}>
                <h1>Here is the list of Post</h1>
                <Post />
                <FullPost />
            </div>
        );
    };
};

export default Blog;