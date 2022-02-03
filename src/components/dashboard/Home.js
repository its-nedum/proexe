import React, { useState } from 'react';
import { Row, Col, Button, Card, Typography, Table, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const Index = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [toDelete, setToDelete] = useState(null)

    const handleUserDelete = () => {
        console.log(toDelete)
        setVisible(false)
    }

    const onCancel = () => setVisible(false)
    

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
                            onClick={() => navigate(`/user/${record.id}`)}
                        />
                    </Tooltip>
                    <Tooltip title="Delete user">
                        <DeleteOutlined 
                            className="delete_icon"
                            onClick={() => { 
                                setToDelete(record.id); 
                                setVisible(true)}
                            }
                            />
                    </Tooltip>
                </Space>
            )
        },
    ]

    const users = [
        {
          key: 1,
          id: 1,
          name: 'Mike Doe',
          username: 'mike_man',
          city: '10 Downing Street',
          email: 'markdoe@gmail.com'
        },
        {
            key: 2,
            id: 2,
            name: 'Mike Doe',
            username: 'mike_man',
            city: '10 Downing Street',
            email: 'markdoe@gmail.com'
          },
          {
            key: 3,
            id: 3,
            name: 'Mike Doe',
            username: 'mike_man',
            city: '10 Downing Street',
            email: 'markdoe@gmail.com'
          },
          {
              key: 4,
              id: 4,
              name: 'Mike Doe',
              username: 'mike_man',
              city: '10 Downing Street',
              email: 'markdoe@gmail.com'
            },
            {
                key: 5,
                id: 5,
                name: 'Mike Doe',
                username: 'mike_man',
                city: '10 Downing Street',
                email: 'markdoe@gmail.com'
              },
      ];

    return (
        <div className="container">
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
                        <Table columns={columns} dataSource={users} pagination={false} scroll={{ y: 480 }} />
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
