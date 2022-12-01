import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [signError, setSignError]=useState('')
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {createUser, updateUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data)
    setSignError(" ")
    createUser(data.email, data.password)
    .then(result=>{
      const user = result.user
      console.log(user);
      toast('Successfully create account')
      const userInfo ={
        displayName:data.name
      }
      updateUser(userInfo)
      .then(()=>{
        navigate('/')
      })
      .catch(err =>{
        console.error(err)
      })
      
    })
    .catch(error => {
      console.error(error)
      setSignError(error.message)

    })
  };

  return (
    <div>
      <div className="lg:flex justify-center items-center lg:h-[600px]">
        <div className="border-2 border-secondary lg:p-5 rounded-lg mt-5">
          <h2 className="font-bold text-2xl text-primary text-center pb-5">
            Register !!!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-96">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input input-bordered w-full"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-400 my-2" role="alert">
                  Your name is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input input-bordered w-full"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-400 my-2" role="alert">
                  Email address is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be six character",
                  },
                  pattern: {value:/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])/, message:"password must be strong" }
                })}
                type="password"
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-red-400 my-2">{errors.password?.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="Sign up"
              className="btn btn-accent w-full text-white mt-5"
            />
            {signError && <p className="text-center font-bold text-error">{signError}</p>}
            <p className="text-center mb-3">
              <span className="label-text">
                Already have an account ? please
                <Link className="text-secondary text-lg" to="/login">
                  Log in
                </Link>
              </span>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full">
              login with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
