import React, { useEffect, useState } from 'react';
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';


function Nav() {

//=============== background color ======================//
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

// ====================  for search icon ===================//
const [showSearch, setShowSearch] = useState(false);
  
  function handleSearchClick() {
    setShowSearch(!showSearch);
  }


// ======= Toggler for lists ==============================//
  
  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  const [toggle, settoggle] = useState(false)
  const toggler = () => {
    settoggle(!toggle)
  }
  
  const navToggle = () => {
    active === 'nav_menu'
      ? setActive('nav_menu nav_active')
      : setActive('nav_menu');

    // toggler string
    toggleIcon === 'nav_toggler'
      ? setToggleIcon('nav_toggler toggle')
      : setToggleIcon('nav_toggler');
  };

  // ================== dropdown lists======================//
  const [showMenu, setShowMenu] = useState(false);

const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className={`navM ${show && 'nav__black'}`}>
      <Link to="/">
        <img
          className="nav__logo"
          src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0"
          alt="Netflex Logo"
        />
      </Link>

      <div className="nav_list nav_container">
        <ul className={active}>
          <li>
            <Link to="/">Home</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/tvshows">Tv Shows</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/movies">Movies</Link>{' '}
          </li>
          <li>
            {' '}
            <a href="#">New & Popular</a>{' '}
          </li>
          <li>
            <a href="#">My List</a>{' '}
          </li>
          <li>
            {' '}
            <a href="#">Browse by Language</a>{' '}
          </li>
        </ul>
      </div>

      <div>
        <ul className="list">
          <li>
            <SearchIcon
              className='white'
              onClick={handleSearchClick} />
            {showSearch && <input type="text" placeholder="search.." />}
          </li>

          <li className='hide'>
            <Link to=""> Kids</Link>
          </li>
          <li className='hide'>
            <Link to="">DVD</Link>
          </li>
          <li>
            <a href="#">
              <NotificationsNoneIcon />
            </a>
          </li>

          <li>
            <a href="#" >
              <ArrowDropDownIcon onClick={handleMenuClick}
             />
           </a>
            {showMenu && (
        <ul className="list-group">
          <li><a href="#" className='list-group-item black'>DVD</a></li>
           <li><a href="#" className='list-group-item black' >Kids</a></li>        
        </ul>
      )}
          </li>   
          <li className={toggleIcon} onClick={navToggle}>
            <a href="#">
              {' '}
              <img
                onClick={toggler}
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt=""
              />{' '}
              {toggle && (<ul className="list-group">
          <li><a href="#" className='list-group-item black'>Home</a></li>
                <li><a href="#" className='list-group-item black' >Movies</a></li>    
                <li><a href="#" className='list-group-item black' >Tv shows</a></li>  
                <li><a href="#" className='list-group-item black' >New & Popular</a></li>  
                <li><a href="#" className='list-group-item black' >My List</a></li>  
                <li><a href="#" className='list-group-item black' >Browse by Language</a></li>  
        </ul>
                
            )}
            </a>
          </li>

        </ul> 
      </div> 
    </div>
  );
}

export default Nav;