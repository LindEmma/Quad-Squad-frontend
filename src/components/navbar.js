import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Image, } from 'react-bootstrap';
import QuadSquadLogo from "../img/QuadSquad 1.png";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import FetchUsername from '../components/FetchUsername'

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false // Initialt är användaren inte inloggad
        };
    }

    componentDidMount() {
        // Kontrollera om användaren är inloggad (t.ex. genom att kontrollera localStorage eller via en API-anrop)
        const isLoggedIn = localStorage.getItem('isLoggedIn'); // Exempel på hur du kan kontrollera inloggning med localStorage
        if (isLoggedIn) {
            this.setState({ isLoggedIn: true });
        }
    }

    handleLogout = () => {
        // Logga ut logik (implementera din logik här)
        // Navigera användaren till startsidan
        localStorage.clear();
        window.location.href = 'http://localhost:3000/'; // Navigera till startsidan
    }

    render() {
        const { isLoggedIn } = this.state;
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
                        <BootstrapNavbar.Brand href="#home"><FetchUsername/></BootstrapNavbar.Brand> {/* Ta bort? */}
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

