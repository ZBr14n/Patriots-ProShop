import React from 'react'
import styled from 'styled-components';
import Media from 'react-media';

import {Container, Row, Col, Button, FormControl ,InputGroup} from 'react-bootstrap';
import '../Navigation.css';

const StyleIcons = styled.span`
    img{        
        width: 30px;
        height: 30px;
    }

    .search-products:hover{
        width: 300px;
    }
    #search{
        width: 40px;
        height: 40px;
        background-color: #B0B7BC;
    }

    .misc-link{
        padding-right: 25px;
    }
    .misc-link > a{
        padding-right: 25px;
        text-decoration: none;
    }
    
`;
const StyleLogo = styled.div`
    padding: 25px 25px;
    background-color: #08112C;
    
    .bg-logo{
        background-image: url('../images/logo.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        width: 100%;
        height: 90px;
    }

    .bg-logo-info{
        position: absolute;
        left: 20%;
        padding-left: 90px;
    }
    .bg-logo-info span{
        position: absolute;
        right: -70%;
        bottom: 30px;
        font-size: 1.3rem;
    }

    .bg-logo-info span > a{
        padding: 10px;
        
    }
    .bg-logo-info span > a:not(:last-child){
        border-right: 1px solid red;
        text-decoration: none;
        
    }

    
    #bg-logo-teli{color: #C6242B;}

`;

const StyleInput = styled(InputGroup)`
    // position: absolute;
    // right: -130%;
    // bottom: -15px;

    :hover{
        width: 70%;
    }
`;

export default function Navigation() {
    return (
        <div>
            <Media queries={{
                small: "(max-width: 768px)",
                medium: "(min-width: 769px)"
            }}>{matches => (                                            
                <>
                {matches.medium &&
                    <>
                    <span className="discount-container"><img id="discount-sect" src="/images/desktop-discount.png" width="35%" /><img id="giftcard-sect" src="/images/desktop-giftcard.png" width="65%" /></span>
                <nav id="main-nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>



                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="">New Arrivals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Best Sellers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Extended Sizing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">View All</a>
                        </li>

                        <StyleIcons><span className="search-products">
                            <InputGroup>
                                <FormControl placeholder="Search Products"></FormControl>      
                                <a href="#"><img src="../images/search.png" id="search"  width="25px" height="25px" /></a>
                            </InputGroup>            
                        </span></StyleIcons>
                    </ul>

                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                    <StyleIcons>
                        <span>
                            <div className="misc-link">
                            
                                <a href="#">Patriots.com</a>
                                <a href="#">Gift Cards</a>
                                <a href="#">Track Order</a>
                                <a href="#">Help</a>
                            
                                <a class="navbar-brand" href="#"> 
                                    <img src="../images/userAcc_icon.png" alt="user-account" />
                                </a>

                                <a class="navbar-brand" href="#">
                                    <img src="../images/cart_icon.png" alt="cart" />
                                </a>
                            </div>
                        </span>
                    </StyleIcons>
                </div>
            </nav>

            <span>                                    
            <StyleLogo>
                <div className="bg-logo">
                    {/* <div className="bg-logo-info">
                        <h4>Official ProShop of the New England Patriots</h4>
                        <h4>Call <a id="bg-logo-teli" href="tel:1-888-662-7287">(888) 662-7287</a> M-F 9am / 5pm ET</h4>
                    </div>                     */}
                </div>
            </StyleLogo>
            {/* <InputGroup>
                        <FormControl placeholder="Search Products" bsPrefix="width:50%"></FormControl>
                        <InputGroup.Append>
                            <Button>
                                <a href="#"><img src="../images/search.png" id="search-desktop"  width="25px" height="25px" /></a>
                            </Button>
                        </InputGroup.Append>
            </InputGroup> */}
            </span>
            

                    </>
                }
                
                
                {matches.small && 
                    <>
                <nav id="main-nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                <StyleIcons>

                <span>
                    <a class="navbar-brand" href="#">Login 
                        <img src="../images/userAcc_icon.png" alt="user-account" />
                    </a>
                    <a href="#">
                        <img src="../images/cart_icon.png" alt="cart" />
                    </a>
                </span>
                </StyleIcons>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <span>                                    
            <StyleLogo>
                <div className="bg-logo">
                    {/* <div className="bg-logo-info">
                        <h4>Official ProShop of the New England Patriots</h4>
                        <h4>Call <a id="bg-logo-teli" href="tel:1-888-662-7287">(888) 662-7287</a> M-F 9am / 5pm ET</h4>
                    </div>                     */}
                </div>
            </StyleLogo>
            {/* <InputGroup>
                        <FormControl placeholder="Search Products" bsPrefix="width:50%"></FormControl>
                        <InputGroup.Append>
                            <Button>
                                <a href="#"><img src="../images/search.png" id="search-desktop"  width="25px" height="25px" /></a>
                            </Button>
                        </InputGroup.Append>
            </InputGroup> */}
            </span>
            
            <StyleIcons><span className="search-products">
            <InputGroup>
                <FormControl placeholder="Search Products"></FormControl>      
                <a href="#"><img src="../images/search.png" id="search"  width="25px" height="25px" /></a>
            </InputGroup>            
            </span></StyleIcons>
                    </>
                }
                
               

                </>
            )}

            </Media>
                       
        </div>
    )
}
