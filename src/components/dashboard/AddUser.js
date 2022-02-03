import React from 'react'
import { Row, Col, Form, Input, Card, Button } from 'antd';
import { SendOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import {NameRules, EmailRules} from './formRules'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/reducer/user';
import { randomNumberGenerator } from '../helpers/utils';
import { ToastContainer, toast } from "react-toastify";

const successMsg = (message) => toast.success(message);

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onFinish = (values) => {
        // generate a random id for this user
        values.id = randomNumberGenerator()
        // dispatch the addUser action
        dispatch(addUser(values))
        // display success message
        successMsg('A new user added successfully')
        // set 2 seconds delay then redirect to dashboard
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
        <div className="container">
            <ToastContainer />
            <Card title="Add User" className="add_form">
                <Form
                name="add_user"
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

export default AddUser
