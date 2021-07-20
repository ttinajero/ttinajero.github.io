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
            <div style={{textAlign: 'left', padding: '30px 0px 0px 30px', fontSize:40, fontFamily: 'Ubuntu'}}>
                    / Competencies
            </div>
            </Col>
            <Col span={8}>
                <div style={{textAlign: 'justify', padding: '30px 30px 0px 30px'}}>
                    <Card title="Programming languages & frameworks" style={{ width: 500, fontWeight: 'normal', fontSize:15 }}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>Python</Col>
                            <Col span={12}>Flask</Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>PHP</Col>
                            <Col span={12}>ReactJS</Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>JQuery</Col>
                            <Col span={12}>C#</Col>
                        </Row>
                    </Card>
                </div>
                
            </Col>
            
        </Row>
    )
}

export default Competencies
