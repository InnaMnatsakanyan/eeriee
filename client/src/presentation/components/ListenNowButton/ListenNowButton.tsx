import React from 'react';
import styles from './ListenNowButton.module.css';

interface SearchBoxProps {
    // onTrackSearchClick: () => void;
    // onTrackSearchTextChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
}
const ListenNowButton: React.FC<SearchBoxProps> = (
    // { onTrackSearchClick, onTrackSearchTextChange }
) => {
    return (
        <div className={styles.listenNow}>
            <svg
                width="30px"
                height="30px"
                viewBox="0 0 26 26"
                fill="#00C0C0"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1">
                <path
                    d="M19 10.2679C20.3333 11.0377 20.3333 12.9623 19 13.7321L10 18.9282C8.66667 19.698 7 18.7358 7 17.1962L7 6.80385C7 5.26425 8.66667 4.302 10 5.0718L19 10.2679Z"
                    stroke="#00C0C0"
                    strokeLinejoin="round"/>
            </svg>
            <button className={styles.searchButton}
            // onClick={onTrackSearchClick}
            >
                <p>Listen Now</p>
            </button>
        </div>
    )
}

export default ListenNowButton;
