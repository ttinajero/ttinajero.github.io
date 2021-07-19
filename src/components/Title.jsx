import React from 'react'
import { Row, Col } from 'antd';
import { FaGithub } from 'react-icons/fa';

const Title = () => {
    return (
        <Row>
            <Col span={24} >
                <div style={{textAlign: 'left', padding: '30px 0px 0px 30px', fontSize:60, fontFamily: 'Ubuntu'}}>
                    Octavio Tinajero / <a href="https://github.com/ttinajero/ttinajero.github.io" style={{ paddingLeft:0}} target="_blank"><FaGithub size={38} style={{ fill: '#000'}} /></a>
                 </div>
            </Col>
        </Row>
    )
}

export default Title
