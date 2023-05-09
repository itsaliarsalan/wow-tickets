import { Link } from 'react-router-dom'

function TickCircleIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='35'
			height='35'
			fill='currentColor'
			class='bi bi-check'
			viewBox='0 0 16 16'
		>
			<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
		</svg>
	)
}

function ProgressTracker(props) {
	const steps = [
		{
			label: 'Basic Info',
			complete: ['1', '2', '3', '4'].includes(props.step),
			link: './',
		},
		{
			label: 'Images',
			complete: ['2', '3', '4'].includes(props.step),
			link: 'step-2',
		},
		{
			label: 'Tickets',
			complete: ['3', '4'].includes(props.step),
			link: 'step-3',
		},
		{
			label: 'Confirmation',
			complete: ['4'].includes(props.step),
			link: 'step-4',
		},
	]
	return (
		<div className='progress-tracker'>
			{steps.map((step, index) => (
				<>
					<Link
						className={`circle ${step.complete ? 'check' : 'number'}`}
						key={index}
						to={step.link}
					>
						<div className='tooltip'>{step.label}</div>
						{step.complete ? <TickCircleIcon /> : index + 1}
					</Link>
					{steps.length - 1 !== index ? (
						<div
							className={
								['2', '3', '4'].includes(props.step) ? 'line success' : 'line'
							}
						></div>
					) : null}
				</>
			))}
		</div>
	)
}

export default ProgressTracker
