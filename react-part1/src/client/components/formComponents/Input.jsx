import React from 'react';

const Input = ({ label, name, type, onChange,id }) => (
    <label>
        {label}
        <input type={type} name={name} id={id} onChange={onChange} className="form-control" />
    </label>
);

export default Input;
