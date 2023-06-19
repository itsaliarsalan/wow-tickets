import "./Style.css"
import { Link, useNavigate } from "react-router-dom"
import { register } from "../actions/userActions"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function RegisterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSeller, setIsSeller] = useState(false)
  const [isSigned, setIsSigned] = useState(false)
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
      } else {
        dispatch(register(name, email, password, isSeller))
      }
    } else {
      toast.warn("Kindly accepts our terms before signup!")
    }
  }
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard")
    }
  }, [userInfo, navigate])

  return (
    <section className='component sign-up'>
      <div className='container'>
        <h1>Create New Account</h1>
        <h4>Provide required info to create new account.</h4>

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
          <div className='form-checkbox'>
            <input
              id='isSeller'
              type='checkbox'
              placeholder='Become a seller'
              value={isSeller}
              onChange={() => setIsSeller(!isSeller)}
            />
            <label htmlFor='isSeller'>Become a seller.</label>
          </div>
          <div className='form-checkbox'>
            <input
              id='isSigned'
              type='checkbox'
              value={isSeller}
              onChange={() => setIsSigned(!isSigned)}
            />
            <label htmlFor='isSigned'>
              I agree to all <Link to='/terms'>terms</Link> and{" "}
              <Link to='/privacy'>privacy policies</Link>
            </label>
          </div>

          <button type='submit' className='btn btn-main'>
            Create Account
          </button>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant='danger'>{error}</MessageBox>}

          <hr />
          <a href='/signin'>Already have account? Login here</a>
        </form>
      </div>
    </section>
  )
}

export default RegisterForm
