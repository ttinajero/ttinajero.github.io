import React, { useState } from 'react'
import DynamicContainer from '../components/DynamicContainer';
import LoadingText from '../components/LoadingText';
import Summary from '../components/Summary';
import Title from '../components/Title';


const Cv = () => {

    const [estatus, SetCount] = useState(0)
    
    return (
        <>
        <Title />
        <LoadingText />
        <Summary estado={estatus} />
        <DynamicContainer estado="1" nombre="Competencies" />
        <DynamicContainer estado="0" nombre="Experience" />
        <DynamicContainer estado="0" nombre="Education" />
        </>
    )
}

export default Cv
