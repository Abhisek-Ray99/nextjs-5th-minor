import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import logo from '../../../public/img/favicon.jpg';

import { Div, Ul1, Ul2, Ul3, LoginBtn, SignupBtn, Link1, Link2} from './Navelements';

const Nav = () => {
    return (
        <Div>
                <Ul1>
                    <Link href="/"><Image src={logo} /></Link>
                    <Link href="/"><Link1>Let's Gtok</Link1></Link>
                </Ul1>
                <Ul2>
                    <Link href="/"><Link2>About</Link2></Link>
                    <Link href="/"><Link2>Blog</Link2></Link>
                    <Link href="/"><Link2>Career</Link2></Link>
                    <Link href="/"><Link2>Contact</Link2></Link>
                </Ul2>
                <Ul3>
                    
                    <Link href="/"><LoginBtn>Sign in</LoginBtn></Link>
                    <Link href="/join"><SignupBtn>Sign up</SignupBtn></Link> 
                </Ul3>
        </Div>
    )
}

export default Nav;
