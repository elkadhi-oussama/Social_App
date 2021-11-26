import React from 'react'
import './closeFriend.css'

const CloseFriend = ({user}) => {
    return (
        <div>
            <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
        </div>
    )
}

export default CloseFriend
