import React from "react";
import classes from "./Post.module.css";
import Button from "../Button/Button";

const Post = (props) => (
    <article>
        <Button clicked = {props.FullPostClicked} >Open</Button>
        <title>Title</title>
        <p>body</p>
    </article>
);

export default Post;