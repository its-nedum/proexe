import React from 'react'
import { Row, Col, Form, Input, Card, Button } from 'antd';
import { SendOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import {NameRules, EmailRules} from './formRules'
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const onFinish = (values) => {

    }

    return (
        <div className="container">
            <Card title="Edit User" className="edit_form">
                <Form
                name="edit_user"
                form={form}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{}}
                onFinish={onFinish}
                >
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24}>
                            <Form.Item
                                name="name"
                                label="Name"
                                hasFeedback
                                rules={NameRules}
                            >
                                <Input size="large" className="input_fields" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                hasFeedback
                                rules={EmailRules}
                            >
                                <Input size="large" className="input_fields" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <div className="btn_wrap">
                                <Button danger className="cancel_btn" size="middle" onClick={() => navigate('/')}>
                                    <ArrowLeftOutlined /> Cancel
                                </Button>
                                <Button htmlType="submit" className="submit_btn" size="middle">
                                    Submit <SendOutlined />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form> 
            </Card>
        </div>
    )
}

export default UpdateUser
