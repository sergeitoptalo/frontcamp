import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../api/postApi';

class AddPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: props.authorId,
            postText: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (this.state.message) {
            this.setState({ message: '' })
        }

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        createPost(this.state)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({ message: data, postText: '' });
            })
    }

    render() {
        const { message, postText } = this.state;
        const { isAuthenticated } = this.props;

        return (
            <Fragment>
                {isAuthenticated ? `` : <Redirect to={{ pathname: '/login' }} />}
                <div className="add-post-container">
                    <h4>Add post</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <textarea
                                name="postText"
                                className="form-control"
                                rows="8"
                                value={postText}
                                onChange={this.handleChange}>
                            </textarea>
                        </div>
                        <input type="submit" value="Add" className="button button--primary" />
                        <Link to="/" className="button button--secondary">Cancel</Link>
                    </form>
                    {message ?
                        <div className="alert alert-success" role="alert">
                            {message}
                        </div>
                        : ``
                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.userState.isAuthenticated,
    authorId: state.userState.userId
});

export default connect(mapStateToProps)(AddPostPage);
