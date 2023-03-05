

const Helmet = (props) => {

  document.title = "Multimart - " + props.title 

  return (
    props.children
  )
}

export default Helmet