import React from 'react'

import { Div } from './bodyelements';
import Contact from './contact';
import First from './first/Index';
import Footer from './footer';
import Second from './second/Index';
import Third from './third/Index';

const Body = () => {
    return (
        <Div>
            <First/>
            <Second/>
            <Third/>
            <Contact/>
            <Footer/>
        </Div>
    )
}

export default Body;
