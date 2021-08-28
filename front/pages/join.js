import React from 'react'
import styled from 'styled-components';
import Image from "next/image";


import img from '../public/img/cool-background.svg';
import Form from '../src/components/Forms/index';
import {bgWrap} from '../styles/styles.module.css';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`

const Join = () => {
    return (
        <AppContainer>
            <div className={bgWrap}>
                <Image
                    alt="Mountains"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <Form />
        </AppContainer>
    )
}

export default Join
