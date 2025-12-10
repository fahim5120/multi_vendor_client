import React from 'react'
import ProfileFildCard from './ProfileFildCard'

const UserDetails = () => {
  return (
    <div className='space-y-5'>
      <ProfileFildCard keys={"Name"} value={"Rafeeq"} />
      <ProfileFildCard keys="Email" value="rafeeq@gmail.com" />
      <ProfileFildCard keys="Mobile" value="8136905120" />

    </div>
  )
}

export default UserDetails