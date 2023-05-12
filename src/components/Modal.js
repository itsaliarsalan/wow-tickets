import React from 'react'

function Modal(props) {
	return (
		<div className='modal'>
			<label className='modal-bg' htmlFor={props.id} />
			<div className='modal-container'>
				<div className='modal-header'>
					<h4>{props.title}</h4>
					<label className='modal-close' htmlFor={props.id} />
				</div>
				{props.children}
			</div>
		</div>
	)
}

export default Modal
