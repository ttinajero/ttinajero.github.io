import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd';
import { FaKeyboard,FaLaptop, FaCode } from 'react-icons/fa';

function Summary() {
    return (
        <Row>
            <Col span={24} >
                <div style={{textAlign: 'justify', padding: '30px 30px 0px 30px'}}>
                    <Card title="Summary" style={{ fontWeight: 'normal', fontSize:17 }}>
                        Full Stack Developer with more than 15 years of experience in application and web development (Frontend and Backend), implementing CI / CD, using 
                        methodologies (SCRUM, Kanban) and infrastructure management with the services of AWS Web Services.Highly efficient, results-oriented with a proven 
                        ability to effectively develop, manage and control the requirements that the company needs. I like challenging projects and being able to work under pressure.
                        <br/><br/>
                        <div style={{textAlign: 'center'}}>
                            <FaKeyboard size={25} style={{ fill: '#d3d3d3'}}/>  <FaLaptop size={25} style={{ fill: '#d3d3d3'}}/>  <FaCode size={25} style={{ fill: '#d3d3d3'}}/>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    )
}

export default Summary
