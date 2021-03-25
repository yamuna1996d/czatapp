import { Close, Favorite, Replay, Star } from '@material-ui/icons'
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';
import { Link } from 'react-router-dom';

const SwipeButtons = () => {
    return (
        <div className = "swipebuttons">
            <Link to="/">
            <IconButton className="replay">
            <Replay fontSize="large" />
            </IconButton>
            </Link>
            <IconButton className="close">
            <Close fontSize="large"/>
            </IconButton>
            <IconButton className="start">
            <Star fontSize="large"/>
            </IconButton>
            <IconButton className="fav">
            <Favorite fontSize="large"/>
            </IconButton>
        </div>
    )
}
export default SwipeButtons;