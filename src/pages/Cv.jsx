import React from 'react'
import { useState } from 'react';

import Title from '../components/Title';
import Typing from 'react-typing-animation'
import { Row, Col } from 'antd';
import Summary from '../components/Summary';


const Cv = () => {

    const termino = () => {
        setState(!state)
        console.log('Termino')
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
        <Summary estado={state} />
        </>
    )
}

export default Cv
