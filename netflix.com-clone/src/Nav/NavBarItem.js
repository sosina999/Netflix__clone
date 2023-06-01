import React, { useState } from 'react'
import './Nav.css'

function NavBarItem() {
  const [toggle, setToggle] = useState(true)
    let item = [
		'Home', "TVShows", "Movies", 'New & Popular', 'My List', 'Browse by Languages'
	]
  const toggleButton = () =>{
    setToggle(current => !current)
}
  const scrollUp = (i) => {
    if(i === 0){
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
    }
};
  return (
      <div className='navBarItem'>
      {item.map((item, i) => (
        <div key={i} className="flex">
            <li onClick={() => scrollUp(i)} >{item}</li>
        </div>
      ))}
      <div className="show">
        <button onClick={() => toggleButton()} >Browse</button>
       <div>
        {item.map((item, i) => (
        <div key={i} className={`${toggle && 'toggle'}`} >
            <button onClick={() => scrollUp(i)} className='navButton'>{item}</button>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default NavBarItem
