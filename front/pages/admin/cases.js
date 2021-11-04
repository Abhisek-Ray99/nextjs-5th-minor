import React from 'react'
import dynamic from 'next/dynamic'

import Admin from '../../src/components/dashboard/Index';
// import Visualizer2 from '../../src/components/dashboard/visualizer2/Visualizer2'

const Cases = () => {
    const MapWithNoSSR = dynamic(() => import("../../src/components/dashboard/visualizer2/Visualizer2"), {
        ssr: false
    });

    return (
        <Admin>
            <MapWithNoSSR />
        </Admin>
    )
}

export default Cases
