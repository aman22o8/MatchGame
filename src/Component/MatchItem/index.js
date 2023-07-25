import './index.css'

const MatchItem = props => {
  const {displayitem, randomfunction} = props
  const {thumbnailUrl, id} = displayitem
  const itemclicked = () => {
    randomfunction(id)
  }

  return (
    <li className="list_item_container">
      <button onClick={itemclicked} className="item_button" type="button">
        <img className="thumbnailimage" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchItem
