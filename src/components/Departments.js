import React from 'react'
import {Navbar, NavDropdown, Nav, Button, Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Media from 'react-media';
import '../Departments.css';

const StyleButtonWidth = styled(Button)`
    width: 100%;
    padding: 10px 10px;
`;
const StyleRowPadding = styled(Col)`padding: 10px`;



export default function Departments() {
    return (
        <div>
            <Media queries={{
                small: "(max-width: 768px)",
                medium: "(min-width: 769px)"
            }}>
                {
                    matches=>(
                        <>        
            {matches.medium && 
                <>
                    <span className="nav-dropdowns">
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="mr-auto">
                                <NavDropdown title="JERSEYS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="MEN" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="WOMEN" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="KIDS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="T-SHIRTS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="SWEATSHIRTS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="HATS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="ACCESSORIES" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="HOME/OFFICE" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="COLLECTIBLES" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="CLEARANCE" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">ACCESSORIES</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BAGS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">COLLECTIBLES</NavDropdown.Item>
                                    <NavDropdown.Item href="#">FOOTWEAR</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>
                    </span>
                </>
            }
                        
            {matches.small &&
                <>
            <br />
            <Container>                
            <StyleRowPadding>
                <Row>
                    <Col><StyleButtonWidth>Men</StyleButtonWidth></Col>
                    <Col><StyleButtonWidth>Women</StyleButtonWidth></Col>
                </Row>
            </StyleRowPadding>
            <StyleRowPadding>
                <Row>
                    <Col><StyleButtonWidth>Kids</StyleButtonWidth></Col>
                    <Col><StyleButtonWidth>Jerseys</StyleButtonWidth></Col>
                </Row>                
                </StyleRowPadding>
                <StyleRowPadding>
                <Row>
                    <Col><StyleButtonWidth>Hats</StyleButtonWidth></Col>
                    <Col><StyleButtonWidth>Novelties</StyleButtonWidth></Col>
                </Row>                
                </StyleRowPadding>
                <StyleRowPadding>
                <Row>
                    <Col><StyleButtonWidth>New</StyleButtonWidth></Col>
                    <Col><StyleButtonWidth>Sale</StyleButtonWidth></Col>
                </Row>                 
                </StyleRowPadding>
                <StyleRowPadding>
                <Row>
                    <Col><StyleButtonWidth>Throwback</StyleButtonWidth></Col>
                    <Col><StyleButtonWidth>Tickets</StyleButtonWidth></Col>
                </Row>                 
                </StyleRowPadding>
            </Container> </> }            
            </>)
                }
            </Media>            
        </div>
    )
}
