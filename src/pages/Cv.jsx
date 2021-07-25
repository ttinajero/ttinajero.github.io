import React from 'react'
import {useState} from 'react'

import Title from '../components/Title';
import Typing from 'react-typing-animation'
import { Row, Col } from 'antd';
import Summary from '../components/Summary';
import Competencies from '../components/Competencies'
import Experience from '../components/Experience'


const Cv = () => {

    const [state, setstate] = useState(true)

    const termino = () => {
        setstate(!state)
    }

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
        <Competencies estado={state} />
        <Experience estado={state} />
        </>
    )
}

export default Cv
