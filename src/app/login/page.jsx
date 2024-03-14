'use client'
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9966, #ff5e62);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.9);
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: border 0.3s ease;
  &:focus {
    border-color: #ff5e62;
  }
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ff5e62;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff9966;
  }
`;

function Page() {
  return (
    <Container>
      <Form>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" placeholder="Username" />
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Password" />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default Page;