import React, { Component } from "react";
import axios from "axios";

import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import FavoritePost from "../../components/FavoritePost/FavoritePost";

class Blog extends Component{
    state = {
        posts: [],
        postSelectedId: null,
        error: false
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    };

    postSelectedHandler = (id) => {
        this.setState({ postSelectId: id });
    };

    render() {
        let posts = <p style={{ textAlign: "center" }}> Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    clicked={()=>this.postSelectedHandler(post.id)} />
            });
        };
        return (
            <div className={classes.Blog}>
                <h1>Here is the list of Post</h1>
                <div>
                    {posts}
                </div>
                <div>
                    <FullPost id={this.state.postSelectedId}/>
                </div>
                <div>
                    <FavoritePost />
                </div>
            </div>
        );
    };
};

export default Blog;