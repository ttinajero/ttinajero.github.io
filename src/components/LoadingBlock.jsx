import React from 'react'

import { Row, Col } from 'antd';
import { Skeleton } from 'antd'

const LoadingBlock = () => {
    return (
        <Row>
            <Col span={24}>
                <div style={{textAlign: 'left', padding: '50px 30px 0px 30px', fontSize:20, fontFamily: 'Ubuntu'}}>
                    <Skeleton active/>
                 </div>
            </Col>
        </Row>
    )
}

export default LoadingBlock
