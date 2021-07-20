import React from 'react'
import { Row, Col, Typography } from 'antd';
import { FaGithub } from 'react-icons/fa';


const { Link } = Typography;

const Title = () => {
    return (
        <Row>
            <Col span={24} >
                <div style={{textAlign: 'left', padding: '30px 0px 0px 30px', fontSize:60, fontFamily: 'Ubuntu'}}>
                    Octavio Tinajero / <Link href="https://github.com/ttinajero/ttinajero.github.io" target="_blank"><FaGithub size={38} style={{ fill: '#800180'}} /></Link>
                 </div>
            </Col>
        </Row>
    )
}

export default Title
