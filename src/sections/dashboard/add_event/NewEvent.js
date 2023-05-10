import { Outlet, useNavigate } from 'react-router-dom'
import ProgressTracker from '../../../components/ProgressTracker'
import { useState } from 'react'

const NewEvent = () => {
	const navigate = useNavigate()
	const [currentStep, setCurrentStep] = useState(1)
	function handleNextStep() {
		setCurrentStep(currentStep + 1)
		navigate('./step-' + (currentStep + 1))
	}
	function handleNavigate(navigateToStep) {
		setCurrentStep(navigateToStep)
		navigateToStep === 1 ? navigate('./') : navigate('./step-' + navigateToStep)
	}

	return (
		<>
			<div className='main new-event'>
				<div className='head'>
					<h2>Create a new Event</h2>
					<ul className='breadcrumb'>
						<li>
							<a href='/' className='breadcrumb-link'>
								Home
							</a>
						</li>
						<li className='divider'>&gt;</li>
						<li>
							<a href='/' className='breadcrumb-link'>
								Events
							</a>
						</li>
					</ul>
				</div>
				<hr />
				<div className='progress'>
					<div className='card-primary'>
						<ProgressTracker step={currentStep} navigate={handleNavigate} />
					</div>
				</div>
				<Outlet context={[currentStep, setCurrentStep]} />
				<div className='footer'>
					<button className='btn btn-main' onClick={handleNextStep}>
						{currentStep === 4 ? 'Make Event Live' : 'Next'}
					</button>
				</div>
			</div>
			<aside className='side-content'></aside>
		</>
	)
}

export default NewEvent
