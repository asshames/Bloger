import React from "react";
import classes from "./Delete.module.css";

const Delete = (props) => <button className={classes.Delete} onClick={props.clicked}>{props.children}</button>;

export default Delete;