import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateTabItem(tabId)
  }

  const activeStyle = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeStyle}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
