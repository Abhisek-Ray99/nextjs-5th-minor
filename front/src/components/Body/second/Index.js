import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaShare } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from "react-icons/fi";

import { Div, Status, Sub, User, Time, Icon } from './Secondelement';

const Second = () => {
    return (
        <Div>
            <h1>Let's Gtok Features</h1>
            <div className="main">
                    <div>
                        <Status>
                            <span>Current Feeling</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>So excited to finally get my hands on the latest ps5</Sub>
                        <User>@josh</User>
                        <Time>a few seconds ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
                    <div>
                        <Status>
                            <span>Watching</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>So excited to finally get my hands on the latest ps5</Sub>
                        <User>@josh</User>
                        <Time>a few seconds ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
                    <div>
                        <Status>
                            <span>Watching</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>So excited to finally get my hands on the latest ps5</Sub>
                        <User>@josh</User>
                        <Time>a few seconds ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
                    <div>
                        <Status>
                            <span>Watching</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>So excited to finally get my hands on the latest ps5</Sub>
                        <User>@josh</User>
                        <Time>a few seconds ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
            </div>
        </Div>
    )
}

export default Second
