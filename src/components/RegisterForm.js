import React from 'react'
import './Style.css'

function RegisterForm() {
	return (
		<section className='component sign-up'>
			<div className='container'>
				<h1>Create New Account</h1>
				<h4>Provide required info to create new account.</h4>
				<form className='login' action=''>
					<input type='text' placeholder='Username' required='' />
					<input type='email' placeholder='Email' required='' />
					<input type='password' placeholder='Password' required='' />
					<input type='password' placeholder='Confirm Password' required='' />
					<button type='submit' className='btn btn-main'>
						Create Account
					</button>
					<hr />
					<a href='/'>Already have account? Login here</a>
				</form>
			</div>
		</section>
	)
}

export default RegisterForm
