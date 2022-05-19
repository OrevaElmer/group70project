import React, {useState, useRef} from 'react'

import styled from 'styled-components'
import { InputForm, Button, Email, Pass } from './Login'
import {useAuth} from '../context/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
const SignupPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const { signup} = useAuth()
    const navigate = useNavigate()
    const Form = styled.form `
        padding: 0.2rem;
    `

    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== confirmRef.current.value){
            return setError('Passwords do not match!')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }
        catch {
           setError('Failed to create an account!') 
        }
        setLoading(false)
    }
    return (
        <InputForm>
            <h2>Welcome</h2>
            {error && <p>{error}</p>}
            <Form onSubmit={handleSubmit}>
            <Email type="email" placeholder="Enter your email" required ref={emailRef} />
            <Pass type="password" required ref={passwordRef}/>
            <Pass type="password" required ref={confirmRef}/>
            <label htmlFor="remember">
            
            <input type='checkbox' name='remember' value='remember me' />
            <span>Remember me</span>
        </label>
        
            <Button disabled={loading} type='submit'> Sign Up</Button>
            <h4>Already have an account? <Link to="/group70project">Sign In</Link></h4>
            </Form>
        </InputForm>
    )
}

export default SignupPage