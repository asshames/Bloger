import React, { Component } from "react";
import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";


class Blog extends Component{
    render() {
        return (
            <div className={classes.Blog}>
                <h1>Here is the list of Post</h1>
                <Post />
            </div>
        );
    };
};

export default Blog;