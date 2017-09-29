export default (props) => {
	const { 
		type,
		className,
		id,
		name,
		value,
		onChange
		}  = props;

	return <input 
					type={type}
					className={className} 
					id={id}
					name={name}
					value={value}
					onChange={onChange} 
				/>

}