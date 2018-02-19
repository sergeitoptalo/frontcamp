import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Post from './post';

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id });
        }
    }

    render() {
        let { author } = this.state;
        return (
            <Post />
        )
    }
}
