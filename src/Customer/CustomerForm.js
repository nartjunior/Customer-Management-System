import React, { useState, useEffect } from 'react';

function CustomerForm({ onAddCustomer, currentCustomer }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentCustomer) {
      setName(currentCustomer.name);
      setEmail(currentCustomer.email);
      setPhone(currentCustomer.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [currentCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    onAddCustomer({ name, email, phone, id: currentCustomer ? currentCustomer.id : Date.now() });
    setName('');
    setEmail('');
    setPhone('');
    setError('');
  };

  // Email validation function
  const validateEmail = (email) => {
    // Basic email regex pattern
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentCustomer ? 'Edit Customer' : 'Add Customer'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">{currentCustomer ? 'Update Customer' : 'Add Customer'}</button>
    </form>
  );
}

export default CustomerForm;
  