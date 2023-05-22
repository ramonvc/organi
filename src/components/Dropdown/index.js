import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
	render() {
		const { label, onChanged, value, items } = this.props;
		return (
			<div className="dropdown">
				<label>{label}</label>
				<select onChange={(event) => onChanged(event.target.value)} value={value} required>
					<option value="" disabled hidden>
						Selecione
					</option>
					{items.map((item) => (
						<option key={item.name} value={item.name} style={{ color: item.primaryColor }}>
							{item.name}
						</option>
					))}
				</select>
			</div>
		);
	}
}

export default Dropdown;
