import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudent, updateStudent } from "../services/services";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import StudentForm from "./StudentForm";

function AddStudentForm({ doc, isEditing }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: isEditing ? updateStudent : addStudent,
    onSuccess: (data, variables, context) => {
      // console.log(data, variables, context);
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
      toast.success(
        `student ${isEditing ? "updated" : "created"} successfully`
      );
      reset();
    },
    // onMutate: (variables) => {
    //   console.log("this onMutate runs before mutateFn");
    // },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }
  function onError(errors) {
    // console.log(errors);
  }

  return (
    <StudentForm
      isEditing={isEditing}
      doc={doc}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      mutate={mutate}
      onSubmit={onSubmit}
      onError={onError}
      isCreating={isCreating}
    />
  );
}

export default AddStudentForm;
