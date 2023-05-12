import { Link } from 'react-router-dom'
import React from 'react'

export default function Breadcrumb({ links }) {
	return (
		<ul className='breadcrumb'>
			{links.map((link, index) => (
				<React.Fragment key={index}>
					<li>
						<Link to={link.route} className='breadcrumb-link'>
							{link.name}
						</Link>
					</li>
					{index !== links.length - 1 && <li className='divider'>&gt;</li>}
				</React.Fragment>
			))}
		</ul>
	)
}
