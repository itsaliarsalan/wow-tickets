import React, { useState } from 'react'
import * as DOMPurify from 'dompurify'

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(tabs[0].id)

	const handleClick = id => {
		setActiveTab(id)
	}

	return (
		<div>
			<ul className='tabs-navbar'>
				{tabs.map(tab => (
					<li
						key={tab.id}
						className={
							tab.id === activeTab ? 'navbar-item active' : 'navbar-item'
						}
						onClick={() => handleClick(tab.id)}
					>
						{tab.label}
					</li>
				))}
			</ul>
			{tabs.map(tab => (
				<div
					key={tab.id}
					className={`tab-content ${tab.id === activeTab ? 'active' : ''}`}
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(tab.content, {
							ALLOWED_TAGS: ['iframe', 'p'],
						}),
					}}
				></div>
			))}
		</div>
	)
}

export default Tabs
