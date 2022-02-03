import React, { useState } from 'react';
import { Row, Col, Button, Card, Typography, Table, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, deleteUser } from '../../redux/reducer/user';
import { ToastContainer, toast } from "react-toastify";

const successMsg = (message) => toast.success(message);

const Index = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [userId, setUserId] = useState(null);

    // fetch user list data from redux users store
    const users = useSelector((state) => state.users.users);

    const handleUserDelete = () => {
        // dispatch the delete user action
        dispatch(deleteUser({id:userId}))
        // hide the delete pop up
        onCancel()
        // display success message
        successMsg('User deleted successfully')
    }

    // hide the delete pop up
    const onCancel = () => setVisible(false)
    
    // User table header or column
    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          width: 50,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 150,
        },
        {
            title: 'City',
            dataIndex: 'city',
            width: 150,
        },
        {
            title: 'Actions',
            width: 100,
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Edit user">
                        <EditOutlined 
                            className="edit_icon" 
                            onClick={() => {
                                dispatch(getUser(record))
                                navigate(`/user/${record.id}`)
                            }
                        }
                        />
                    </Tooltip>
                    <Tooltip title="Delete user">
                        <DeleteOutlined 
                            className="delete_icon"
                            onClick={() => { 
                                setUserId(record.id); 
                                setVisible(true)
                                }
                            }
                            />
                    </Tooltip>
                </Space>
            )
        },
    ]

    // map through the user data and pass the result as data source to the table
    const results = users.map((user) => ({
        key: user.id,
        id: user.id,
        name: user.name,
        username: user?.username,
        email: user.email,
        city: user?.address?.city,
      }));

    return (
        <div className="container">
            <ToastContainer />
            <Typography.Title level={3}>Dashboard</Typography.Title>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Card title="User List">
                    <Row>
                        <Col span={24}>
                            <div className="btn_wrap">
                            <Button type="primary" size="middle" className="add_btn" onClick={() => navigate('/user/add')}><UserAddOutlined /> Add User</Button>
                            <Button size="middle" danger className="sort_btn"><SortAscendingOutlined /> Sort User</Button></div>
                        </Col>
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={results} pagination={false} scroll={{ y: 480 }} />
                    </Row>
                </Card>
            </Row>
            <DeleteModal
                visible={visible}
                onCancel={onCancel}
                onDelete={handleUserDelete}
            />
        </div>
    )
}

export default Index
