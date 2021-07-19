import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd';

function Summary() {
    return (
        <Row>
            <Col span={24} >
                <div style={{textAlign: 'left', padding: '30px 30px 0px 30px', fontSize:60, fontFamily: 'Ubuntu'}}>
                    <Card title="Summary" style={{  }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </Col>
        </Row>
    )
}

export default Summary
