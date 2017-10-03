export default (props) => {
    const {
        avatar,
        className
    } = props;

    return (
        <img src={avatar} className={className}  />
    )
}