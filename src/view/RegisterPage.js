import React from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { registerThunk } from "../redux/auth/auth-thunks";
import { useDispatch } from "react-redux";

function RegisterPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onRegisterSubmit = (data) => {
    dispatch(registerThunk(data));
    resetInputField();
  };

  const resetInputField = () => {
    resetField("name");
    resetField("password");
    resetField("email");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <label htmlFor="nameInput">
            name:
            {errors.name?.type === "required" && <span> is required*</span>}
            <input
              type="text"
              id="nameInput"
              {...register("name", {
                required: true,
                maxLength: 80,
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              })}
            />
          </label>

          <label htmlFor="emailInput">
            email address:
            {errors.number?.type === "required" && <span> is required *</span>}
            <input
              type="text"
              // className={s.input}
              id="emailInput"
              {...register("email", {
                required: true,
                pattern: "/^S+@S+$/i",
              })}
            />
          </label>

          <label htmlFor="password">
            password:
            {errors.number?.type === "required" && <span> is required *</span>}
            <input
              type="password"
              // className={s.input}
              id="password"
              {...register("password", {
                required: true,
                pattern: "/^S+@S+$/i",
              })}
            />
          </label>

          <br />
          <button type="submit">
            {/* {isLoading ? "Adding..." : "Add contact"} */}
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
