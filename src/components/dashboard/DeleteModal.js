import React from 'react'
import { Modal, Typography, Button } from 'antd';

const DeleteModal = ({ visible, onCancel, onDelete}) => {
    return (
        <Modal
        visible={visible}
        title={<Typography.Title level={5}>Delete User</Typography.Title>}
        footer={[
            <Button onClick={onCancel}>Cancel</Button>,
            <Button className="del_btn" onClick={onDelete}>Delete</Button>
        ]}
        >
           <Typography.Title level={5}>Are you sure you want to delete this user?</Typography.Title> 
        </Modal>
    )
}

export default DeleteModal
