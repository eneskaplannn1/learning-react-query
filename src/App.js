import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "./services/services";

import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import { NavLink } from "react-router-dom";
import Student from "./components/student";
import { Fragment, useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const { data, isLoading, error, isError } = useQuery({
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
      <Fragment>{students}</Fragment>
      <div className="form">
        <button onClick={() => setShowForm((prev) => !prev)}>
          Add New User
        </button>
        {showForm && <AddStudentForm />}
      </div>
    </div>
  );
}

export default App;
