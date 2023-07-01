import React from 'react';

function Navbar()
{
return<div>  <nav className='navbar'>
  <div>
     <ul >
      <li>
        <img className='bg-img'/>
      </li>
      <li>
        <a  href='/'>HomePage</a> 
        </li>
          <li>
        <a  href='/dresses'>Dresses</a>
      </li>
  
      <li>
        <a  href='/blazers'>Blazers</a>
      </li>

      <li>
        <a  href='/makeup'>Makeup</a>
      </li>
    
      <li>
        <a  href='/login'>Login</a>
      </li>
      <li>
        <a  href='/creatuser'>Signup</a>
      </li>
    </ul>
    <div>
      {/* <div className="carousel-inner " id='carousel'>
                    <div class=" carousel-caption  " >
                        <form >  
                            <input className=" search" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="search-btn" type="submit">Search</button>
                        </form>
                    </div>
                    </div> */}
                    </div>
                    </div>
  </nav>
  </div>
}
export default Navbar;
