import React from "react"
import "./Style.css"
import { FiSearch } from "react-icons/fi"

function SearchBox() {
	return (
		<div className="search-box">
			<input placeholder='Try "Music Events"' type="text" autoComplete="off" />
			<span className="search-icon">
				<FiSearch />
			</span>
		</div>
	)
}

export default SearchBox
