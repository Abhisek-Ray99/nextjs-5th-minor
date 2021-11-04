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
                    <Head_p>lorem ipsum dolor sit lorem ipsum lorem10 lorem ipsum lorem lorem  lorem l orem lorem10vSit ex non consequat occaecat consectetur dolore. Commodo labore ullamco adipisicing ipsum sit proident est qui reprehenderit. Fugiat do ipsum fugiat nisi.</Head_p>
                </Div_1>
                <Div_2>
                    <Btn1 href="/">
                        <>
                            <Image src={img3} />
                            <span>Share My Feelings</span>
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
