import axios from "axios";

export const getAllStudents = async function () {
  return await axios.get("http://localhost:3000/api/v1/students?limit=20");
};

export const addStudent = async function (student) {
  console.log(student);
  return await axios.post("http://localhost:3000/api/v1/students", student);
};

export const getStudent = async function (studentId) {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/students/${studentId}`
    );
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch student data");
  }
};

export const deleteStudent = async function (studentId) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/students/${studentId}`
    );
    console.log("Başaryla silindi:", response.data);
  } catch (error) {
    throw new Error("Failed to delete student ");
  }
};
