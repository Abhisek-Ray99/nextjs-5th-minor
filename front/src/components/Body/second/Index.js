import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaShare } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from "react-icons/fi";

import { Div, Status, Sub, User, Time, Icon } from './Secondelement';

const Second = () => {
    return (
        <Div>
            <h1>Let's Covid-Visualizer Features</h1>
            <div className="main">
                    <div>
                        <Status>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>It's easy to use and a nice representation...</Sub>
                        <User>@rahul</User>
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
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>i most liked his shared feelings....after reading that somewhat my stress was gone for covid.</Sub>
                        <User>@manvya</User>
                        <Time>4 hrs ago</Time>
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
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>Dashboard is easy to use</Sub>
                        <User>@puru</User>
                        <Time>1 day ago</Time>
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
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>graphical representation is easy to understand and also looking attractive.</Sub>
                        <User>@ricky</User>
                        <Time>2 days ago</Time>
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
