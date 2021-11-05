import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'

import img2 from '../../../../public/img/7.png' 
import img3 from '../../../../public/img/200w.gif'


import { Share, Div, Div_1, Head, Head_p, Div_2, Btn1, Btn2, Quote,StyledImage,Wrap } from './Firstelements'


const First = () => {
    return (
        <Div>
            <Share>
                <Div_1>
                    <Head>Share feelings without being judged</Head>
                    <Head_p>There is no doubt that we are currently living in unprecedented times. With all of the uncertainty, it can be hard to see where God and his plan fits in with the COVID-19 outbreak.
                    <br/>

                    We have complied a few poems, inspirational quotes, reflections and prayers that perfectly encapsulate the emotions many of us are feeling during this time. While reading them, take some quiet time to reflect on the words and what they mean to you.</Head_p>
                </Div_1>
                <Div_2>
                    <Btn1 href="/">
                        <>
                            <Image src={img3} />
                            <span>Our Feelings</span>
                        </>

                    </Btn1>
                    <Link href="/"><Btn2>See Other Feelings</Btn2></Link>
                </Div_2>
            </Share>
            <Quote>
                <div className="first-div">
                    <h1>What this means to you.............</h1>
                    <p>want to speak out anonymously</p>
                </div>
                <div className="second-div">
                    <h1>Have you ever go througn these ... ?</h1>
                    <p>want to acknowledge personal opinion</p>
                </div>
            </Quote>
            <Wrap>
                <Image
                    src={img2}
                    width={650}
                    height={650}
                />
            </Wrap>

        </Div>
    )
}

export default First
