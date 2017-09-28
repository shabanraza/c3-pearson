export default (props) => {
	console.log(props)
    return (
        <img src={props.user.avatar} className="c3__img"  />
    )
}