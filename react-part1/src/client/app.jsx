import React from 'react';

import Header from './components/header.jsx';

const App = ({ name }) => (
    <div>
    <Header />
        <h2>{name}</h2>
    </div>
)

export default App;
