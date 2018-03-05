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

    componentDidMount() {

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
                {isAuthenticated ? `` : <Redirect to={{
                    pathname: '/login'
                }} />
                }
                <div className="container">
                    <div className="row justify-content-md-center m-3">
                        <div className="col col-lg-8">
                            <h4 className="mt-3 mb-3">Add post</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <textarea
                                        name="postText"
                                        className="form-control"
                                        rows="8"
                                        value={postText}
                                        onChange={this.handleChange}>
                                    </textarea>
                                </div>
                                <input type="submit" value="Add" className="btn btn-primary" />
                                <Link to="/" className="btn btn-light ml-1">Cancel</Link>
                            </form>
                            {message ?
                                <div className="alert alert-success mt-3" role="alert">
                                    {message}
                                </div>
                                : ``
                            }
                        </div>
                    </div>
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
