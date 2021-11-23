import React from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { loginThunk } from "../redux/auth/auth-thunks";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onLoginSubmit = (data) => {
    dispatch(loginThunk(data));
    resetInputField();
  };

  const resetInputField = () => {
    resetField("email");
    resetField("password");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
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
              type="text"
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

export default LoginPage;
