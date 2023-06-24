import "../Style.css"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { registerSeller } from "../../actions/userActions"
import { useDispatch, useSelector } from "react-redux"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "./stepperSteps"

export default function Terms() {
  const [isSigned, setIsSigned] = useState(false)
  const items = JSON.parse(localStorage.getItem("seller-info"))
  const seller = JSON.parse(localStorage.getItem("seller-account"))

  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo, loading, error } = userRegister

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (isSigned) {
      dispatch(
        registerSeller(
          seller.username,
          seller.email,
          seller.password,
          true,
          items
        )
      )
    } else {
      toast.warn("Accept our terms of sale before proceed.")
    }
  }
  useEffect(() => {
    if (userInfo) {
      localStorage.setItem(
        "onboard",
        JSON.stringify({
          url: userInfo?.accountLink,
        })
      )
      navigate("/seller-onboard")
    }
  }, [dispatch, userInfo, navigate])

  return (
    <section className='component sign-up'>
      <div className='container'>
        <h1>Accept Terms of Sales</h1>
        <Stepper activeStep={2} alternativeLabel sx={{ mt: 4, mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <iframe
          title='terms'
          src='/images/terms.pdf'
          name='myiFrame'
          height='400px'
          width='700px'
        ></iframe>
        <form className='login' action='' onSubmit={submitHandler}>
          <div className='form-checkbox'>
            <input
              id='isSigned'
              type='checkbox'
              value={isSigned}
              onChange={() => setIsSigned(!isSigned)}
            />
            <label htmlFor='isSigned'>
              I agree to all terms and privacy policies.
            </label>
          </div>

          <button type='submit' className='btn btn-main'>
            Next
          </button>
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>{error}</span>
          ) : (
            <></>
          )}
          <hr />
          <Link to='/signin'>
            Already have account? <span className='btn-link'>Login</span>
          </Link>
        </form>
      </div>
    </section>
  )
}
