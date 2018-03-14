import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPost, createPost, updatePost } from '../api/postApi';

class AddPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: props.authorId,
            postId: null,
            postText: '',
            message: '',
            isEditable: false
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
        if (this.state.isEditable) {
            let { postId, postText } = this.state;
            updatePost({ postId, postText })
            .then(response => response.json())
            .then(data => {
                this.setState({ message: data });
            })
        } else {
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
    }

    componentDidMount() {
        if (this.props.match.path === '/edit/:id') {
            this.setState({ isEditable: true, postId: this.props.match.params.id });
            getPost(this.props.match.params.id)
                .then(response => response.json())
                .then(data => this.setState({ postText: data.postText }));
        };
    }

    render() {
        const { message, postText } = this.state;
        const { isAuthenticated } = this.props;

        return (
            <Fragment>
                {isAuthenticated ? `` : <Redirect to={{ pathname: '/login' }} />}
                <div className="add-post-container">
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
                        <input type="submit" value={this.state.isEditable ? "Update" : "Add"} className="button button--primary" />
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
