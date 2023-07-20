import './index.css'

const Tab = props => {
  const {tabDetails, tabPressed, isTabActive} = props
  const {tabId, displayText} = tabDetails
  const isTabClicked = () => {
    tabPressed(tabId)
  }
  const isActiveTabClassName = isTabActive ? 'active-tab' : ''
  return (
    <li className="list-ele">
      <button
        className={`btn ${isActiveTabClassName}`}
        type="button"
        onClick={isTabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tab
