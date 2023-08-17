import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { deleteStudent } from "./services";
import { toast } from "react-hot-toast";

function Student({ doc }) {
  const queryClient = useQueryClient();

  const { mutate, isIdle } = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      toast.success("cabin successfully deleted");
    },
    onError: () => {
      toast.error("cabin can't deleted");
    },
  });

  function handleClick(e) {
    e.preventDefault();
    mutate(e.target.value);
  }

  return (
    <div className="student">
      <div>{doc.name}</div>
      <div>{doc.username}</div>
      <div>{doc._id}</div>
      <button disabled={!isIdle} value={doc._id} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Student;
