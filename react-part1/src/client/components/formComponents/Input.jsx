import React from 'react';

const Input = ({ label, name, type, onChange }) => (
    <label>
        {label}
        <input type={type} name={name} onChange={onChange} className="form-control" />
    </label>
);

export default Input;
