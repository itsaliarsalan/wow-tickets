import "./Style.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"

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
	const [supportEmail, setSupportEmail] = useState("")
	const [supportPhone, setSupportPhone] = useState("")
	const [supportHours, setSupportHours] = useState("")

	const navigate = useNavigate()

	const submitHandler = e => {
		e.preventDefault()
		// localStorage.setItem(
		// 	"support-info",
		// 	JSON.stringify({
		// 		company,
		// 		tax,
		// 		supportEmail,
		// 	})
		// )
		// if (name && address && company && tax && supportEmail) {
		// 	navigate("/seller-signup")
		// } else {
		// 	toast.warn("Please fill all the details.")
		// }
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
					<Stepper activeStep={1} alternativeLabel sx={{ mt: 4, mb: 5 }}>
						{steps.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<Box sx={{ textAlign: "start" }}>
						<h3 style={{ fontWeight: 500 }}>Customer Support</h3>
						<p style={{ color: "var(--secondary-typo-color)" }}>
							The seller is reponsible for all customer support. Please list how
							your customer gets in touch with you.
						</p>
					</Box>
					<form className="login" action="" onSubmit={submitHandler}>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="email">Email</label>
							<TextField
								id="email"
								type="email"
								placeholder="Your Email"
								required
								value={supportEmail}
								onChange={e => {
									setSupportEmail(e.target.value)
								}}
								size="small"
								sx={{
									"& .MuiInputBase-root": { borderRadius: "8px", py: "0.2rem" },
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
								value={supportPhone}
								onChange={setSupportPhone}
							/>
						</Stack>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
							direction={{ xs: "column", md: "row" }}
							spacing={1}
						>
							<Stack direction="column" sx={{ flexGrow: 1 }}>
								<label>Start Timing</label>
								<TimePicker />
							</Stack>
							<Stack direction="column" sx={{ flexGrow: 1 }}>
								<label>End Timing</label>
								<TimePicker />
							</Stack>
						</Stack>
						<label
							style={{
								textAlign: "start",
								color: "var(--secondary-typo-color)",
							}}
						>
							Working Business Hours
						</label>

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
