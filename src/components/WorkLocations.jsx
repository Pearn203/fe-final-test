import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const WorkLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/teacher-positions');
        setLocations(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách vị trí công tác:', error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Mã</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location, index) => (
            <TableRow key={location._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{location.code}</TableCell>
              <TableCell>{location.name}</TableCell>
              <TableCell>{location.isActive ? 'Hoạt động' : 'Không hoạt động'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkLocations;
