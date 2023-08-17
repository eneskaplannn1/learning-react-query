import { useQuery } from "react-query";
import { getAllStudents } from "./services";

import "./App.css";
import AddStudentForm from "./AddStudentForm";
import { NavLink } from "react-router-dom";

function App() {
  const { data, isLoading, error, isError, isFetching } = useQuery({
    queryKey: ["students"],
    queryFn: getAllStudents,
    cacheTime: 5 * 60 * 1000, // ! its default
    staleTime: 20 * 1000,
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>errorMSG = {error.message}</div>;

  const students = data.data.document.map((doc) => {
    return (
      <div key={doc._id} className="student">
        <div>{doc.name}</div>
        <div>{doc.username}</div>
        <div>{doc._id}</div>
        <button>Delete</button>
      </div>
    );
  });

  return (
    <div className="container">
      <NavLink to="/deneme">deneme</NavLink>
      <div>{students}</div>
      <div className="form">
        <AddStudentForm />
      </div>
    </div>
  );
}

export default App;
