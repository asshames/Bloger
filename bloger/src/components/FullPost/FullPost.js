import React, {Component} from "react";
import Button from "../Button/Button";
import classes from "./FullPost.module.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    });
            };
        };
    };

    postDeleteHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    };

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <Spinner />;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Delete">
                        <Button className="Delete" onClick={this.postDeleteHandler}>Delete</Button>
                    </div>
                    <div className="Edit">
                        <Button className="Favorite" onClick={this.postDeleteHandler}>Favorite</Button>
                    </div>
                </div>
            );
        };
        return post;
    };
};

export default FullPost;