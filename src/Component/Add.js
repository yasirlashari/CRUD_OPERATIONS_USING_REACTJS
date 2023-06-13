import React,{useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {v4 as uuid}from  "uuid";
import { Link, useNavigate } from 'react-router-dom';

function Add(){

const [name,setName] = useState("");
const [age,setAge] = useState("");

let history =useNavigate();

    return()
}
export default Add;