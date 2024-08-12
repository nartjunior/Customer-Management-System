import React, { useState } from 'react';
import CustomerTable from './Customer/CustomerTable';
import CustomerForm from './Customer/CustomerForm';
import './App.css';

// Utility functions
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

function currentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return currentDate.toLocaleDateString('en-US', options);
}

function App() {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const addCustomer = (customer) => {
    if (currentCustomer) {
      setCustomers(customers.map((c) => (c.id === currentCustomer.id ? customer : c)));
      setCurrentCustomer(null);
    } else {
      setCustomers([...customers, { ...customer, id: uuidv4(), addedOn: currentDate() }]);
    }
  };

  const editCustomer = (customer) => {
    setCurrentCustomer(customer);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="App">
      <h1>CRM - Customer Management</h1>
      <CustomerTable customers={customers} onEdit={editCustomer} onDelete={deleteCustomer} />
      <CustomerForm onAddCustomer={addCustomer} currentCustomer={currentCustomer} />
    </div>
  );
}

export default App;
