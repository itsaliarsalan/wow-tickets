import "../Style.css"
import React from "react"
import { Link } from "react-router-dom"

export default function Stripe() {
  const data = JSON.parse(localStorage.getItem("onboard"))

  const submitHandler = () => {
    window.location.replace(data.url)
    // console.log(data.url)
  }

  return (
    <section className='component sign-up'>
      <div className='container'>
        <h1>Setup Stripe</h1>
        <h4>Setup your Stripe account to get payouts.</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam
          et urna euismod consectetur sit amet vitae ligula. Nullam eget magna
          nunc. Nam dui ante, porta et convallis ut.
        </p>
        <hr />
        <button
          type='submit'
          className='btn btn-main'
          onClick={() => {
            submitHandler()
          }}
        >
          Start Onboarding
        </button>

        <hr />

        <Link to='/signin'>
          Already have account? <span className='btn-link'>Login</span>
        </Link>
      </div>
    </section>
  )
}
