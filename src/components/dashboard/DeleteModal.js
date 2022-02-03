import React from 'react'
import { Modal, Typography } from 'antd';

const DeleteModal = ({ visible, onCancel, onDelete}) => {
    return (
        <Modal
        visible={visible}
        title="Delete User"
        okText="Delete"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={onDelete}
        >
           <Typography.Title level={5}>Are you sure you want to delete this user?</Typography.Title> 
        </Modal>
    )
}

export default DeleteModal
