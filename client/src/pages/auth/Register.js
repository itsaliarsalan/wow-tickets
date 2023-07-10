import "./Style.css"
import { toast } from "react-toastify"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerBuyer } from "../../actions/userActions"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useSelector, useDispatch } from "react-redux"
import logo from "../../assets/250x150.svg"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { steps } from "./stepperSteps"
import { Box, Container, Paper, Stack, TextField } from "@mui/material"

export default function Register({ isSeller }) {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isSigned, setIsSigned] = useState(isSeller)
	const [confirmPassword, setConfirmPassword] = useState("")

	const userRegister = useSelector(state => state.userRegister)
	const { userInfo, loading, error } = userRegister

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const submitHandler = e => {
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
		<section className="component sign-up auth">
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
					<h2>{isSeller ? "Login Information" : "Create An Account"}</h2>
					{isSeller && (
						<Stepper activeStep={1} alternativeLabel sx={{ mt: 4, mb: 5 }}>
							{steps.map(label => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					)}
					<hr />
					<form className="login" onSubmit={submitHandler}>
						<Stack
							sx={{
								my: "2px",
								textAlign: "start",
								"& label": { fontWeight: 500 },
							}}
						>
							<label htmlFor="fullname">Full Name</label>
							<TextField
								id="fullname"
								type="text"
								placeholder={isSeller ? "Username" : "Full Name"}
								required=""
								value={username}
								onChange={e => {
									setUsername(e.target.value)
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
							<label htmlFor="email">Email</label>
							<TextField
								id="email"
								type="email"
								placeholder="Your Email"
								required=""
								onChange={e => {
									setEmail(e.target.value)
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
							<label htmlFor="password">Password</label>
							<TextField
								id="password"
								type="password"
								placeholder="Password"
								required=""
								onChange={e => {
									setPassword(e.target.value)
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
							<label htmlFor="confirmPassword">Confirm Password</label>
							<TextField
								id="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								required=""
								value={confirmPassword}
								onChange={e => {
									setConfirmPassword(e.target.value)
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

						{!isSeller && (
							<Box className="form-checkbox" sx={{ my: "1rem" }}>
								<input
									id="isSigned"
									type="checkbox"
									value={isSigned}
									onChange={() => setIsSigned(!isSigned)}
								/>
								<label htmlFor="isSigned">
									I agree to all{" "}
									<a
										href="https://bit.ly/3pmLPuw"
										target="_blank"
										rel="noreferrer"
									>
										terms
									</a>{" "}
									and <Link to="/privacy">privacy policies</Link>
								</label>
							</Box>
						)}
						<button type="submit" className="btn btn-main">
							{isSeller ? "Next" : "Create Account"}
						</button>
						{loading && <LoadingBox></LoadingBox>}
						{error && <MessageBox variant="danger">{error}</MessageBox>}

						<hr />
						{!isSeller && (
							<Link
								to="/seller-info"
								style={{ color: "var(--primary-color)", fontWeight: 500 }}
							>
								<span className="btn-link">Join as a seller</span>
							</Link>
						)}
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
