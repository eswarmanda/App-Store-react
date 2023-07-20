import './index.css'

const Apps = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-card">
      <img className="img-ele" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default Apps
