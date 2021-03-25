import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link,useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ?(
                <IconButton onClick={()=>history.replace(backButton)}>
                <ArrowBack fontSize="large"/>
                </IconButton>
            ):(
                <IconButton>
            <PersonIcon fontSize="large" className="iconstyle" />
            </IconButton>
            )}
            
            <img src="https://img.freepik.com/free-vector/people-letter-y-initial-logo_8586-51.jpg?size=338&ext=jpg" 
            alt="logo" className="logo"/>
            <Link to="/chat">
            <IconButton>
            <ForumIcon fontSize="large" className="iconstyle" />
            </IconButton>
            </Link>
            
        </div>
    )
}

export default Header
