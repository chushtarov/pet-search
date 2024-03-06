import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const hendleSignUp = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(login, password);
  };

//   if (token) {
//     navigate("/");
//   }

  return (
    <div className="bg-slate-200 w-[500px] m-auto mt-[210px] rounded-xl">
      <h1 className="text-center pt-10 text-[24px] uppercase">Авторизация</h1>
      <form className="flex flex-col" onSubmit={hendleSignUp}>
        <input
          className="w-[260px] mt-10 m-auto  h-[40px] rounded-full pl-3 focus:outline-none focus:ring-1 focus:ring-orange-400"
          placeholder="login"
          onChange={handleLogin}
          value={login}
          type="text"
        />
        <input
          className="w-[260px] mt-5 m-auto focus:outline-none focus:ring-1 focus:ring-orange-400 h-[40px] rounded-full pl-3"
          placeholder="passsword"
          onChange={handlePassword}
          value={password}
          type="password"
        />
        <button
          className=" w-[173px] uppercase h-[40px] text-[#f9961e] m-auto my-10 bg-[#fff] rounded-full text-sm hover:bg-[#f9961e] hover:text-white hover:border-orange-400 hover:border border border-orange-400"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
