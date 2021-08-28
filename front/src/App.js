import React from 'react'
import { Globalstyle } from './Globalstyles'
import styled from 'styled-components'

import Body from './components/Body/Body'
import Nav from './components/Nav/Nav'



const MyApp = styled.div`
    margin: 0;
    padding: 0;
`

const App = () => {
    return (
        <MyApp>
            <Globalstyle />
                <Nav />
                <Body />
        </MyApp>
    )
}

export default App;