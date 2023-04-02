import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

import InventoryDetailedDescription from '../InventoryItemDetailedDescription'

import './index.css'

const InventoryItem = prop => {
  const {
    inventoryItemDetails,
    checkingInventoryItem,
    isInventoryItemChecked,
    isChecked,
  } = prop
  console.log(isChecked)
  const {id, displayName, category} = inventoryItemDetails
  const inventoryDetailsItemCountArray = category.map(each => each.items.length)
  const itemsCount = inventoryDetailsItemCountArray.reduce((a, b) => a + b)

  const onClickingDropDownIcon = () => checkingInventoryItem(id)

  const toDisplayFurnitureItems = (
    <ul className="Inventory-detailed-description-list-container">
      {category.map(each => (
        <InventoryDetailedDescription itemDetails={each} key={each.id} />
      ))}
    </ul>
  )

  return (
    <li className="inventory-item-details-list-item">
      <div className="inventory-item-container">
        <div className="inventory-item-name-container">
          <h1 className="inventory-item-heading">{displayName}</h1>
          <div className="itemsCountContainer">
            <p className="items-count">{itemsCount}</p>
          </div>
        </div>
        <button
          type="button"
          className="arrow-button"
          onClick={onClickingDropDownIcon}
        >
          {isInventoryItemChecked && isChecked ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowDown />
          )}
        </button>
      </div>
      {isInventoryItemChecked && isChecked ? toDisplayFurnitureItems : ''}
    </li>
  )
}

export default InventoryItem
