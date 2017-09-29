export default (props) => {
	const {
		name,
		className,
		text

	} = props;

	return <label htmlFor={name} className={className}>{text}</label>
}