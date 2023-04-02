import {Component} from 'react'
import data from './data.json'
import Navbar from './components/Navbar'

import MyMovesItem from './components/MyMovesItem'

import './App.css'

class App extends Component {
  state = {customerDetailsData: data, activeId: '', itemChecked: false}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    // While fetching the url it showing promise error obtained due to "number" attached atlast of the json string. Because of error in url provided by you. So I extract the json string directly from the url and it is maintained in data.json file
    // const response = await fetch('http://test.api.boxigo.in/sample-data/', {
    //   method: 'GET',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // const jsonData = await response.json()
    // console.log(jsonData)
  }

  changeActiveId = estimateId => {
    this.setState({activeId: estimateId})
    this.setState(prevState => ({itemChecked: !prevState.itemChecked}))
  }

  getUpdatedCustomerDetailsData = customerDetailsData => {
    const customerDetailsList = customerDetailsData.Customer_Estimate_Flow.map(
      each => ({
        movingFrom: each.moving_from,
        movingTo: each.moving_to,
        estimateId: each.estimate_id,
        propertySize: each.property_size,
        totalItems: each.total_items,
        distance: each.distance,
        movingOn: each.moving_on,
        customStatus: each.custom_status,
        newHouseAdditionalInfo: each.new_house_additional_info,
        oldHouseAdditionalInfo: each.old_house_additional_info,
        newFloorNo: each.new_floor_no,
        oldFloorNo: each.old_floor_no,
        newElevatorAvailability: each.new_elevator_availability,
        oldElevatorAvailability: each.old_elevator_availability,
        newParkingDistance: each.new_parking_distance,
        oldParkingDistance: each.old_parking_distance,
      }),
    )
    return customerDetailsList
  }

  render() {
    const {customerDetailsData, activeId, itemChecked} = this.state
    console.log(customerDetailsData)
    const inventoryItemsData =
      customerDetailsData.Customer_Estimate_Flow[0].items.inventory
    const updatedCustomerDetailsData = this.getUpdatedCustomerDetailsData(
      customerDetailsData,
    )
    return (
      <div className="app-container">
        <Navbar />
        <div className="my-moves-container">
          <h1 className="my-moves-heading">MY MOVES</h1>
          <ul className="my-moves-list-container">
            {updatedCustomerDetailsData.map(eachMovingItem => (
              <MyMovesItem
                movingItemDetails={eachMovingItem}
                key={eachMovingItem.estimateId}
                isActive={activeId === eachMovingItem.estimateId}
                changeActiveId={this.changeActiveId}
                inventoryItemsData={inventoryItemsData}
                itemChecked={itemChecked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App
