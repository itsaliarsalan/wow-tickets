import { Outlet, useNavigate } from 'react-router-dom'
import ProgressTracker from '../../components/ProgressTracker'
import { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader'

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
			<DashboardHeader
				title='Create a new Event'
				links={[
					{ name: 'Home', route: '/' },
					{ name: 'New Events', route: '/' },
				]}
			/>
			<div className='content new-event'>
				<div className='main'>
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
			</div>
		</>
	)
}

export default NewEvent
