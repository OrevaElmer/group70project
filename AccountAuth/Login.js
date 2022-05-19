import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
export const InputForm = styled.div `
    margin: 0 32px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4em;

`
export const Email = styled.input `
    padding: 0.5rem;
    width: 70vw;
`
export const Pass = styled.input `
    padding: 0.5rem;
    width: 70vw;
`
export const Button = styled.button `
    width: 70vw;
    background-color: black;
    color: white;
    padding: 0.4em;
`
export const Form = styled.form `
    padding: 0.2rem;
    display: grid;
    gap: 0.3rem;
`
const LoginPage = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            await login(emailRef.current.value, passRef.current.value)
            navigate('/')
        }
        catch {
            console.log(error)
            setError('Credentials do not match. Log in failed!')
        }
    }
     return (
        <InputForm>
        <h2>Welcome back</h2>
        {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
        <Email type='email' placeholder='Enter your email' required ref={emailRef}/>
        <Pass type='password' required ref={passRef}/>
        <label htmlFor="remember">
            
            <input type='checkbox' name='remember' value='remember me' />
            <span>Remember me</span>
        </label>
        <Link to='/changePass'><h4>Forgot password</h4></Link>
        <Button type="submit">Sign In</Button>
        </Form>
        <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>
        </InputForm>
    )
}

export default LoginPage