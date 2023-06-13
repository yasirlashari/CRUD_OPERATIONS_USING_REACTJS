import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Employees from './Employees';

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
  };

  const handleDelete = (id) => {
    const index = Employees.findIndex((e) => e.id === id);

    if (index !== -1) {
      Employees.splice(index, 1);
    }

    history('/');
  };

  return (
    <Fragment>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees.length > 0 ? (
              Employees.map((item) => (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Link to="/edit">
                      <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                    </Link>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Record Available</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br />
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
