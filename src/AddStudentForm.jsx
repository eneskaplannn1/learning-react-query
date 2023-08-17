import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudent } from "./services";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

function AddStudentForm() {
  const teacherRef = useRef();
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const emailRef = useRef();
  const classRef = useRef();

  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: addStudent,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
      toast.success("student created successfully");
    },
    onMutate: (variables) => {
      console.log("this onMutate runs before mutateFn");
    },
    onError: () => {
      toast.error("student can't  created");
    },
  });

  function handleSubmitForm(data) {
    console.log(data);
    mutate(data);
  }
  // if (isError) return <div>{error.response.data.message}</div>;

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label htmlFor="teacher">Teacher</label>
        <input
          type="text"
          id="teacher"
          defaultValue="64a6a31b5605dfc0d2a121ff"
          {...register("teacher")}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          {...register("name")}
          type="text"
          id="name"
          defaultValue="name_0"
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          {...register("username")}
          type="text"
          id="username"
          defaultValue="username_0"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          id="password"
          defaultValue="asdasdasd"
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input
          {...register("role")}
          type="text"
          id="role"
          defaultValue="Student"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          id="email"
          defaultValue="example@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="class">Class</label>
        <input
          {...register("class")}
          type="text"
          id="class"
          defaultValue="64acfc9ca69d5a98b5f266fc"
        />
      </div>
      <button type="reset">Cancel</button>
      <button disabled={isLoading}>Add new Student</button>
    </form>
  );
}

export default AddStudentForm;

// "_id": "64a6a9a21220e1126fa2553c",
// "teacher": "64a6a31b5605dfc0d2a121ff",
// "name": "Daniel Johnson",
// "username": "daniel_johnson",
// "password": "pass1234",
// "role": "Student",
// "email": "daniel_johnson@example.co",
// "class": "64acfc9ca69d5a98b5f266fc",
// "verified": "true"
