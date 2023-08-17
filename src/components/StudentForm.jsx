function StudentForm(props) {
  //prettier-ignore
  const {handleSubmit,register,isCreating,errors,onError,onSubmit,doc,isEditing,} = props;
  //   console.log(doc);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label htmlFor="teacher">Teacher</label>
          <input
            type="text"
            id="teacher"
            defaultValue={doc ? doc.teacher : "64a6a31b5605dfc0d2a121ff"}
            {...register("teacher", { required: "This field is required" })}
          />
          {errors?.teacher?.message && <span>{errors.teacher.message}</span>}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: "This field is required" })}
            type="text"
            id="name"
            defaultValue={doc ? doc.name : "name_0"}
          />
          {errors?.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            {...register("username", { required: "This field is required" })}
            type="text"
            id="username"
            defaultValue={doc ? doc.username : "username"}
          />
          {errors?.username?.message && <span>{errors.username.message}</span>}
        </div>

        {!isEditing && (
          <>
            <div>
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                type="password"
                id="password"
                defaultValue="dummy_password"
              />
              {errors?.password?.message && (
                <span>{errors.password.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="role">Role</label>
              <input
                {...register("role")}
                type="text"
                id="role"
                defaultValue="Student"
              />
              {errors?.role?.message && <span>{errors.role.message}</span>}
            </div>
          </>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            id="email"
            defaultValue={doc ? doc.email : "example@gmail.com"}
          />
          {errors?.email?.message && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="class">Class</label>
          <input
            {...register("class", { required: "This field is required" })}
            type="text"
            id="class"
            defaultValue={doc ? doc.class : "64acfc9ca69d5a98b5f266fc"}
          />
          {errors?.class?.message && <span>{errors.class.message}</span>}
        </div>
        <input
          type="hidden"
          id="x"
          {...register("x")}
          value={doc ? doc._id : ""}
        />
        <button type="reset">Cancel</button>
        <button disabled={isCreating}>
          {isCreating
            ? "creating new user"
            : isEditing
            ? "Edit User"
            : "Add new Student"}
        </button>
      </form>
    </>
  );
}

export default StudentForm;
