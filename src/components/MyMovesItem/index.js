import {Component} from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {FaBoxes} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import {
  BsCalendar2CheckFill,
  BsPen,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs'
import {IoCheckbox} from 'react-icons/io5'
import InventoryDetailsItem from '../InventoryItem'

import './index.css'

class MyMovesItem extends Component {
  state = {inventoryItemId: '', isChecked: false}

  checkingInventoryItem = id => {
    this.setState({inventoryItemId: id})
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {
      movingItemDetails,
      isActive,
      changeActiveId,
      inventoryItemsData,
      itemChecked,
    } = this.props
    const {inventoryItemId, isChecked} = this.state
    console.log(inventoryItemId)
    const {
      movingFrom,
      movingTo,
      estimateId,
      propertySize,
      totalItems,
      distance,
      movingOn,
      customStatus,
      newHouseAdditionalInfo,
      oldHouseAdditionalInfo,
      newFloorNo,
      oldFloorNo,
      newElevatorAvailability,
      oldElevatorAvailability,
      newParkingDistance,
      oldParkingDistance,
    } = movingItemDetails

    const onClickingViewMoveBtn = () => changeActiveId(estimateId)

    const getFromToAddressContainer = (
      <div className="from-to-address-container">
        <div className="from-address-container">
          <h1 className="from-to-address-heading">From</h1>
          <p className="from-to-address-description">{movingFrom}</p>
        </div>
        <div className="next-arrow-container">
          <div className="arrow-container">
            <HiOutlineArrowNarrowRight className="arrow" />
          </div>
        </div>
        <div className="to-address-container">
          <h1 className="from-to-address-heading">To</h1>
          <p className="from-to-address-description">{movingTo}</p>
        </div>
        <div className="estimate-id-container">
          <h1 className="from-to-address-heading">Request#</h1>
          <p className="from-to-address-description estimate-id">
            {estimateId}
          </p>
        </div>
      </div>
    )

    const getMovingDetailsContainer = (
      <div className="moving-details-container">
        <div className="moving-details-item-container">
          <AiFillHome className="moving-details-items-logo" />
          <p className="moving-details-item-description">{propertySize}</p>
        </div>
        <div className="moving-details-item-container">
          <FaBoxes className="moving-details-items-logo" />
          <p className="moving-details-item-description">{totalItems}</p>
        </div>
        <div className="moving-details-item-container">
          <GiPathDistance className="moving-details-items-logo" />
          <p className="moving-details-item-description">{distance}</p>
        </div>
        <div className="moving-details-item-container">
          <BsCalendar2CheckFill className="moving-details-items-logo" />
          <p className="moving-details-item-description">{movingOn}</p>
          <BsPen className="pen" />
          <IoCheckbox className="checkbox" />
          <p className="moving-details-item-description">is flexible</p>
        </div>
        <div>
          <button
            type="button"
            className="view-move-details-btn"
            onClick={onClickingViewMoveBtn}
          >
            View move details
          </button>
          <button type="button" className="quotes-btn">
            {customStatus}
          </button>
        </div>
      </div>
    )

    const getViewMoveDetails = (
      <div>
        <div>
          <div className="additional-information-container">
            <h1 className="additional-info-heading">Additional Information</h1>
            <button type="button" className="edit-additional-info-button">
              Edit Additional Info
            </button>
          </div>
          <p className="from-to-address-description">
            {oldHouseAdditionalInfo}
          </p>
          <p className="from-to-address-description">
            {newHouseAdditionalInfo}
          </p>
        </div>
        <div>
          <div className="additional-information-container">
            <h1 className="additional-info-heading">House Details</h1>
            <button type="button" className="edit-additional-info-button">
              Edit House Details
            </button>
          </div>
          <h1 className="existing-house-details-item-heading orange">
            Existing House Details
          </h1>
          <div className="existing-house-details-container">
            <div className="existing-house-details-item">
              <h1 className="existing-house-details-item-heading">Floor No.</h1>
              <p className="existing-house-details-item-description">
                {oldFloorNo}
              </p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="existing-house-details-item-heading">
                Elevator Available.
              </h1>
              <p className="existing-house-details-item-description">
                {oldElevatorAvailability}
              </p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="existing-house-details-item-heading">
                Distance from Elevator/Staircase to truck
              </h1>
              <p className="existing-house-details-item-description">
                {oldParkingDistance}
              </p>
            </div>
          </div>
          <h1 className="existing-house-details-item-heading orange">
            New House Details
          </h1>
          <div className="existing-house-details-container">
            <div className="existing-house-details-item">
              <h1 className="existing-house-details-item-heading">Floor No.</h1>
              <p className="existing-house-details-item-description">
                {newFloorNo}
              </p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="existing-house-details-item-heading">
                Elevator Available.
              </h1>
              <p className="existing-house-details-item-description">
                {newElevatorAvailability}
              </p>
            </div>
            <div className="existing-house-details-item">
              <h1 className="existing-house-details-item-heading">
                Distance from Elevator/Staircase to truck
              </h1>
              <p className="existing-house-details-item-description">
                {newParkingDistance}
              </p>
            </div>
          </div>
          <div className="additional-information-container">
            <h1 className="additional-info-heading">Inventory Details</h1>
            <button type="button" className="edit-additional-info-button">
              Edit Inventory
            </button>
          </div>
          <ul className="inventory-item-details-list-container">
            {inventoryItemsData.map(each => (
              <InventoryDetailsItem
                inventoryItemDetails={each}
                key={each.id}
                checkingInventoryItem={this.checkingInventoryItem}
                isInventoryItemChecked={inventoryItemId === each.id}
                isChecked={isChecked}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    return (
      <li className="my-moves-list-item">
        {getFromToAddressContainer}
        {getMovingDetailsContainer}
        <div className="disclaimer-container">
          <BsFillExclamationTriangleFill className="disclaimer-logo" />
          <p className="moving-details-item-description">
            <span className="disclaimer">Disclaimer: </span> Please update your
            move date before two days of shifting
          </p>
        </div>
        {isActive && itemChecked ? getViewMoveDetails : ''}
        <hr className="hr-line" />
      </li>
    )
  }
}

export default MyMovesItem
