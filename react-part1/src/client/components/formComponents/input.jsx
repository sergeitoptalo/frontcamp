import React from 'react';

const Input = ({ label, name, type, onChange, className } = props) => (
    <label>
        {label}
        <input type="text" onChange={onChange} />
    </label>
);

export default Input;
