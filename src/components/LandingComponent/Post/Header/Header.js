import {React, useState} from "react";
// import "./NewPost.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../../images/icon (1).svg";
import Camera from "../../../../images/camera.png";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt=""></img>
            Insta Clone
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
           <Link to="/post/new"> <img src={Camera} alt="logo" /></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>)}