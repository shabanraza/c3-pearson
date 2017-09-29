export default (props) => {

    const {
        className,
        onClick,
        text

    } = props;



    return (
        <button 
            className={className} 
            onClick={onClick}>
            
            {text}
        </button>
    )
}