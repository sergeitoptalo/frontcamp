import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import { createPost } from '../api/postApi';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            postText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.params && this.props.location.params.user) {
            this.setState({ author: this.props.location.params.user });
        } else {
            this.setState({ author: JSON.parse(sessionStorage.getItem('user')) });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        createPost(this.state);
    }

    render() {
        return (
            <Fragment>
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
                                        onChange={this.handleChange}>
                                    </textarea>
                                </div>
                                <input type="submit" value="Add" className="btn btn-primary" />
                                <Link to="/" className="btn btn-light ml-1">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
