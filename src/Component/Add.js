import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees';
import { v4 as uuid } from 'uuid';

function Add() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    const uniqueId = ids.slice(0, 8);

    const newEmployee = { id: uniqueId, Name: name, Age: age };

    Employees.push(newEmployee);

    history('/');
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Insert Your Name" required onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" placeholder="Insert Your Age" required onChange={(e) => setAge(e.target.value)} />
        </Form.Group>
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
