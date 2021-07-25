import React from 'react'
import { useState } from 'react';

import Summary from './Summary'
import Competencies from './Competencies'
import Experience from './Experience'
import Education from './Education'

import LoadingBlock from './LoadingBlock'


const DynamicContainer = ({estado, nombre}) => {

    const [state, setState] = useState(estado)

    if (estado === false) {
        return <LoadingBlock />
    } else {

        switch (nombre) {
            case "Summary":
                return <Summary />
            case "Competencies":
                return <Competencies estado={state} />
            case "Experience":
                return <Experience />
            case "Education":
                return <Education />
        
            default:
                break;
        }
    }

}

export default DynamicContainer
