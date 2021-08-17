import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import App from '../App';
const navbarStyle = {
    backgroundColor: 'lightblue'

};
const Header = ({title}) =>{
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>

            </Container>
    
    
        </Navbar>
    )


};
export default Header;