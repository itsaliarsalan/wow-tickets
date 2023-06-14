import "./Style.css"
import { useNavigate } from "react-router-dom"
import { register } from "../actions/userActions"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

function RegisterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo, loading, error } = userRegister

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match")
    } else {
      dispatch(register(name, email, password))
    }
  }
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard")
    }
  }, [userInfo])

  return (
    <section className='component sign-up'>
      <div className='container'>
        <h1>Create New Account</h1>
        <h4>Provide required info to create new account.</h4>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}

        <form className='login' action='' onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Name'
            required=''
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <input
            type='email'
            placeholder='Email'
            required=''
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            type='password'
            placeholder='Password'
            required=''
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            required=''
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
          />
          <button type='submit' className='btn btn-main'>
            Create Account
          </button>
          <hr />
          <a href='/signin'>Already have account? Login here</a>
        </form>
      </div>
    </section>
  )
}

export default RegisterForm
