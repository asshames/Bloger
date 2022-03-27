import React, { Component } from "react";
import axios from "axios";

import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import FavoritePost from "../../components/FavoritePost/FavoritePost";

class Blog extends Component{
    state = {
        posts: [],
        postSelectedId: null
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({ posts: response.data });
            });
    }

    render() {
        return (
            <div className={classes.Blog}>
                <h1>Here is the list of Post</h1>
                <Post />
                <FullPost />
                <FavoritePost />
            </div>
        );
    };
};

export default Blog;