import React, {useState} from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setinputSearch] = useState("")

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_YouTube.svg" alt=""/>
                </Link>
            </div>
                <div className="header__input">
                    <input onChange={e => setinputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                    </Link>
                </div>                

            <div className="header__icons">
                <VideoCall className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar className="header__icon" alt="Profile" src="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"/>
            </div>
            
        </div>

    )
}

export default Header
