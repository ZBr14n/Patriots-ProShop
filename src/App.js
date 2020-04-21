import React from 'react';
import './App.css';

import {Button,Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import Media from 'react-media';
import { Link, BrowserRouter as Router } from "react-router-dom"; 



const StyleH3 = styled.h3`
  padding-top: 50px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  color: #C6242B;
`;

const StyleSalePrice = styled.span`
  text-align: center;
  align-items: center;
  del{
    color: #615c65;
    padding-right: 10px;
  }
  ins{
    color: #c4113f;
    text-decoration: none;    
  }
`;


const StyleContainer = styled(Container)`
  align-items: center;
  text-align: center;
  margin: 0 auto;
  
`;
const StyleRow = styled(Row)`
  margin: 0 -200px;
  overflow: hidden;
`;

const StyleCol = styled(Col)`
  img:hover{
    transition: .6s ease-out;
    transform: scale(1.3);
    
  }
`;

// the middle part or body of the website
function App() {
  return (
    <div className="App">
      <Media queries={{
          small: "(max-width: 768px)",
          medium: "(min-width: 769px)",
      }}>
          {matches => (
            <>
              {matches.medium && 
                <>
                  <div className="desktop-bg1"></div>
                  <div className="desktop-bg2"></div>
                  <br />
                  <br />

                  <Container>
                    <StyleRow>
                      <StyleCol><img src="/images/desktop-playerphoto1.png" width="100%" height="auto" /></StyleCol>
                      <StyleCol><img src="/images/desktop-playerphoto2.png" width="100%" height="auto" /></StyleCol>
                      <StyleCol><img src="/images/desktop-playerphoto3.png" width="100%" height="auto" /></StyleCol>
                      <StyleCol><img src="/images/desktop-playerphoto4.png" width="100%" height="auto" /></StyleCol>
                    </StyleRow>
                  </Container>


                  <StyleH3><h3>Featured</h3></StyleH3>

                  
                                        
                    <StyleContainer>
                      <Row>
                        <Col>
                            <a href="#">
                              <img src="./images/patriot-gear1.png" width="140px" height="auto" /><br />
                              Patriots Do Your Job Scarf
                              <br />
                              <Button variant="light" size="sm">SALE!</Button>
                              <br />
                              <StyleSalePrice><span><del>$29.99</del><ins>$19.99</ins></span></StyleSalePrice>
                            </a>
                        </Col>          
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear2.png"  width="140px" height="auto" /><br />         
                          Patriots Game Day Cups-18pk
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$7.99</del><ins>$5.99</ins></span></StyleSalePrice>
                        </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <a href="#">
                        <img src="./images/patriot-gear3.png"  width="140px" height="auto" /><br />
                          Patriots Gronkowski Nation Bobble Head
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$34.99</del><ins>$24.99</ins></span></StyleSalePrice>
                        </a>
                        </Col>
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear4.png" width="140px" height="auto" /><br />
                          Patriots Tom Brady 2016 Funko Figure
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$15.99</del><ins>$5.99</ins></span></StyleSalePrice>
                        </a>
                        </Col>    
                      </Row>
                      <Row>
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear5.png" width="140px" height="auto"/><br />
                          Patriots Throwback Dual Hybrid Cover-IPhone 6
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$24.99</del><ins>$14.99</ins></span></StyleSalePrice>
                            </a>
                        </Col>
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear6.png" width="140px" height="auto" /><br />
                          Patriots Ice Mini Helmet
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$34.99</del><ins>$24.99</ins></span></StyleSalePrice>
                            </a>
                        </Col>    
                      </Row>
                    </StyleContainer>

                    
                    <br />

                    <div className="bottom-separator"></div>                                    


                </>
              }

              
              
              
              
              

              {/* small size here */}
              {matches.small && 
                <>
                    <StyleH3><h3>Featured</h3></StyleH3>
                    
                    
                    <Container>
                      <Row>
                        <Col>
                          <a href="#">
                            <img src="./images/patriot-gear1.png" width="140px" height="auto" /><br />
                            Patriots Do Your Job Scarf
                            <br />
                            <Button variant="light" size="sm">SALE!</Button>
                            <br />
                            <StyleSalePrice><span><del>$29.99</del><ins>$19.99</ins></span></StyleSalePrice>
                          </a>
                        </Col>          
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear2.png"  width="140px" height="auto" /><br />         
                          Patriots Game Day Cups-18pk
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$7.99</del><ins>$5.99</ins></span></StyleSalePrice>
                        </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <a href="#">
                        <img src="./images/patriot-gear3.png"  width="140px" height="auto" /><br />
                          Patriots Gronkowski Nation Bobble Head
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$34.99</del><ins>$24.99</ins></span></StyleSalePrice>
                        </a>
                        </Col>
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear4.png" width="140px" height="auto" /><br />
                          Patriots Tom Brady 2016 Funko Figure
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$15.99</del><ins>$5.99</ins></span></StyleSalePrice>
                        </a>
                        </Col>    
                      </Row>
                      <Row>
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear5.png" width="140px" height="auto"/><br />
                          Patriots Throwback Dual Hybrid Cover-IPhone 6
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$24.99</del><ins>$14.99</ins></span></StyleSalePrice>
                            </a>
                        </Col>
                        <Col>
                        <a href="#">
                          <img src="./images/patriot-gear6.png" width="140px" height="auto" /><br />
                          Patriots Ice Mini Helmet
                          <br />
                            <Button variant="light" size="sm">SALE!</Button>
                          <br />
                            <StyleSalePrice><span><del>$34.99</del><ins>$24.99</ins></span></StyleSalePrice>
                            </a>
                        </Col>    
                      </Row>
                    </Container>
                    <br />

                    <div className="bottom-separator"></div>                                    
                </>
              }


            </>         
          )}
      </Media>

    </div>
  );
}

export default App;
