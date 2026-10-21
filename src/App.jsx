import React from 'react'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'

const App = () => {

  const users = [
    {
      img :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro :'',
      color :'blue', 
      tag :'Satisfied'},
    {
      img :'https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3b3JraW5nfGVufDB8fDB8fHww', 
      intro :'',
      color :'orange',  
      tag :'Underserved'},
    {
      img :'https://images.unsplash.com/photo-1680459575540-2bbdf72151c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEyfHx3b3JraW5nfGVufDB8fDB8fHww', 
      intro :'', 
      color :'lightseagreen',
      tag :'UnderBanked'},
    {
      img :'https://images.unsplash.com/photo-1698059133660-8b18399b6880?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      color :'red',
      tag :'Beautiful'
    }
  ]
  return (
    <div>

      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
