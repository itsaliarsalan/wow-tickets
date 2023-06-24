import "../Style.css"
import { toast } from "react-toastify"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {registerBuyer } from "../../actions/userActions"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useSelector, useDispatch } from "react-redux"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "./stepperSteps"

export default function Register({ isSeller }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSigned, setIsSigned] = useState(isSeller)
  const [confirmPassword, setConfirmPassword] = useState("")

  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo, loading, error } = userRegister

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (isSigned) {
      if (password !== confirmPassword) {
        toast.warn("Password and confirm password don't match")
      }
      if (!isSeller) {
        console.log(username)
        dispatch(registerBuyer(username, email, password, isSeller))
      } else {
        localStorage.setItem(
          "seller-account",
          JSON.stringify({
            username,
            email,
            password,
          })
        )
        navigate("/terms")
      }
    } else {
      toast.warn("Kindly accepts our terms before signup!")
    }
  }

  useEffect(() => {
    if (userInfo) {
      if (!userInfo?.isSeller) {
        navigate("/")
      }
    }
  }, [userInfo, navigate])

  return (
    <section className='component sign-up'>
      <div className='container'>
        <h1>{isSeller ? "Login Information" : "Create An Account"}</h1>
        <h4>Provide required info to create new account.</h4>
        <hr />
        {isSeller && (
          <Stepper activeStep={1} alternativeLabel sx={{ mt: 4, mb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
        <form className='login' action='' onSubmit={submitHandler}>
          <input
            type='text'
            placeholder={isSeller ? "Username" : "Full Name"}
            required=''
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
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
          {!isSeller && (
            <div className='form-checkbox'>
              <input
                id='isSigned'
                type='checkbox'
                value={isSigned}
                onChange={() => setIsSigned(!isSigned)}
              />
              <label htmlFor='isSigned'>
                I agree to all{" "}
                <a
                  href='https://bit.ly/3pmLPuw'
                  target='_blank'
                  rel='noreferrer'
                >
                  terms
                </a>{" "}
                and <Link to='/privacy'>privacy policies</Link>
              </label>
            </div>
          )}
          <button type='submit' className='btn btn-main'>
            {isSeller ? "Next" : "Create Account"}
          </button>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant='danger'>{error}</MessageBox>}

          <hr />
          {!isSeller && (
            <Link to='/seller-info'>
              <span className='btn-link'>Join as a seller</span>
            </Link>
          )}
          <Link to='/signin'>
            Already have account? <span className='btn-link'>Login</span>
          </Link>
        </form>
      </div>
    </section>
  )
}
