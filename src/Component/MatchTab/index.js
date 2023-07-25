import './index.css'

const MatchTab = props => {
  const {displaytab, isActive, mytab} = props
  const {displayText, tabId} = displaytab
  const myclass = isActive ? 'myactivetab' : ''
  const selectingtab = () => {
    mytab(tabId)
  }
  return (
    <li className="tab_container1">
      <button
        onClick={selectingtab}
        type="button"
        className={`tab_button ${myclass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default MatchTab
