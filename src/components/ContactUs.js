import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Media from 'react-media';
import '../ContactUs.css';

const StyleButtonWidth = styled(Button)`
    background-color: red;
    width: 100%;
    padding: 10px 10px;
`;
const StyleRowPadding = styled(Col)``;


export default function ContactUs() {
    return (
        <div>
            <Media queries={{
                small: '(max-width: 768px)',
                medium: '(min-width: 769px)'
            }}>
                {matches => (
                    <>
                        {matches.medium &&
                            <>
                                 <Container>                
                                <StyleRowPadding>
                                    <Row>
                                        <Col><StyleButtonWidth><a href="tel:1-888-662-7287"></a>Call Us <sub>(M-F 9-5 ET)</sub></StyleButtonWidth></Col>
                                        <Col><StyleButtonWidth><a href="mailto:proshop@patriots.com"></a>Email Us</StyleButtonWidth></Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col><StyleButtonWidth>My Account</StyleButtonWidth></Col>
                                        <Col><StyleButtonWidth>Newsletter</StyleButtonWidth></Col>
                                    </Row>
                                    <br />                                                                       
                                    <Row>
                                        <Col><StyleButtonWidth>Help</StyleButtonWidth></Col>
                                        <Col><StyleButtonWidth>Contact</StyleButtonWidth></Col>
                                    </Row>
                                    
                                    
                                </StyleRowPadding>
                                </Container>

                                <div className="store-descrip">
                                    <h1>
                                        <span style={{color: '#C6242B'}}>New England</span> <span style={{color: '#08112C'}}>Patriots ProShop</span>
                                    </h1>
                                    <p>
                                        You've arrived at the official New England Patriots ProShop, where you'll find the very best selection of New England Patriots apparel and gear on the web! This is your one-stop shop for any and all New England Patriots gear, including the ever-popular Patriots jerseys in every style imaginable so you can arrive at Gillette Stadium with the best licensed Pats jerseys. Of course, that's only the beginning as we're fully stocked with Patriots t-shirts, hats, sweatshirts and any other Patriots clothing you could want for men, women, youth, including big & tall or plus size clothing. If you've already got all the Patriots clothing you could want, make sure you check out our New England Patriots signed memorabilia and autographed collectibles from any and every notable player or coach in Pats lore. Whether you're looking for New England Patriots sideline apparel worn by the coaches, or the latest line of Patriots training camp or Patriots draft gear, you will find it here at the Patriots ProShop!                                        
                                    </p>
                                </div>
                            </>
                            
                        }
                         {matches.small &&
                                <>
                                <Container>                
                                    <StyleRowPadding>
                                        <Row>
                                            <Col><StyleButtonWidth><a href="tel:1-888-662-7287"></a>Call Us <sub>(M-F 9-5 ET)</sub></StyleButtonWidth></Col>
                                            <Col><StyleButtonWidth><a href="mailto:proshop@patriots.com"></a>Email Us</StyleButtonWidth></Col>
                                        </Row>
                                        <br />
                                        <Row><Col><StyleButtonWidth>My Account</StyleButtonWidth></Col></Row>
                                        <br />
                                        <Row><Col><StyleButtonWidth>Newsletter</StyleButtonWidth></Col></Row>
                                        <br />
                                        <Row><Col><StyleButtonWidth>Help</StyleButtonWidth></Col></Row>
                                        <br />
                                        <Row><Col><StyleButtonWidth>Contact</StyleButtonWidth></Col></Row>
                                    </StyleRowPadding>
                                </Container>
                                </>
                            }
                        
                    </>
                )}

            </Media>
                   

            <br />
            <br />
        </div>
    )
}
