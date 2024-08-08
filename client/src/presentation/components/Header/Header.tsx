import React, {ChangeEvent} from 'react';
import styles from './Header.module.css';
import SearchBox from "../SearchBox/SearchBox";

interface HeaderProps {
    onTrackSearchClick: () => void;
    onTrackSearchTextChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    inputValue?: string
}

const Header: React.FC<HeaderProps> = ({ onTrackSearchClick, onTrackSearchTextChange, onKeyPress, inputValue }) => {
    return (
        <header className={styles.header}>
            <h1>rhymee</h1>
            <nav>
                <ul>
                    <li><a href="/">Suggest Me</a></li>
                    <li><a href="/">Explore</a></li>
                </ul>
            </nav>
            <SearchBox
                onTrackSearchClick={ onTrackSearchClick }
                onTrackSearchTextChange={ onTrackSearchTextChange }
                onKeyPress={onKeyPress}
                inputValue={inputValue}
            />
            <nav>
                <ul>
                    <li><a href="/">Playlists</a></li>
                    <li><a href="/">Radio</a></li>
                    <li><a href="/">Login/Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
