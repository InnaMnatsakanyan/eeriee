import React, {ChangeEvent} from 'react';
import styles from './SearchBox.module.css';
import searchIcon from '../../../assets/icons/search.svg'
import * as path from "node:path";

interface SearchBoxProps {
    onTrackSearchClick: () => void;
    onTrackSearchTextChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    inputValue?: string
}
const SearchBox: React.FC<SearchBoxProps> = ({ onTrackSearchClick, onTrackSearchTextChange, onKeyPress, inputValue }) => {
    return (
        <div className={styles.searchBox}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search song by name"
                onChange={onTrackSearchTextChange}
                onKeyDown={onKeyPress}
                value={inputValue}
            />
            <button className={styles.searchButton} onClick={onTrackSearchClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.searchIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#767676"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            </button>
        </div>
    );
};

export default SearchBox;
