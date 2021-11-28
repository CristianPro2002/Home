import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './StylesN.css'
import { useHistory } from 'react-router-dom';


const Navb = () => {

  let History = useHistory();

    return (
      <Navbar className ="Navbar">
        <Container>
          <Navbar.Brand href="#home">
            <Nav className="me-auto">
              <img 
                alt=""
                src="https://lostramites.com.co/wp-content/uploads/logo-sena-fondo-naranja-300x300.jpg"
                width="60"
                height="60"
                className="d-inline-block align-top"
              /> <a href = "/home" className = "SN"><h4 className = "SENA">SENA</h4></a>

              <Button variant="outline-light" onClick = {()=>History.push('/home')} className =  "Binicio">Inicio</Button>{' '}
              <Button variant="outline-light" onClick = {()=>History.push('/Newhome')} className =  "Bperfil">Perfil</Button>{' '}
              <Button variant="outline-light" onClick = {()=>History.push('/Newhome')} className =  "Bconocenos">Conocenos</Button>{' '}
      
            </Nav>
          </Navbar.Brand>
        </Container>
          <img 
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Gobierno_de_la_Rep%C3%BAblica_de_Colombia.svg"
            width = "300"
            height = "50"
            className="d-inline-block align-right"
          />
      </Navbar>
  )
}

export default Navb;
