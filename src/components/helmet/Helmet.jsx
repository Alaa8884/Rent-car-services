/* eslint-disable react/prop-types */
function Helmet(props) {
  document.title = "Rent Car Services - " + props.title + " page"
  return (
    <div className=" w-100">
      {props.children}
    </div>
  )
}

export default Helmet
