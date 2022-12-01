import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError]=useState("")
  const {userSignIn} = useContext(AuthContext)
   
  const from = location.state?.from?.pathname || "/" 
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = data =>{
    userSignIn(data.email, data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from,{replace:true})
    })
    .catch(error=> {
      console.error(error)
      setError(error.message)
    })
      
  }
  

  return (
    <div className="lg:flex justify-center items-center lg:h-[600px]">
      <div className="border-2 border-secondary lg:p-5 rounded-lg mt-5">
        <h2 className="font-bold text-2xl text-primary text-center pb-5">
          login !!!
        </h2>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="w-96"
        >
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
             {errors.email?.type === 'required' && <p className="text-red-400 my-2" role="alert">Email address is required</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true, minLength:{value:6 , message:"password must be 6 character"}})}
              type="password"
              className="input input-bordered w-full"
              aria-invalid={errors.password ? "true" : "false"}
              
            />
            {errors.password?.type === 'required' && <p className="text-red-400 my-2" role="alert">Password is required</p>}
            {errors.password && <p className="text-red-400 my-2">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">forget password ?</span>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary w-full text-white mt-5"
          />
          <p>{error}</p>
          <p className="text-center mb-3">
            <span className="label-text">
              new to doctor website ? please
              <Link className="text-secondary text-lg" to="/signup">
                Register
              </Link>
            </span>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">login with google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
