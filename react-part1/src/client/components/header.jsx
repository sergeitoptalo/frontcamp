import React from 'react';
//import { render } from 'react-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-logo">Start Page</div>
                <a href="/add-post">Add post</a>
            </header>
        )
    }
}

