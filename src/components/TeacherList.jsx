import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
} from "@mui/material";
import axios from "axios";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("/api/teachers", {
          params: {
            page: currentPage,
            limit: 10,
          },
        });
        setTeachers(response.data.teachers);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách giáo viên:", error);
      }
    };
    fetchTeachers();
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã</TableCell>
              <TableCell>Giáo viên</TableCell>
              <TableCell>Trình độ cao nhất</TableCell>
              <TableCell>Bộ môn</TableCell>
              <TableCell>Trạng thái công tác</TableCell>
              <TableCell>TT Công tác</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher._id}>
                <TableCell>{teacher.code}</TableCell>
                <TableCell>{teacher.userId.name}</TableCell>
                <TableCell>
                  {teacher.degrees.reduce((highest, degree) => {
                    if (degree.type === "Doctorate") return "Tiến sĩ";
                    if (degree.type === "Master") return "Thạc sĩ";
                    return "Cử nhân";
                  }, "Cử nhân")}
                </TableCell>
                <TableCell>
                  {teacher.teacherPositionsId
                    .map((position) => position.name)
                    .join(", ")}
                </TableCell>
                <TableCell>
                  {teacher.isActive ? "Đang công tác" : "Không còn công tác"}
                </TableCell>
                <TableCell>
                  {teacher.isDeleted ? "Tạm thời" : "Chính thức"}
                </TableCell>
                <TableCell>{teacher.userId.address}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Chi tiết
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default TeacherList;
