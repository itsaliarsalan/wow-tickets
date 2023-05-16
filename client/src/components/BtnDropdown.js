import { useRef } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'

const BtnDropdown = props => {
	const dropdownMenu = useRef(null)
	const closeDropdown = () => {
		dropdownMenu.current.close()
	}
	const ref = useDetectClickOutside({ onTriggered: closeDropdown })
	return (
		<div className='btn-dropdown' ref={ref}>
			<div
				className='btn-dropdown-toggle'
				onClick={() => {
					dropdownMenu && dropdownMenu.current.show()
				}}
			>
				{!props.title ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='currentColor'
						className='bi bi-three-dots-vertical vertical-menu'
						viewBox='0 0 16 16'
					>
						<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
					</svg>
				) : (
					props.title
				)}
			</div>

			<dialog className='btn-dropdown-menu' ref={dropdownMenu}>
				{props.children}
			</dialog>
		</div>
	)
}

export default BtnDropdown
