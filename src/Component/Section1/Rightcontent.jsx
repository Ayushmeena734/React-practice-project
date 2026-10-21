import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-2/3 bg-blue-200'>
      {props.users.map(function(elem , idx){
        return <Rightcard key={idx} color={elem.color} id ={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent
