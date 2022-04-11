import React, {Component} from "react";
import classes from "./FavoritePost.module.css";
import Delete from "../Delete/Delete";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

class FavoritePost extends Component {
    state = {
        favoritePost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.favoritePost || (this.state.favoritePost && this.state.favoritePost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        this.setState({ favoritePost: response.data });
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

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select for adding Favorite Post!</p>;
        if (this.props.id) {
            post = <Spinner />;
        }
        if (this.state.favoritePost) {
            post = (
                <div className={classes.FavoritePost}>
                    <h1>{this.state.favoritePost.title}</h1>
                    <p>{this.state.favoritePost.body}</p>
                    <div className="Edit">
                        <Delete className="Delete" onClick={this.postDeleteHandler}>Delete</Delete>
                    </div>
                </div>
            );;
        };
        return post;
    };
};
export default FavoritePost;