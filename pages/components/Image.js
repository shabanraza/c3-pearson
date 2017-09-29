export default (props) => {
    const {
        user
    } = props;

console.log(props.avatar)
    return (
        <img src={user.avatar} className="c3__img"  />
    )
}