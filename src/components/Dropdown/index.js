import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
	render() {
		return (
			<div className="dropdown">
				<label>{this.props.label}</label>
				<select
					onChange={(event) => this.props.onChanged(event.target.value)}
					value={this.pros.value}>
					{this.props.items.map((item) => (
						<option key={item}>{item}</option>
					))}
				</select>
			</div>
		);
	}
}

export default Dropdown;
