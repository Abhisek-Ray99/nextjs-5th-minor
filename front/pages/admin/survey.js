import React from 'react'
import { PopupButton } from '@typeform/embed-react'


import Admin from '../../src/components/dashboard/Index';

const Cases = () => {

    return (
        <Admin>
            <PopupButton id="<form-id>" style={{ fontSize: 20 }} className="my-button">
                click to open form in popup
            </PopupButton>
        </Admin>
    )
}

export default Cases
