import React from 'react'
import { useState } from 'react';

import DynamicContainer from '../components/DynamicContainer';
import LoadingText from '../components/LoadingText';
import Title from '../components/Title';

import Typing from 'react-typing-animation'
import { Row, Col } from 'antd';


const Cv = () => {

    const termino = () => {
        setState(!state)
    }
    
    const [state, setState] = useState(false)

    return (
        <>
        <Title />
        <Row>
            <Col span={24}>
                <div style={{textAlign: 'left', padding: '0px 0px 0px 40px', fontSize:20, fontFamily: 'Ubuntu'}}>
                    <Typing speed={50} onFinishedTyping={termino}>
                        <span>Cargando competencias...</span>
                        <Typing.Reset count={1} delay={500} />
                        <span>Cargando experiencia laboral...</span>
                        <Typing.Reset count={1} delay={500} />
                        <span>Cargando educación...</span>
                        <Typing.Reset count={1} delay={500} />
                    </Typing>
                 </div>
            </Col>
        </Row>
        <DynamicContainer estado={state} nombre="Summary" />
        <DynamicContainer estado={state} nombre="Competencies" />
        <DynamicContainer estado={state} nombre="Experience" />
        <DynamicContainer estado={state} nombre="Education" />
        </>
    )
}

export default Cv
