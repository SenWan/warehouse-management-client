import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg='primary' variant="dark">
        <Container>
            <Navbar.Brand className='text-white fw-bold fs-3' as={Link} to='/'>Fruits House</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link className='text-white menu fw-bold fs-6' as={Link} to='blogs'>Blogs</Nav.Link>
                {
                    user ?
                    <button onClick={handleSignOut} className='btn text-white fw-bold, fs-6 bg-primary'>Signout</button>
                    :
                    <Nav.Link className='btn text-white menu fw-bold fs-6' eventKey={2} as={Link} to="login">
                    Login
                </Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    );
};

export default Header;