import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerList from './components/CustomerList';
import Search from './components/Search';

function App() {
    const [customers, setCustomers] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    const addCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h1 className="text-center">CRM Application</h1>
            <div className="mt-4">
                <h2>Add New Customer</h2>
                <AddCustomerForm onAddCustomer={addCustomer} />
            </div>
            <div className="mt-5">
                <h2>Customer List</h2>
                <Search searchText={searchText} onSearchChange={setSearchText} />
                <CustomerList customers={filteredCustomers} />
            </div>
        </div>
    );
}

export default App;
