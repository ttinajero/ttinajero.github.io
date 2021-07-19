import React from 'react'
import Typing from 'react-typing-animation'
import { Row, Col } from 'antd';

const LoadingText = () => {


    return (
        <Row>
            <Col span={24}>
                <div style={{textAlign: 'left', padding: '0px 0px 0px 40px', fontSize:20, fontFamily: 'Ubuntu'}}>
                    <Typing speed={50}>
                        <span>Cargando datos personales...</span>
                        <Typing.Reset count={1} delay={500} />
                        <span>Cargando experiencia laboral...</span>
                        <Typing.Reset count={1} delay={500} />
                        <span>Cargando educación...</span>
                        <Typing.Reset count={1} delay={500} />
                    </Typing>
                 </div>
            </Col>
        </Row>

    )
}

export default LoadingText
