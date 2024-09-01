import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [prn, setPrn] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailDomain = email.split('@')[1];

    if (emailDomain !== 'sitpune.edu.in') {
      setError('Please use your university email (@sitpune.edu.in).');
      return;
    }

    if (!prn) {
      setError('PRN is required.');
      return;
    }

    // Check user credentials with mock backend
    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();
      const user = users.find(u => u.email === email && u.prn === prn);

      if (user) {
        setError('');
        onLogin(email, prn);
      } else {
        setError('Invalid email or PRN.');
      }
    } catch (err) {
      setError('Failed to authenticate. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>PRN:</label>
          <input
            type="text"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;