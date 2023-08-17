import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../App.css";
import { deleteStudent } from "../services/services";
import { toast } from "react-hot-toast";
import { useState } from "react";
import AddStudentForm from "./AddStudentForm";

function Student({ doc }) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();
  // console.log(doc);
  const { mutate, isIdle } = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      toast.success("student successfully deleted");
    },
    onError: () => {
      toast.error("student can't deleted");
    },
  });

  function handleClick(e) {
    e.preventDefault();
    mutate(e.target.value);
  }

  return (
    <>
      <div className="student">
        <div>{doc.name}</div>
        <div>{doc.username}</div>
        <div>{doc._id}</div>
        <div>
          <button disabled={!isIdle} value={doc._id} onClick={handleClick}>
            Delete
          </button>
          <button onClick={() => setIsEditing((prev) => !prev)}>Edit</button>
        </div>
      </div>
      {isEditing && <AddStudentForm doc={doc} isEditing={isEditing} />}
    </>
  );
}

export default Student;
