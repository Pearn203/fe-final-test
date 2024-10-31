import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import TeacherList from './components/TeacherList';
import CreateTeacherDrawer from './components/CreateTeacherDrawer';
import WorkLocations from './components/WorkLocations';
import CreateWorkLocationDrawer from './components/CreateWorkLocationDrawer';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Quản lý giáo viên và vị trí làm việc
        </Typography>

        <Grid container spacing={4}>
          {/* Phần danh sách giáo viên */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">Danh sách giáo viên</Typography>
              <CreateTeacherDrawer />
            </Box>
            <TeacherList />
          </Grid>

          {/* Phần danh sách vị trí làm việc */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">Danh sách vị trí làm việc</Typography>
              <CreateWorkLocationDrawer />
            </Box>
            <WorkLocations />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
