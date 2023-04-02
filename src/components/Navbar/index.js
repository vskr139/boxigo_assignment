import {RiTruckFill, RiLogoutCircleRFill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'
import {HiClipboardList} from 'react-icons/hi'

import './index.css'

const Navbar = () => (
  <div className="navbar-container">
    <ul className="navbar-list-container">
      <li className="navbar-list-item border">
        <RiTruckFill className="navbar-items-logo" />
        <p className="navbar-list-heading">MY MOVES</p>
      </li>
      <li className="navbar-list-item">
        <FaUserAlt className="navbar-items-logo" />
        <p className="navbar-list-heading">MY PROFILE</p>
      </li>
      <li className="navbar-list-item">
        <HiClipboardList className="navbar-items-logo" />
        <p className="navbar-list-heading">GET QUOTE</p>
      </li>
      <li className="navbar-list-item">
        <RiLogoutCircleRFill className="navbar-items-logo" />
        <p className="navbar-list-heading">LOGOUT</p>
      </li>
    </ul>
  </div>
)

export default Navbar
