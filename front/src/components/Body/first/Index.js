import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'

import img2 from '../../../../public/img/7.png'
import img3 from '../../../../public/img/Anxious-Face-with-Sweat-Emoji-on-transparent-background-PNG.png'


import { Share, Div, Div_1, Head, Head_p, Div_2, Btn1, Btn2, Quote, StyledImage, Wrap } from './Firstelements'

import Modal from '../../Modal'


const First = () => {

    const modalRef = useRef()

    return (
        <Div>
            <Share>
                <Div_1>
                    <Head>Share feelings On the Covid without being judged</Head>
                    <Head_p>There is no doubt that we are currently living in unprecedented times. With all of the uncertainty, it can be hard to see where God and his plan fits in with the COVID-19 outbreak.
                        <br />

                    </Head_p>
                </Div_1>
                <Div_2>
                    <Btn1 href="#" onClick={() => modalRef.current.open()}>
                        <>
                            <Image src={img3} />
                            <span>Know the application</span>
                        </>

                    </Btn1>
                    <Modal ref={modalRef}>
                        <b><h2>Condition Around Us</h2></b>

                        <p>Reaching out to every people are immpossible and Getting their feelings on their conditin is easy.</p>
                        <p>We realise to make this application better and even best for who suffer any covid symptoms</p>
                        <p>Who wanted to help them in their worst period by some kind of support.</p>
                        <p>A New User can Create an account. They can be a patient and or supporter. They have their rights and choice to like on the message of any undergoing disease or even Comment on that message section</p>
                    </Modal>
                    {/* <Link href="/"><Btn2>See Other Feelings</Btn2></Link> */}
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
