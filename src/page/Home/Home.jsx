import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import './Home.css'

const Home = ({sidebar}) => {
  const [category,setCategory] = useState(0);
  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`cointainer ${sidebar?"":'large-container'}`}>
     <Feed category={category}/>
    </div>

    </>
  )
}

export default Home