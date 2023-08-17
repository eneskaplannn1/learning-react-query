import { useRef } from "react";
import { useMutation } from "react-query";
import { addStudent } from "./services";

function AddStudentForm() {
  const teacherRef = useRef();
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const emailRef = useRef();
  const classRef = useRef();

  const { mutate, error, isError } = useMutation({
    mutationFn: addStudent,
    onSuccess: (data, variables, context) => {
      console.log("student created successfully");
      console.log(data, variables, context);
    },
    onMutate: (variables) => {
      console.log("this onMutate runs before mutateFn");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutate({
      name: nameRef.current.value,
      username: usernameRef.current.value,
      teacher: teacherRef.current.value,
      role: roleRef.current.value,
      class: classRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }
  // if (isError) return <div>{error.response.data.message}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>teacher</label>
        <input
          type="text"
          ref={teacherRef}
          defaultValue="64a6a31b5605dfc0d2a121ff"
        />
      </div>
      <div>
        <label>name</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>username</label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label>password</label>
        <input type="password" ref={passwordRef} />
      </div>
      <div>
        <label>role</label>
        <input type="text" ref={roleRef} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" defaultValue="example@gmail.com" ref={emailRef} />
      </div>
      <div>
        <label>Class</label>
        <input
          type="text"
          defaultValue="64acfc9ca69d5a98b5f266fc"
          ref={classRef}
        />
      </div>
      <button>Add new Student</button>
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
