import React from 'react';

function CustomerTable({ customers, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Added On</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.addedOn}</td>
            <td>
              <button onClick={() => onEdit(customer)}>Edit</button>
              <button onClick={() => onDelete(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
