import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <div>
           <header>
           <Navbar bg="dark" expand="lg" variant="dark" expand="lg" collapseOnSelect>
               <Container>
                <Navbar.Brand href="/">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home"><i className="fas fa-shopping-cart">Cart</i></Nav.Link>
                    <Nav.Link href="#link"><i className="fas fa-user">User</i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </header> 
        </div>
    )
}

export default Header
