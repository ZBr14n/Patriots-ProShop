import React from 'react'
import styled from 'styled-components';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import {animateScroll as scroll} from 'react-scroll';

const StyleNewsSect = styled.footer`
    
    position: relative;
    bottom: 0;

    width: 100%;
    
    // border: 3px solid red;    
    background-color: #08112C;

    text-align: center;
    overflow: hidden;  
    // margin-top: 300px;

    ul{
        list-style: none;     
    }
    li{
        display: inline-block;
    }
    li:not(:last-child):after{
        content: "\\2605";
        padding: 0px 5px;
    }

    // a::after{
    //     content: "\\2605";
    //     padding: 5px 5px;
    // }



    // .btn-top-page{
        
        
    //     color: white;
    //     border: 1px solid #C6242B;
    //     background-color: #C6242B;
        
        
    //     list-style: none;
    //     font-size: 25px;
    //     font-weight: bold;
    // }
    // .btn-top-page::before{
    //     display: block;
    //     content: "\\203A";
    //     transform: rotate(270deg);       
    //     font-size: 2rem;        
    // }
    // .btn-top-page > a{
    //     position: relative;
    //     list-style: none !important;
    //     color: black;
    //     font-size: 20px;
        
    // }


    .btn-top-page{
        position: relative;
        left: 90%;
        
        width: 45px;
        height: 45px;
        
        
        border: 1px solid #C6242B;
        background-color: #C6242B;
    }


`;


export default function Footer() {
    const StyleBtnTop = {
        // marginBottom: '50px',
        // border: '3px solid red',        
        height: '90px',
        opacity: '.6', backgroundColor: 'grey',
        textTransform: 'uppercase',
        textAlign: 'center', fontSize: '20px', color: 'black'
    };

    
    return (               
        <div>
            <StyleNewsSect>
                <div className="btn-top-page">
                    {/* <a onClick={scroll.scrollToTop}></a> */}
                    <svg onClick={scroll.scrollToTop} id="top-btn" focusable="false" viewBox="0 0 28 28" class="pl-BaseIcon pl-BackToTop-icon" aria-hidden="true" data-hb-id="pl-icon"><path d="M8.9 16.8c.4.4 1 .4 1.4.1l3.8-3.5 3.8 3.4c.4.4 1 .3 1.4-.1.4-.4.3-1-.1-1.4l-4.5-4c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-4.5 4c-.3.4-.3 1.1.1 1.5z"></path></svg>
                </div>
            </StyleNewsSect>
            
            {/* <StyleNewsSect>
            <div className="btn-top-page" style={StyleBtnTop}>
                <a href="/">
                    Top of Page
                </a>
            </div>
            </StyleNewsSect> */}
            
            <StyleNewsSect>            
                
                <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Accessibility</a></li>
        
                </ul>
                <ul>
                    <li><a href="#" >Terms of Use</a></li>
                    <li><a href="#" >NFL Photo Store</a></li>
                </ul>

                    <p>New England Patriots</p>


                
                
                {/* <p>Stay up to date on special offers from the Patriots ProShop</p>
                <section className="newsletter-sect">
                    <span>
                        newsletter Signup 
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text>test</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>

                        <FormControl
                            bsPrefix="width:250px"
                            size="lg"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        
                        <input type="text" defaultValue="Email" />  
                        <input type="text" defaultValue="First Name" />  
                        <input type="text" defaultValue="Last Name" />                    
                        <Button variant="primary">Go</Button>
                    </span>
                </section> */}
            </StyleNewsSect>
        </div>
        
    )
}
