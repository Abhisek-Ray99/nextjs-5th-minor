import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

import { Section, Container, ColumnLeft, ColumnRight, Button, Img } from './Thirdelements';
import Frame1 from '../../../../public/img/3d1.png';
import Frame2 from '../../../../public/img/3d2.png';
import Frame3 from '../../../../public/img/3d3.png';
import Frame4 from '../../../../public/img/3d4.png';
import Frame5 from '../../../../public/img/3d5.png';
import Frame6 from '../../../../public/img/3d6.png';

const Third = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Why let's Covid-Visualizer</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >It is no surprise that there is such a high volume of data relating to the recent COVID-19 outbreak.
                    Covid-Visualizer features high-performance graphical visualization to organize and display this data in such a way that it can be easily understand by doctors, researchers, and even the public. </motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, backgroundColor: '#67F6E7' }}
                    >Learn More</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Img
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Image src={Frame1}/>
                    </Img>
                    <Img
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Image src={Frame2} />
                    </Img>
                    <Img
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Image src={Frame3} />
                    </Img>
                    <Img
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Image src={Frame4} />
                    </Img>
                    <Img
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Image src={Frame5} />
                    </Img>
                    <Img
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Image src={Frame6} />
                    </Img>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Third
