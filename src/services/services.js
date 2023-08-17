import axios from "axios";

export const getAllStudents = async function () {
  return await axios.get("http://localhost:3000/api/v1/students?limit=20");
};

export const addStudent = async function (student) {
  student.role = "Student";
  student.password = student.password || "pass1234";
  console.log(student);

  try {
    return await axios.post("http://localhost:3000/api/v1/students", student);
  } catch (err) {
    console.log(err);
    throw new Error("failed to crete new student");
  }
};
export const updateStudent = async function (student) {
  student.role = "Student";
  delete student.password;
  try {
    return await axios.patch(
      `http://localhost:3000/api/v1/students/${student.x}`,
      student
    );
  } catch (err) {
    console.log(err);
    throw new Error("failed to update  student");
  }
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
  return await axios.delete(
    `http://localhost:3000/api/v1/students/${studentId}`
  );
};
