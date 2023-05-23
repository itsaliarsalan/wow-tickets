import React, { useState } from 'react'
import * as DOMPurify from 'dompurify'

const Tabs = ({ desc, location }) => {
  const tabs = [
    {
      id: "tab1",
      label: "Details",
      content: desc,
    },
    {
      id: "tab2",
      label: "Location",
      content: `<iframe
				  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.6717883557546!2d-9.172592684238177!3d38.75271247960574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932b492d22375%3A0x9e7bde9c34e90275!2sEst%C3%A1dio%20da%20Luz!5e0!3m2!1sen!2sus!4v1650569867843!5m2!1sen!2sus"
				  style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const handleClick = (id) => {
    setActiveTab(id)
  }

  return (
    <div>
      <ul className='tabs-navbar'>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={
              tab.id === activeTab ? "navbar-item active" : "navbar-item"
            }
            onClick={() => handleClick(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab-content ${tab.id === activeTab ? "active" : ""}`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(tab.content, {
              ALLOWED_TAGS: ["iframe", "p"],
            }),
          }}
        ></div>
      ))}
    </div>
  )
}

export default Tabs
