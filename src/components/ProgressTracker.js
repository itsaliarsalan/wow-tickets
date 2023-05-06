function ProgressTracker(props) {
	return (
		<div className='progress-tracker'>
			{['1', '2', '3'].includes(props.step) ? (
				<div className='circle check'>
					<div className='tooltip'>Basic Info</div>
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
				</div>
			) : (
				<div className='circle number'>
					<div className='tooltip'>Basic Info</div>1
				</div>
			)}
			<div
				className={['2', '3'].includes(props.step) ? 'line success' : 'line'}
			></div>
			{['2', '3'].includes(props.step) ? (
				<div className='circle check'>
					<div className='tooltip'>This and this</div>
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
				</div>
			) : (
				<div className='circle number'>
					<div className='tooltip'>This and this</div> 2
				</div>
			)}
			<div
				className={['3'].includes(props.step) ? 'line success' : 'line'}
			></div>
			{['3'].includes(props.step) ? (
				<div className='circle check'>
					<div className='tooltip'>This and this</div>
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
				</div>
			) : (
				<div className='circle number'>
					<div className='tooltip'>This and this</div>3
				</div>
			)}
		</div>
	)
}
export default ProgressTracker
