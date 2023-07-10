import "./Style.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "./stepperSteps"
import {
	Box,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
} from "@mui/material"

import logo from "../../assets/250x150.svg"

export default function SellerInfo() {
	const [name, setName] = useState("")
	const [company, setCompany] = useState("")
	const [tax, setTax] = useState("")
	const [supportEmail, setSupportEmail] = useState("")
	const [phone, setPhone] = useState("")

	// Address
	// eslint-disable-next-line
	const [address, setaddress] = useState("")
	const [adrStreetOne, setAdrStreetOne] = useState("")
	const [adrStreetTwo, setAdrStreetTwo] = useState("")
	const [adrCity, setAdrCity] = useState("")
	const [adrState, setAdrState] = useState("")
	const [adrPostalCode, setAdrPostalCode] = useState("")
	// eslint-disable-next-line
	const [countries, setCountries] = useState([
		{ code: "PK", name: "Pakistan" },
		{ code: "IN", name: "India" },
	])

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
		<section className="component auth sign-up">
			<Container maxWidth="sm">
				<Paper
					elevation="3"
					sx={{ pt: "2rem", pb: "1rem", px: { xs: "1rem", md: "2rem" } }}
				>
					<Box
						className="logo"
						sx={{
							"& img": {
								maxWidth: { xs: "8rem", md: "10rem" },
							},
						}}
					>
						<img src={logo} alt="wowtickets logo" />
					</Box>
					<h2>Provide Your Information</h2>
					<Stepper activeStep={0} alternativeLabel sx={{ mt: 4, mb: 5 }}>
						{steps.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<form className="login" action="" onSubmit={submitHandler}>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="fullname">Full Name</label>
							<Stack flexDirection="row" sx={{ gap: 1 }} id="fullname">
								<TextField
									type="text"
									placeholder="First Name"
									required
									value={name}
									onChange={e => {
										setName(e.target.value)
									}}
									size="small"
									sx={{
										"& .MuiInputBase-root": {
											borderRadius: "8px",
											py: "0.2rem",
										},
									}}
									fullWidth
								/>
								<TextField
									type="text"
									placeholder="Last Name"
									required
									value={name}
									onChange={e => {
										setName(e.target.value)
									}}
									size="small"
									sx={{
										"& .MuiInputBase-root": {
											borderRadius: "8px",
											py: "0.2rem",
										},
									}}
									fullWidth
								/>
							</Stack>
						</Stack>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="address">Address</label>
							<Stack id="address" spacing={1}>
								<TextField
									type="text"
									placeholder="Street One"
									required
									value={adrStreetOne}
									onChange={e => {
										setAdrStreetOne(e.target.value)
									}}
									size="small"
									sx={{
										"& .MuiInputBase-root": {
											borderRadius: "8px",
											py: "0.2rem",
										},
									}}
									fullWidth
								/>
								<TextField
									type="text"
									placeholder="Street Two"
									required
									value={adrStreetTwo}
									onChange={e => {
										setAdrStreetTwo(e.target.value)
									}}
									size="small"
									sx={{
										"& .MuiInputBase-root": {
											borderRadius: "8px",
											py: "0.2rem",
										},
									}}
									fullWidth
								/>
								<TextField
									type="text"
									placeholder="City"
									required
									value={adrCity}
									onChange={e => {
										setAdrCity(e.target.value)
									}}
									size="small"
									sx={{
										"& .MuiInputBase-root": {
											borderRadius: "8px",
											py: "0.2rem",
										},
									}}
									fullWidth
								/>
								<Stack direction="row" spacing={1}>
									<TextField
										type="text"
										placeholder="State/Region"
										required
										value={adrState}
										onChange={e => {
											setAdrState(e.target.value)
										}}
										size="small"
										sx={{
											"& .MuiInputBase-root": {
												borderRadius: "8px",
												py: "0.2rem",
											},
										}}
										fullWidth
									/>
									<TextField
										type="number"
										placeholder="Postal Code"
										required
										value={adrPostalCode}
										onChange={e => {
											setAdrPostalCode(e.target.value)
										}}
										size="small"
										sx={{
											"& .MuiInputBase-root": {
												borderRadius: "8px",
												py: "0.2rem",
											},
										}}
										fullWidth
									/>
								</Stack>
								<FormControl
									fullWidth
									sx={{
										"& .MuiInputBase-root": {
											borderRadius: "8px",
											py: "0.2rem",
										},
									}}
									size="small"
								>
									<InputLabel
										id="adrCountry"
										sx={{ color: "rgba(0, 0, 0, 0.3)" }}
									>
										Select Country
									</InputLabel>
									<Select
										labelId="adrCountry"
										id="category"
										label="Select Country"
									>
										{countries.map(country => (
											<MenuItem id={country.code} value={country.code}>
												{country.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Stack>
						</Stack>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="companyName">Company Name</label>
							<TextField
								id="companyName"
								type="text"
								placeholder="Company Name"
								required
								value={company}
								onChange={e => {
									setCompany(e.target.value)
								}}
								size="small"
								sx={{
									"& .MuiInputBase-root": {
										borderRadius: "8px",
										py: "0.2rem",
									},
								}}
							/>
						</Stack>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="taxId">Tax Identification No.</label>
							<TextField
								id="taxId"
								type="text"
								placeholder="Your Tax Identification Number"
								required=""
								value={tax}
								onChange={e => {
									setTax(e.target.value)
								}}
								size="small"
								sx={{
									"& .MuiInputBase-root": {
										borderRadius: "8px",
										py: "0.2rem",
									},
								}}
							/>
						</Stack>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="phone">Phone Number</label>
							<PhoneInput
								id="phone"
								className="phone-input"
								value={phone}
								onChange={setPhone}
							/>
						</Stack>

						<button
							type="submit"
							className="btn btn-main"
							style={{ marginTop: "1rem" }}
						>
							Next
						</button>

						<hr />
						<Link
							to="/signin"
							style={{ color: "var(--primary-color)", fontWeight: 500 }}
						>
							Already have account? <span className="btn-link">Login</span>
						</Link>
					</form>
				</Paper>
			</Container>
		</section>
	)
}
