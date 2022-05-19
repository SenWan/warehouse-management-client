import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg='primary' variant="dark">
        <Container>
            <Navbar.Brand className='text-white fw-bold fs-3' as={Link} to='/'>Food House</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link className='text-white fw-bold fs-6'>Blogs</Nav.Link>
                <Nav.Link className='btn text-white fw-bold fs-6' eventKey={2} as={Link} to="login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
};

export default Header;