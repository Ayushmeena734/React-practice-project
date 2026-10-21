import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className=' py-16 pt-6 px-18 h-[90vh] flex items-center gap-10 '>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content
