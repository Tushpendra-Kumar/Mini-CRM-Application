import React from 'react';

function CustomerList({ customers }) {
    return (
        <ul className="list-group">
            {customers.map((customer, index) => (
                <li key={index} className="list-group-item">
                    {customer.name} - {customer.email}
                </li>
            ))}
        </ul>
    );
}

export default CustomerList;
