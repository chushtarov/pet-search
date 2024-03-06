import React, { ChangeEvent, FormEvent, useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
const hendleSignUp = (e: FormEvent) => {
    e.preventDefault();
}

    const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        console.log(login, password)
    }
  return (
    <div className='bg-[#928f8f]'>
        <h1>Login</h1>
        <form onSubmit={hendleSignUp}>
            <input 
            placeholder='login'
            onChange={handleLogin}
            value={login}
            type="text" />
            <input 
            placeholder='passsword'
            onChange={handlePassword}
            value={password}
            type="password" />
            <button type='submit'>Войти</button>
        </form>
    </div>
  )
}

export default Login