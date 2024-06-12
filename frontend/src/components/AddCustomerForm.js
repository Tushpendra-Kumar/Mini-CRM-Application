import React, { useState } from 'react';
import axios from 'axios';

function AddCustomerForm({ onAddCustomer }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = { name, email };
        axios.post('http://localhost:3000/customers', newCustomer)
            .then(response => {
                onAddCustomer(response.data);
                setName('');
                setEmail('');
            })
            .catch(error => console.error('Error adding customer:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Customer</button>
        </form>
    );
}

export default AddCustomerForm;
