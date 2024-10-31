import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const CreateTeacherDrawer = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/teachers', {
        userId: '123456789', // Thay bằng ID người dùng thực tế
        teacherPositionsId: ['670b2f9a6dce2acd384c6c65'], // Thay bằng ID vị trí công tác thực tế
        degrees: [
          {
            type: 'Bachelor',
            school: 'Đại học ABC',
            major: 'Toán học',
            year: 2010,
            isGraduated: true,
          },
        ],
        name,
        email,
        phoneNumber,
        address,
      });
      setOpen(false);
      setName('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
      alert('Tạo giáo viên thành công!');
    } catch (error) {
      console.error('Lỗi khi tạo giáo viên:', error);
      alert('Có lỗi xảy ra khi tạo giáo viên. Vui lòng thử lại.');
    }
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)} variant="contained">
        Tạo mới giáo viên
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box p={2} width={300} role="presentation">
          <Typography variant="h6">Tạo thông tin giáo viên mới</Typography>
          <TextField
            label="Họ và tên"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Số điện thoại"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Địa chỉ"
            fullWidth
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Lưu
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default CreateTeacherDrawer;
