import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const CreateWorkLocationDrawer = () => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/teacher-positions', {
        code,
        name,
        des: description,
        isActive: true,
        isDeleted: false,
      });
      setOpen(false);
      setCode('');
      setName('');
      setDescription('');
      alert('Tạo vị trí công tác thành công!');
    } catch (error) {
      console.error('Lỗi khi tạo vị trí công tác:', error);
      alert('Có lỗi xảy ra khi tạo vị trí công tác. Vui lòng thử lại.');
    }
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)} variant="contained">
        Tạo vị trí công tác mới
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box p={2} width={300} role="presentation">
          <Typography variant="h6">Tạo vị trí công tác</Typography>
          <TextField
            label="Mã"
            fullWidth
            margin="normal"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            label="Tên"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Mô tả"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Lưu
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default CreateWorkLocationDrawer;
