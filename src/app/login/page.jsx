'use client';
import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';
import { handlesesion } from '@/components/navigation/links/Links';
import styles from './login.module.css';

async function registerUser(credentials) {
  return fetch('/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Page() {
  const router = useRouter();



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
    registerUser(form)
      .then(data => {
        setdata(data);
        console.log(data.message);
        if (data.message === 'User logged') {
          // Assuming data.user contains the user data
          localStorage.setItem('loggedInUser', JSON.stringify(form));
        }
        router.push('/');

      }
      )
  };


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="head">
          <div>
            <h2>{data ? (<p className={styles.error}>{data.message}</p>): <p className={styles.success}>Logged</p>}</h2>
          </div>
          <h2>Login ✉</h2>
        </div>
        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleChange} />
        </div>
        <input type="submit" value={'Login'} />
        <div className="error">
        <div className={styles.liq}>
        <p>you are not registered?</p> <a href="/register">Register</a>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Page;