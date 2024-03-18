import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Image, } from 'react-bootstrap';
import QuadSquadLogo from "../img/QuadSquad 1.png";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import FetchUsername from '../components/FetchUsername'

export default class MyNavbar extends React.Component {
    handleLogout = () => { 
    // Ta bort autentiseringsnyckeln från local storage om den finns där
    localStorage.removeItem('authToken');
     // Uppdatera komponentens tillstånd för att indikera att användaren inte längre är inloggad
    this.setState({ isLoggedIn: false });
    // Nollställ eventuella andra tillståndsinformation
    this.setState({ employeID: null, password: null });
    // Navigera till startsidan
    window.location.href = 'http://localhost:3000/';
    }
    render() {
        
        return (
            <div>
                 <BootstrapNavbar bg="dark" variant="dark" className="sticky-top">
                        <Container>
                        {/* Justera storleken på bilden här */}
                        <Image 
                            src={QuadSquadLogo} 
                            alt="Navbar Logo" 
                            fluid 
                            style={{ maxWidth: 180 }} // Justera detta värde för att ändra storleken på bilden
                        />
                        <BootstrapNavbar.Brand href="#home">Navbar</BootstrapNavbar.Brand> {/* Ta bort? */}
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>  
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                        <Navbar.Text><a href="#login"><FetchUsername/></a>
                        </Navbar.Text>
                        <Nav.Link><Button variant="outline-light" onClick={this.handleLogout}>Sign Out</Button></Nav.Link>
                        </Nav>
                    </Container>
                </BootstrapNavbar>
            </div>
        )
    }
}