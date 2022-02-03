import React, { useEffect } from 'react'
import { Row, Col, Form, Input, Card, Button, Typography } from 'antd';
import { SendOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import {NameRules, EmailRules} from './formRules'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from '../../redux/reducer/user';

const UpdateUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const successMsg = (message) => toast.success(message);

    // fetch user list data from redux users store
    const user = useSelector((state) => state.users.user);

    // redirect back to dashboard if there is nothing to edit in the event that the user refreshed the edit page
    useEffect(() => {
        if(Object.keys(user).length === 0){
            navigate('/')
        }
    },[user, navigate])

    // handles user update
    const onFinish = (values) => {
        values.id = user.id;
        values.username = user?.username;
        // dispatch the update user action
        dispatch(updateUser(values))
        // display success message
        successMsg('User updated successfully')
        // set 2 seconds delay then redirect to dashboard
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
        <div className="container">
            <ToastContainer />
            <Card title={<Typography.Title level={5}>Edit User</Typography.Title>} className="edit_form">
                <Form
                name="edit_user"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{
                    name: user.name,
                    email: user.email,
                }}
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
