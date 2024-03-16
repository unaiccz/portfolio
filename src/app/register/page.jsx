'use client';
import React, { useState } from 'react';
import styles from './login.module.css';

//funcion asincrona para rergistrar usuario en /api/auth
async function registerUser(credentials) {
  return fetch('/api/auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
function Page() {
  const [data, setdata] = useState();
  
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    registerUser(form)
      .then(data => {
        setdata(data);
      })
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a una API
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="head">
          <h2>Register ❤</h2>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required onChange={handleChange} />
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleChange} />
        </div>
        <input type="submit" value={'Register'} />
         {/* tsg to show the error */}
        <div className="error">
<div className={styles.error}>
<p>{data && (data.error ? 'This user exists' : 'User registered!!!')}</p>

</div>
        <div className={styles.liq}>
        <p>Are you a current user?</p> <a href="/login">Login</a>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Page;