import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="iconstyle" />
            </IconButton>
            <img src="https://img.freepik.com/free-vector/people-letter-y-initial-logo_8586-51.jpg?size=338&ext=jpg" 
            alt="logo" className="logo"/>
            <IconButton>
            <ForumIcon fontSize="large" className="iconstyle" />
            </IconButton>
            
        </div>
    )
}

export default Header
