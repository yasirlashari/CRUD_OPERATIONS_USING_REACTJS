import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees';

function Edit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const history = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem('Name') || '');
    setAge(localStorage.getItem('Age') || '');
    setId(localStorage.getItem('Id') || '');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = Employees.findIndex((e) => e.id === id);

    if (index !== -1) {
      Employees[index].Name = name;
      Employees[index].Age = age;
    }

    history('/');
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Insert Your Name" value={name} required onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" placeholder="Insert Your Age" value={age} required onChange={(e) => setAge(e.target.value)} />
        </Form.Group>
        <Button onClick={handleSubmit} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
