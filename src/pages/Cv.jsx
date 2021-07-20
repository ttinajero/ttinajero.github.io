import React from 'react'
import DynamicContainer from '../components/DynamicContainer';
import LoadingText from '../components/LoadingText';
import Title from '../components/Title';


const Cv = () => {

   return (
        <>
        <Title />
        <LoadingText />
        <DynamicContainer estado="1" nombre="Summary" />
        <DynamicContainer estado="1" nombre="Competencies" />
        <DynamicContainer estado="0" nombre="Experience" />
        <DynamicContainer estado="0" nombre="Education" />
        </>
    )
}

export default Cv
