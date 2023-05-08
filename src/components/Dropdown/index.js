import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
	render() {
		const { label, onChanged, value, items, placeholder } = this.props;
		return (
			<div className="dropdown">
				<label>{label}</label>
				<select
					onChange={(event) => onChanged(event.target.value)}
					value={value}>
					<option>{placeholder}</option>
					{items.map((item) => (
						<option key={item}>{item}</option>
					))}
				</select>
			</div>
		);
	}
}

export default Dropdown;
