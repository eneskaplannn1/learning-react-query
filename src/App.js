import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "./services";

import "./App.css";
import AddStudentForm from "./AddStudentForm";
import { NavLink } from "react-router-dom";
import Student from "./student";

function App() {
  const { data, isLoading, error, isError, isFetching } = useQuery({
    queryKey: ["students"],
    queryFn: getAllStudents,
    cacheTime: 5 * 60 * 1000, // ! its default
    staleTime: 0,
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>errorMSG = {error.message}</div>;

  const students = data.data.document.map((doc) => {
    return <Student key={doc._id} doc={doc} />;
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
