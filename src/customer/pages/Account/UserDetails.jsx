import React from 'react'
import ProfileFildCard from './ProfileFildCard'
import { store, useAppSelector } from '../../../Redux Toolkit/store'

const UserDetails = () => {
  const {user}=useAppSelector(store=>store)
  return (
    <div className='space-y-5'>
      <ProfileFildCard keys={"Name"} value={user.user?.fullName} />
      <ProfileFildCard keys="Email" value={user.user?.email} />
      <ProfileFildCard keys="Mobile" value={user.user?.mobile || "not provided"}/>

    </div>
  )
}

export default UserDetails