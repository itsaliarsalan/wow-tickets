import { Link, useLocation } from "react-router-dom"
import "./Style.css"

function LoginForm() {
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get("redirect")
  const redirect = redirectInUrl ? redirectInUrl : "/"

  return (
    <section className='component sign-in'>
      <div className='container'>
        <h1>Hey, Welcome Back!</h1>
        <h4>Provide required info to login.</h4>
        <form className='login' action=''>
          <input type='text' placeholder='Username' required='' />
          <input type='password' placeholder='Password' required='' />
          <button type='submit' className='btn btn-main'>
            Login
          </button>
          <Link to='/'>Forgot Password?</Link>
          <hr />
          <Link to={`/signup?redirect=${redirect}`} className='text-center'>
            Don't have an account? Create here
          </Link>
        </form>
      </div>
    </section>
  )
}

export default LoginForm
