import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons';
import Image from 'next/image';

import { Div, DivBox, Feature, Content, Links, Products, Services, Linkf, Icon } from './footerelements';
import logo from '../../../../public/img/favicon.jpg'

const Footer = () => {
    return (
        <Div>
            <DivBox>
                <Feature>
                    <Image src={logo} />
                    <p>Let's Gtok , geek to geeks and a enrolment of packages</p>
                    <Icon>
                        <IconContext.Provider value={{ className: "icon1" }}>
                            <FaFacebookF />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon2" }}>
                            <FaYoutube />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon3" }}>
                            <FaInstagram />
                        </IconContext.Provider>

                    </Icon>
                </Feature>
                <Content>
                    <Links>
                        <h1>Links Products</h1>
                        <Linkf href="/">Link 1</Linkf>
                        <Linkf href="/">Link 2</Linkf>
                        <Linkf href="/">Link 3</Linkf>
                        <Linkf href="/">Link 4</Linkf>
                    </Links>
                    <Products>
                        <h1>Name of Product</h1>
                        <Linkf href="/">Product 1</Linkf>
                        <Linkf href="/">Product 2</Linkf>
                        <Linkf href="/">Product 3</Linkf>
                        <Linkf href="/">Product 4</Linkf>
                    </Products>
                    <Services>
                        <h1>Link of Services</h1>
                        <Linkf href="/">Link 1</Linkf>
                        <Linkf href="/">Link 2</Linkf>
                        <Linkf href="/">Link 3</Linkf>
                        <Linkf href="/">Link 4</Linkf>
                    </Services>
                </Content>
            </DivBox>
        </Div>
    )
}

export default Footer
