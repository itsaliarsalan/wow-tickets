import { Outlet, useNavigate } from 'react-router-dom'
import ProgressTracker from '../../components/ProgressTracker'
import { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { Box } from '@mui/material'

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
		<Box sx={{ marginTop: '30px', marginBottom: '10px' }}>
			<DashboardHeader
				title='Create a new Event'
				links={[
					{ name: 'Home', route: '/' },
					{ name: 'New Events', route: '/' },
				]}
			/>
			<Box className='content new-event' sx={{ display: 'flex' }}>
				<Box sx={{ flexBasis: { md: '70%' } }}>
					<Box className='progress'>
						<Box className='card-primary'>
							<ProgressTracker step={currentStep} navigate={handleNavigate} />
						</Box>
					</Box>
					<Outlet context={[currentStep, setCurrentStep]} />
					<Box className='footer'>
						<button className='btn btn-main' onClick={handleNextStep}>
							{currentStep === 4 ? 'Make Event Live' : 'Next'}
						</button>
					</Box>
				</Box>
				<aside className='side-content'></aside>
			</Box>
		</Box>
	)
}

export default NewEvent
