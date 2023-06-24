import "../Style.css"
import React from "react"
import { Link } from "react-router-dom"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "./stepperSteps"

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
        <Stepper activeStep={2} alternativeLabel sx={{ mt: 4, mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
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
