import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <container>
    <header class="header">
    <div class="header-1">
        <Link to={"logo"} class="logo"> Boekenza </Link>
<       form action="" class="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box"/>
            <label ><SearchIcon/></label>
        </form>
        <form action="" class="signInHeader">
            <input type ="email" placeholder="Login" id = "signInHeader"/>
            <label><PersonIcon/></label>
        </form>
        <div class="header_icons">
            <label><ShoppingCartIcon/></label>
            <label><FavoriteBorderIcon/></label>
        </div>
    </div>

    <div class="header-2">
        <nav class="navbar">
            <Link to='/HomeSection'>HOME</Link>
                    <div class='dropDown'>
                        <button class="dropDownButton">BOOKS</button>
                        <div class="dropDownElements">
                            <a href='/Page1'>DEPARTMENT</a>
                            <a href='/Page2'>YEAR</a>
                            <a href='/Page3'>SUBJECT</a>   
                        </div>
                    </div>
            <a href="#NOTES">NOTES</a>
            <a href="#MATERIALS">MATERIALS</a>
            <a href="#QUESTIONPAPERS">QUESTION PAPERS</a>
            <Link to='/SignIn'>SIGN IN</Link>
        </nav>
    </div>
</header>
</container>
  )
}

export default NavBar