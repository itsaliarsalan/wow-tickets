import "../Style.css"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "./stepperSteps"

export default function SellerInfo() {
	const [name, setName] = useState("")
	const [address, setAddress] = useState("")
	const [company, setCompany] = useState("")
	const [tax, setTax] = useState("")
	const [supportEmail, setSupportEmail] = useState("")

	const navigate = useNavigate()

	const submitHandler = e => {
		e.preventDefault()
		localStorage.setItem(
			"seller-info",
			JSON.stringify({
				name,
				address,
				company,
				tax,
				supportEmail,
			})
		)
		if (name && address && company && tax && supportEmail) {
			navigate("/seller-signup")
		} else {
			toast.warn("Please fill all the details.")
		}
	}

	return (
		<section className="component sign-up">
			<div className="container">
				<h1>Provide Your Information</h1>
				<h4>Provide required info to create new account.</h4>
				<Stepper activeStep={0} alternativeLabel sx={{ mt: 4, mb: 5 }}>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<form className="login" action="" onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Full Name"
						required=""
						value={name}
						onChange={e => {
							setName(e.target.value)
						}}
					/>
					<input
						type="text"
						placeholder="Address"
						required=""
						value={address}
						onChange={e => {
							setAddress(e.target.value)
						}}
					/>
					<input
						type="text"
						placeholder="Company Name"
						required=""
						value={company}
						onChange={e => {
							setCompany(e.target.value)
						}}
					/>
					<input
						type="text"
						placeholder="Tax Identification No."
						required=""
						value={tax}
						onChange={e => {
							setTax(e.target.value)
						}}
					/>
					<input
						type="email"
						placeholder="Support Email"
						required=""
						value={supportEmail}
						onChange={e => {
							setSupportEmail(e.target.value)
						}}
					/>

					<button type="submit" className="btn btn-main">
						Next
					</button>

					<hr />
					<Link to="/signin">
						Already have account? <span className="btn-link">Login</span>
					</Link>
				</form>
			</div>
		</section>
	)
}
