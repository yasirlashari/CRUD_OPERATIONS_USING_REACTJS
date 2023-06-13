import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import { Link, useNavigate } from 'react-router-dom';
//import { Button } from 'react-bootstrap';


function Home(){
let history =useNavigate();

    const handleDelete =(id) =>{
    var index =Employee.map(function(e){
        return e.id
    }).indexOf(id);

    
    Employee.splice(index, 1);

    history('/');
}
    return(
<Fragment>
    <div style={{margin:"10rem"}}>
        <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                <th>Actions</th>
                </tr>

            </thead>
            <tbody>
                {
                    Employee && Employee.length > 0
                    ?
                    Employee.map((item)=>{
                        return(
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.Age}
                            </td>
                            <td>
                                <Link to={'/edit'}>
                        <Button onClick={()=>alert(item.id)}>Edit</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                        </td>
                        </tr>
                        )
                    })
                    :
                    "No Reacord Available"
                }
            </tbody>
        </Table>
        <br>
        </br>
        <Link className="d-grid gap-2" to="/create">
        <Button size="lg">Create</Button>
      </Link>

    </div>
</Fragment>
    )
}

export default Home;