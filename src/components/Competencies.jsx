import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd';
import { FaLaptopCode, FaAws } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';



const Competencies = () => {

    let iconLaptop = { color: "#4281a4", fontSize: "3em" };
    let iconDB = { color: "#70c1b3", fontSize: "3em" };
    let iconAWS = { color: "#ffe066", fontSize: "3em" };
    let iconIA = { color: "#f25f5c", fontSize: "3em" };
    let iconDeploy = { color: "#50514f", fontSize: "3em" };

    return (
        <Row>
            <Col span={24} >
                <div style={{textAlign: 'justify', padding: '30px 30px 0px 30px'}}>
                    <Card title="Competencies" style={{ fontWeight: 'normal', fontSize:15 }}>
                        <Row gutter={[8, 8]}>
                            <Col span={3} align="middle"><FaLaptopCode style={iconLaptop} /></Col>
                            <Col span={3} align="middle">Python</Col>
                            <Col span={3} align="middle">Flask</Col>
                            <Col span={3} align="middle">PHP</Col>
                            <Col span={3} align="middle">ReactJS</Col>
                            <Col span={3} align="middle">JQuery</Col>
                            <Col span={3} align="middle">C#</Col>
                            <Col span={3} align="middle"></Col>

                            <Col span={3} align="middle"><FiDatabase  style={iconDB}/></Col>
                            <Col span={3} align="middle">MySQL</Col>
                            <Col span={3} align="middle">MongoDB</Col>
                            <Col span={3} align="middle">Oracle</Col>
                            <Col span={3} align="middle">MS-SQL</Col>
                            <Col span={3} align="middle"></Col>
                            <Col span={3} align="middle"></Col>
                            <Col span={3} align="middle"></Col>
                            
                            <Col span={3} align="middle"><FaAws  style={iconAWS}/></Col>
                            <Col span={3} align="middle">AWS EC2</Col>
                            <Col span={3} align="middle">AWS API Gateway</Col>
                            <Col span={3} align="middle">AWS DynamoDB</Col>
                            <Col span={3} align="middle">AWS Transcribe</Col>
                            <Col span={3} align="middle">AWS Comprehend</Col>
                            <Col span={3} align="middle">AWS RDS</Col>
                            <Col span={3} align="middle"></Col>

                            <Col span={3} align="middle"><GiArtificialIntelligence  style={iconIA}/></Col>
                            <Col span={3} align="middle">Jupyter Netbooks</Col>
                            <Col span={3} align="middle">OpenCV</Col>
                            <Col span={3} align="middle">Pandas</Col>
                            <Col span={3} align="middle">Scikit-learn</Col>
                            <Col span={3} align="middle"></Col>
                            <Col span={3} align="middle"></Col>
                            <Col span={3} align="middle"></Col>


                            <Col span={3} align="middle"><AiOutlineDeploymentUnit  style={iconDeploy}/></Col>
                            <Col span={3} align="middle">CI/CD</Col>
                            <Col span={3} align="middle">UnitTest</Col>
                            <Col span={3} align="middle">Grafana</Col>
                            <Col span={3} align="middle">Highcharts JS</Col>
                            <Col span={3} align="middle">Storybook</Col>
                            <Col span={3} align="middle"></Col>
                            <Col span={3} align="middle"></Col>
                        </Row>
                    </Card>
                </div>
            </Col>
        </Row>
    )
}

export default Competencies
