import "./TextField.css";

const TextField = (props) => {
	const onInput = (event) => {
		props.onChanged(event.target.value);
	};

	return (
		<div className="text-field">
			<label>
				{props.label}
				{props.required && <span> *</span>}
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
