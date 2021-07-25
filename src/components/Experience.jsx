import React from 'react'
import { Card, Avatar, Typography } from 'antd'
import { Row, Col, List } from 'antd';


const { Meta } = Card;
const { Text } = Typography;

const Experience = (props) => {


    const data = [
        {
            company: "Kernel Technology",
            avatar:'https://media-exp1.licdn.com/dms/image/C4E0BAQEwNimfdgA0Qg/company-logo_200_200/0/1519881968176?e=1634774400&v=beta&t=CkcP-KTkzNuQAiB-_n0Wf68X4a1DvjK2aR_mZvKVXf8',
            job: 'CTO & Architect of solutions',
            competencies:['Python','Flask','Grafana','ReactJS','MySQL','MongoDB','Cloud AWS', "IA", 'API Rest'],
            start:"10/2020",
            end:"Current",
            description:[
                "- IT team leader",
                "- Introducing the development team in Python (Flask) and AWS Web Services",
                "- Implementing CI / CD",
                "- Designing the application architecture",
                "- Application and web development (Python, ReactJS, MongoDb)",
                "- Design of applications based on Artificial Intelligence"
            ]
        },
        {
            company: "Posicionamiento Movio (POSi)",
            avatar:'https://media-exp1.licdn.com/dms/image/C4E0BAQGCZ1QQ2MzwGw/company-logo_200_200/0/1519862670740?e=1634774400&v=beta&t=1-iS65g_L0R_ZrFX48k_iFqJfy2EX685KGnob3Pqd9Q',
            job: 'Full Stack Developer & Architect of solutions',
            competencies:['PHP','jQuery','MySQL','MongoDB','Cloud AWS','Highcharts', 'API Rest'],
            start:"03/2017",
            end:"09/2020",
            description:[
                "- Management and architecture design for mobile and web applications",
                "- Backend Development (Flask, AWS and MongoDB)",
                "- FrontEnd development of Web application (PHP and Javascript)",
                "- Mobile app operation supervision and tests",
                "- Maintenance and management of AWS services"
            ]
        },
        {
            company: "Yakult Monterrey",
            avatar:'https://media-exp1.licdn.com/dms/image/C4D0BAQEO8SovHcy7Yg/company-logo_200_200/0/1519952067019?e=1634774400&v=beta&t=DfvkNg9JS_97LtJk3-23CEiyMR7uKxh9DmbqTDSFbQI',
            job: 'IT manager',
            competencies:['PHP','MySQL','Subversion','Highcharts', 'API Rest'],
            start:"11/2011",
            end:"10/2016",
            description:[
                "- Manage and monitor developer activities",
                "- Planning and design of new developments and projects",
                "- Internal ERP development (Cake PHP, Javascript)",
                "- Database Administration (MySQL)",
                "- Subversion handling for version control"
            ]
        },
        {
            company: "Axtel Comunication",
            avatar:'https://media-exp1.licdn.com/dms/image/C560BAQFhiq6pR1RbHA/company-logo_200_200/0/1519888886193?e=1634774400&v=beta&t=HCnCk4WV7TmY6ueD7B7CRxUPCQDGMd99c1ZAspOKTBs',
            job: 'Data Analyst & C# Developer',
            competencies:['C#','MS-SQL','Oracle','DevExpress'],
            start:"03/2010",
            end:"10/2011",
            description:[
                "- Application and web development (C#, MSSQL. Oracle)",
                "- Development of KPI's dashboard for the Call Center operation.",
                "- Creation of Store Procedures and MSSQL DTS for data processing.",
                "- Use of Highcharts and devexpress as graphic libraries"
            ]
        },
        {
            company: "Universidad Interamericana de Desarrollo (UNID)",
            avatar:'https://media-exp1.licdn.com/dms/image/C4D0BAQFl0lnkQM9kxA/company-logo_200_200/0/1604330074307?e=1634774400&v=beta&t=JRWr0Z98HWGstD3UiuhVn0kN8ah1sklimDjbnAZS_Mo',
            job: 'PHP Developer',
            competencies:['Python','Flask','PHP','ReactJS','C#','',''],
            start:"03/2006",
            end:"03/2010",
            description:[
                "- ERP development with PHP and javascript",
                "- Development team leader (3 people in my charge)",
                "- Design of solutions based on PHP and MySQL",
                "- Development of web applications for Human Resources, Inventory and the page for students"
            ]
        },
        {
            company: "Avantel Telecommunications",
            avatar:'',
            job: '.NET Developer',
            competencies:['ASP.NET','MS-SQL'],
            start:"08/2005",
            end:"03/2006",
            description:[
                "- Programming of modules for Call Center for call control and handling with ASP.NET",
                "- Generation of campaign reports through web dashboard",
                "- BigData generation of different call databases using MS-SQL DTS"
            ]
        },
      ];

      if(!props.estado) {
        return (
            <Row>
                <Col span={24} >
                <div style={{textAlign: 'left', padding: '30px 0px 0px 30px', fontSize:40, fontFamily: 'Ubuntu'}}>
                        / Experience
                </div>
                </Col>
                <Col span={24} >
                    <div style={{textAlign: 'justify', padding: '30px 30px 0px 30px'}}>
                    <List grid={{
                                gutter: 24,
                                xs: 1,
                                sm: 1,
                                md: 1,
                                lg: 1,
                                xl: 1,
                            }}
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <Card title={
                                    <Meta
                                        avatar={<Avatar src={item.avatar} />} 
                                        title={item.company} 
                                        description={item.job} />} 
                                        extra={<Text code>{item.start} -- {item.end}</Text>}
                                    loading={props.estado}>
                                { item["description"].map((item,i) => <div style={{padding: '0px 0px 0px 30px'}}><h3>{item}</h3></div>)}
                                </Card>
                            </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        )
      } else {
        return (
            <>
                <Row>
                    <Col span={24} >
                        <div style={{textAlign: 'left', padding: '30px 0px 0px 30px', fontSize:40, fontFamily: 'Ubuntu'}}>
                                / Experience
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} >
                        <div style={{textAlign: 'justify', padding: '30px 30px 0px 30px'}}>
                            <Card title="Loading..." style={{ fontWeight: 'normal', fontSize:17 }} loading={props.estado}>
                                
                            </Card>
                        </div>
                    </Col>
                </Row>
            </>
        )
      }


   
}

export default Experience
