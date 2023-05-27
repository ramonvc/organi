import React, { useState, useEffect, useRef } from "react";
import "./TextField.css";

const TextField = (props) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const tooltipRef = useRef(null);
	const iconRef = useRef(null);

	const onInput = (event) => {
		props.onChanged(event.target.value);
	};

	const toggleTooltip = () => {
		setShowTooltip(!showTooltip);
	};

	const handleClickOutside = (event) => {
		if (
			tooltipRef.current &&
			!tooltipRef.current.contains(event.target) &&
			!iconRef.current.contains(event.target)
		) {
			setShowTooltip(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="text-field">
			<label>
				{props.label}
				{props.required && <span> *</span>}
				{props.tooltipHelp && (
					<>
						<img
							onClick={toggleTooltip}
							className="icon-help"
							src={process.env.PUBLIC_URL + "/icons/utils/icon-help.svg"}
							alt="ícone de ajuda"
							ref={iconRef}
						/>
						{showTooltip && (
							<div className="tooltip" ref={tooltipRef}>
								{props.tooltipHelp}
							</div>
						)}
					</>
				)}
			</label>
			<input
				onChange={onInput}
				value={props.value}
				placeholder={props.placeholder}
				required={props.required}
			/>
		</div>
	);
};

export default TextField;
