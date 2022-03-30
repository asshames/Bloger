import React from "react";
import classes from "./Post.module.css";
import Button from "../Button/Button";

const Post = (props) => (
    <article className={classes.Post}>
        <Button clicked = {props.FullPostClicked} >Open</Button>
        <title>{props.title}</title>
        <p>{props.body}</p>
    </article>
);

export default Post;