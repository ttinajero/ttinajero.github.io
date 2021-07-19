import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd';
import { FaLaptopCode, FaAws } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';



const Competencies = () => {
    return (
        <Row>
            <Col span={24} >
                <div style={{textAlign: 'justify', padding: '30px 30px 0px 30px'}}>
                    <Card title="Competencies" style={{ fontWeight: 'normal', fontSize:15 }}>
                        <Row gutter={[8, 8]}>
                            <Col span={3} align="middle"><FaLaptopCode  size={25}/></Col>
                            <Col span={3}>Python</Col>
                            <Col span={3}>Flask</Col>
                            <Col span={3}>PHP</Col>
                            <Col span={3}>ReactJS</Col>
                            <Col span={3}>JQuery</Col>
                            <Col span={3}>C#</Col>
                            <Col span={3}></Col>

                            <Col span={3} align="middle"><FiDatabase  size={25}/></Col>
                            <Col span={3}>MySQL</Col>
                            <Col span={3}>MongoDB</Col>
                            <Col span={3}>Oracle</Col>
                            <Col span={3}>MS-SQL</Col>
                            <Col span={3}></Col>
                            <Col span={3}></Col>
                            <Col span={3}></Col>
                            
                            <Col span={3} align="middle"><FaAws  size={25}/></Col>
                            <Col span={3}>AWS EC2</Col>
                            <Col span={3}>AWS API Gateway</Col>
                            <Col span={3}>AWS DynamoDB</Col>
                            <Col span={3}>AWS Transcribe</Col>
                            <Col span={3}>AWS Comprehend</Col>
                            <Col span={3}>AWS RDS</Col>
                            <Col span={3}></Col>

                            <Col span={3} align="middle"><GiArtificialIntelligence  size={25}/></Col>
                            <Col span={3}>Jupyter Netbooks</Col>
                            <Col span={3}>OpenCV</Col>
                            <Col span={3}>Pandas</Col>
                            <Col span={3}>Scikit-learn</Col>
                            <Col span={3}></Col>
                            <Col span={3}></Col>
                            <Col span={3}></Col>


                            <Col span={3} align="middle"><AiOutlineDeploymentUnit  size={25}/></Col>
                            <Col span={3}>CI/CD</Col>
                            <Col span={3}>UnitTest</Col>
                            <Col span={3}>Grafana</Col>
                            <Col span={3}>Highcharts JS</Col>
                            <Col span={3}>Storybook</Col>
                            <Col span={3}></Col>
                            <Col span={3}></Col>
                        </Row>
                    </Card>
                </div>
            </Col>
        </Row>
    )
}

export default Competencies
