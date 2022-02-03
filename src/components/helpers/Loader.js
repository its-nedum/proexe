import React from 'react';
import {Skeleton, Row, Col} from 'antd';

export const Loader = () => {
    return (
        <div className="container">
            {
                loaders.map((_, index) => (
                    <Row key={index}>
                        <Col span={24}>
                            <Skeleton active />
                        </Col>
                    </Row>
                ))
            } 
        </div>
    )
}
const loaders = [1,2,3,4]