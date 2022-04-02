import React from "react";
import classes from "./Post.module.css";
import Button from "../Button/Button";

const Post = (props) => (
    <article className={classes.Post}>
        <Button clicked={props.FullPostClicked}>Open</Button>
        <h1>{props.title}</h1>
        <div>
            <p>{props.body}</p>
        </div>
    </article>
);

export default Post;