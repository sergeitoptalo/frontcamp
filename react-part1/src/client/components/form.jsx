import React from 'react';

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
            this.setState({ author: this.props.location.params.user._id });
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
        fetch('/create-post', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea
                            name="postText"
                            className="form-control"
                            rows="5"
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <input type="submit" value="Add" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}
