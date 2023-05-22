import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
	render() {
		const { label, onChanged, value, items} = this.props;
		return (
			<div className="dropdown">
				<label>{label}</label>
				<select onChange={(event) => onChanged(event.target.value)} value={value}>
					{items.map((item) => (
						<option key={item.name} style={{ color: item.primaryColor }}>
							{item.name}
						</option>
					))}
				</select>
			</div>
		);
	}
}

export default Dropdown;
