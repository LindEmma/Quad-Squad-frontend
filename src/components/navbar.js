import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Image } from 'react-bootstrap';
import QuadSquadLogo from "../img/QuadSquad 1.png";


export default class MyNavbar extends React.Component {
    render() {
        return (
            <div>
                 <BootstrapNavbar bg="dark" variant="dark">
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
                    </Container>
                </BootstrapNavbar>
            </div>
        )
    }
}
<Image 
    src={QuadSquadLogo} 
    alt="Navbar Logo" 
    fluid 
    style={{ maxWidth: '50%' }} // Justera detta värde för att ändra storleken på bilden
/>
