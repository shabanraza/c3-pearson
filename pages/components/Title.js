export default props => {
  const {className, text} = props

  return (
    <h5 className={className}>
      {text}
    </h5>
  )
}
