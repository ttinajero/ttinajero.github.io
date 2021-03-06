import React from 'react'

import Summary from './Summary'
import Competencies from './Competencies'
import Experience from './Experience'
import Education from './Education'

import LoadingBlock from './LoadingBlock'


const DynamicContainer = ({estado, nombre}) => {

    if (estado === false) {
        return <LoadingBlock />
    } else {

        switch (nombre) {
            case "Summary":
                return <Summary />
            case "Competencies":
                return <Competencies />
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
