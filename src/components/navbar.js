import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Image, } from 'react-bootstrap';
import QuadSquadLogo from "../img/QuadSquad 1.png";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import FetchUsername from '../components/FetchUsername'

export default class MyNavbar extends React.Component {
    
    handleLogout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:3000/';
    }

    render() {
        return (
            <div>
                 <BootstrapNavbar bg="light" data-bs-theme="light">
                        <Container>
                        {/* Justera storleken på bilden här */}
                        <Image 
                            src={QuadSquadLogo} 
                            alt="Navbar Logo" 
                            fluid 
                            style={{ maxWidth: 180 }} // Justera detta värde för att ändra storleken på bilden
                        />
                        <BootstrapNavbar.Brand><FetchUsername/></BootstrapNavbar.Brand>
                        <Nav className="me-auto">  
                        </Nav>
                        <Nav>
                        <Button variant="outline-light" onClick={this.handleLogout} style={{ backgroundColor: '#4d7a8c' }}>Logga ut</Button>
                        </Nav>
                    </Container>
                </BootstrapNavbar>
            </div>
        )
    }
}

