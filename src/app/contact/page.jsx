'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';


function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // You can replace this with your desired form submission logic
  };

  return (
    <div className={styles.container}>
      {/* Image */}
      <div className={styles.img}>
        <Image src="/contact.jpg" alt="contact" width={600} height={300} className={styles.image} />
      </div>
      {/* Form */}
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_c}>
            <input
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              className={styles.name}
              onChange={handleInputChange}
              required // Added required attribute for mandatory fields
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className={styles.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Número de Teléfono (opcional)"
              className={styles.number}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Mensaje"
              className={styles.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className={styles.submit}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
