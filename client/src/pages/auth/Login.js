import "../../components/Style.css"
import { useEffect, useState } from "react"
import { signin } from "../../actions/userActions"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useSelector, useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function LoginForm(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { search } = useLocation()
  const navigate = useNavigate()
  const redirectInUrl = new URLSearchParams(search).get("redirect")
  const redirect = redirectInUrl ? redirectInUrl : "/"

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo, loading, error } = userSignin

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [redirect, userInfo, navigate])

  return (
    <section className='component sign-in'>
      <div className='container'>
        <h1>Hey, Welcome Back!</h1>
        <h4>Provide required info to login.</h4>
        <form className='login' onSubmit={submitHandler}>
          <input
            type='email'
            placeholder='Email'
            required=''
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            type='password'
            placeholder='Password'
            required=''
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button type='submit' className='btn btn-main'>
            Login
          </button>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant='danger'>{error}</MessageBox>}

          <Link to='/'>
            <span className='btn-link'>Forgot Password?</span>
          </Link>

          <Link to='/buyer-signup'>
            Don't have any account?{" "}
            <span className='btn-link'>Register Now</span>
          </Link>
        </form>
      </div>
    </section>
  )
}
