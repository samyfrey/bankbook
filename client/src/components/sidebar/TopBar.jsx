import React from 'react'
import './navbar.scss'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
// import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Link } from 'react-router-dom'
const TopBar = ({ user }) => {
  return (
    <div className='navigationBar'>

      {user &&
      <p>{user.email}</p>
      }
      {!user &&
      <Link to='/account'><VpnKeyIcon className="icon"/> Register/Log in</Link>
      }

      {/* <div className='links'><VpnKeyIcon className="icon"/><span> Register/Log in</span></div> */}
      <div className="item">
        <ListOutlinedIcon className="icon" />
      </div>
    </div>

  // <div className="navbar">
  //   <div className="wrapper">
  //     <div className="search">
  //       <input type="text" placeholder="Search..." />
  //       <SearchOutlinedIcon />
  //     </div>
  //     <div className="items">
  //       <div className="item">
  //         <LanguageOutlinedIcon className="icon" />
  //         English
  //       </div>

  //       <div className="item">
  //         <FullscreenExitOutlinedIcon className="icon" />
  //       </div>
  //       <div className="item">
  //         <NotificationsNoneOutlinedIcon className="icon" />
  //         <div className="counter">1</div>
  //       </div>
  //       <div className="item">
  //         <ChatBubbleOutlineOutlinedIcon className="icon" />
  //         <div className="counter">2</div>
  //       </div>
  //       <div className="item">
  //         <ListOutlinedIcon className="icon" />
  //       </div>
  //       <div className="item">
  //         {/* <img
  //           src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  //           alt=""
  //           className="avatar"
  //         /> */}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default TopBar