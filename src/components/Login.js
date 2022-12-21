import "../App.css";
import { useState } from "react";
import googleIcon from "../assets/google.png";
import appleIcon from "../assets/apple.svg";
import passwordShow from "../assets/eye-show.svg";
import hidePassword from "../assets/eye-hide.svg";
import validator from "validator";
import { Link } from "react-router-dom";


function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailState, setEmailState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  function handleShowPassword() {
    setShowPassword(!showPassword)
  }
  return (
    <div className="bg-gray-100 pt-16 pb-16 h-full">
      <div className="w-4/5 md:w-2/5 bg-white px-5 pb-10 mx-auto rounded-lg">
        <div className="grid grid-cols-12 gap-2">
          <div class="col-span-12">
            <h1 className="text-2xl font-medium mt-4">Login</h1>
          </div>

          <div class="col-span-12 mt-4">
            { !isValidEmail && emailState?(<label className="text-red-600 text-start font-medium text-base">Email Address</label>):(<label className="text-gray-800 text-start font-medium text-base">Email Address</label>)}
            <input
            onChange={(e) => {
              setEmailState(e.target.value);
              setIsValidEmail(validator.isEmail(e.target.value));
            }}
              type="email"
              id="email"
              name="email"
              placeholder=""
              className={`${!isValidEmail && emailState ? "w-full shadow-sm  bg-white mt-2 rounded border border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ": "w-full shadow-sm  bg-white mt-2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  }`}

            ></input>
            {!isValidEmail && emailState && (
            <p className="bg-red-100 mt-2 p-2 rounded text-red-600 text-start font-medium text-base">Please enter valid email</p>
          )}
          </div>
          <div class="col-span-12 mt-2">
            <label
              for="email"
              className="text-gray-800 text-start font-medium text-base"
            >
              Password
            </label>
            <div class="relative" >
        <div class="absolute inset-y-0 right-2 top-2 flex items-center pl-3 cursor-pointer" >
          {showPassword?(<img src={hidePassword} width={30} alt="" onClick={() => handleShowPassword()}/>) :(<img src={passwordShow} width={30} onClick={() => handleShowPassword()} alt=''/>)}
           
           
        </div>
        <input
              type={`${showPassword ? "text" : "password"}`}
              onChange={(e) => {
                setPasswordState(e.target.value);
              }}
              id="email"
              name="email"
              placeholder=""
              class="w-full shadow-sm bg-white mt-2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
        
    </div>

          </div>

          <div class="col-span-12 md:col-span-6">
          
            <div class="flex items-center mt-2 md:mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-gray-800 md:text-start font-medium text-base"
              >
                Keep me logged in{" "}
              </label>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6">
            <p className="text-indigo-500 md:mt-2 font-medium text-base md:text-right">Forgot Password?</p>
          </div>
          <div class="col-span-12">
            <button  className={`${isValidEmail && passwordState ? 'text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ' : 'text-black w-full bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg  cursor-not-allowed'}`} >
              Login
            </button>
          </div>
          <div class="col-span-12 md:col-span-6">
            <button class="bg-white mt-2 flex md:w-9/10 w-full rounded hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
              <img
                src={googleIcon}
                alt=""
                width={20}
                height={10}
                className="mr-2 mt-1"
              />
              Sign up with google
            </button>
          </div>
          <div class="col-span-12 md:col-span-6">
            <button class="bg-white mt-2 md:ml-3 flex md:w-9/10 w-full rounded hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
              <img src={appleIcon} alt="" width={20} className="mr-2 mt-1" />
              Sign up with google
            </button>
          </div>
          <div class="col-span-12">
            <p class="ml-2 text-gray-800 text-start font-medium text-base mt-4">
              Not a member? <span className="text-indigo-500 cursor-pointer">
              <Link to='/'>Sign up</Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
