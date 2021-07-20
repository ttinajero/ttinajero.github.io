import React from 'react'
import { Card } from 'antd'
import { Row, Col, List } from 'antd';
import { FaLaptopCode, FaAws } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';

const { Meta } = Card;

const Competencies = () => {

    const iconLaptop = { color: "#264653", fontSize: "3em" };
    const iconDB = { color: "#2a9d8f", fontSize: "3em" };
    const iconAWS = { color: "#f4a261", fontSize: "3em" };
    const iconIA = { color: "#e9c46a", fontSize: "3em" };
    const iconDeploy = { color: "#e76f51", fontSize: "3em" };

    const data = [
        {
            title: <FaLaptopCode style={iconLaptop} />,
            subtitle: 'Programming Languages',
            objects:['Python','Flask','PHP','ReactJS','C#','','']
        },
        {
            title: <FiDatabase style={iconDB} />,
            subtitle: 'Databases',
            objects:['MySQL','MongoDB','DynamoDB','MS-SQL','Oracle','','']
        },
        {
            title: <FaAws style={iconAWS} />,
            subtitle: 'Amazon Web Services',
            objects:['AWS EC2','AWS API Gateway','AWS DynamoDB','AWS Transcribe','AWS Comprehend','AWS RDS','AWS Lambda']
        },
        {
            title: <GiArtificialIntelligence style={iconIA}/>,
            subtitle: 'Artificial Intelligence',
            objects:['Jupyter Netbooks','OpenCV','Pandas','Scikit-learn','','','']
        },
        {
            title: <AiOutlineDeploymentUnit style={iconDeploy}/>,
            subtitle: 'Others',
            objects:['CI/CD','UnitTest','Grafana','Highcharts JS','Storybook','','']
        },
      ];

    return (
        <Row>
            <Col span={24} >
            <div style={{textAlign: 'left', padding: '30px 0px 0px 30px', fontSize:40, fontFamily: 'Ubuntu'}}>
                    / Competencies
            </div>
            </Col>
            <Col span={24} >
                <div style={{padding: '30px 30px 0px 30px'}}>
                    <List grid={{
                            gutter: 24,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 5,
                            xl: 5,
                        }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <Card title={<Meta title={item.title} description={item.subtitle} />}>
                            { item["objects"].map((item,i) => <h3>{item}</h3>)}
                            </Card>
                        </List.Item>
                        )}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default Competencies
