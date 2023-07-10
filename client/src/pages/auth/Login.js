import "./Style.css"
import { useEffect, useState } from "react"
import { signin } from "../../actions/userActions"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useSelector, useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/250x150.svg"
import { Box, Container, Paper, Stack, TextField } from "@mui/material"

export default function LoginForm(props) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const { search } = useLocation()
	const navigate = useNavigate()
	const redirectInUrl = new URLSearchParams(search).get("redirect")
	const redirect = redirectInUrl ? redirectInUrl : "/"

	const userSignin = useSelector(state => state.userSignin)
	const { userInfo, loading, error } = userSignin

	const dispatch = useDispatch()
	const submitHandler = e => {
		e.preventDefault()
		dispatch(signin(email, password))
	}

	useEffect(() => {
		if (userInfo) {
			navigate(redirect)
		}
	}, [redirect, userInfo, navigate])

	return (
		<section className="component sign-in auth">
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
					<h2>Sign in to your account</h2>
					<form className="login" onSubmit={submitHandler}>
						<Stack sx={{ textAlign: "start", "& label": { fontWeight: 500 } }}>
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
						<Stack sx={{ textAlign: "start", "& label": { fontWeight: 500 } }}>
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

						<button
							type="submit"
							className="btn btn-main"
							style={{ marginTop: "1rem" }}
						>
							Login
						</button>
						{loading && <LoadingBox></LoadingBox>}
						{error && <MessageBox variant="danger">{error}</MessageBox>}

						<Link to="/">
							<span className="btn-link">Forgot Password?</span>
						</Link>

						<Link
							to="/buyer-signup"
							style={{
								textAlign: "center",
								color: "var(--primary-color)",
								fontWeight: 500,
								marginTop: "2rem",
							}}
						>
							Don't have any account?{" "}
							<span className="btn-link">Create Now</span>
						</Link>
					</form>
				</Paper>
			</Container>
		</section>
	)
}
