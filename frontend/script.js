document.addEventListener('DOMContentLoaded', () => {
    const customerForm = document.getElementById('customerForm');
    const customerList = document.getElementById('customerList');
    const searchInput = document.getElementById('search');

    fetch('http://localhost:3000/customers')
        .then(response => response.json())
        .then(data => displayCustomers(data));

    customerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const newCustomer = { name, email };

        fetch('http://localhost:3000/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCustomer),
        })
        .then(response => response.json())
        .then(data => {
            customers.push(data);
            displayCustomers(customers);
            customerForm.reset();
        });
    });

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredCustomers = customers.filter(customer =>
            customer.name.toLowerCase().includes(searchText)
        );
        displayCustomers(filteredCustomers);
    });

    function displayCustomers(customers) {
        customerList.innerHTML = '';
        customers.forEach((customer, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${customer.name} - ${customer.email}`;
            li.dataset.index = index;
            customerList.appendChild(li);
        });
    }
});
