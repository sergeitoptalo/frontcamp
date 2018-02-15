import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            posts: [],
            author: null
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id });

            fetch(`/author/${this.props.match.params.id}`, { method: 'GET' })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState({ author: data })
                });
        }
    }

    render() {
        return (
            <div>
                {this.state.author ? 
                this.state.author.posts.map((post, index) => {
                    return (
                        <div key={index}>{post.postText}</div>
                    )
                })
                : (<div>No posts</div>)
            }
                </div>
        )
    }
}
