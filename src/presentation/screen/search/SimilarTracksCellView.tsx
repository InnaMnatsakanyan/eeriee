import React from "react";
import styles from './SearchScreen.module.css';

interface SimilarTracksCellViewProps {
    name: string;
    artist: string;
    mbid: string
}

export default function SimilarTracksCellView({ name, artist, mbid }: SimilarTracksCellViewProps) {
    return (
        <div className={styles.similarTrackCell}>
            <h1>{name}</h1>
            <h3>{artist}</h3>
            <h3>{mbid}</h3>
            <button className={styles.currentTrackButtons}>
                <svg width="24px"
                     height="24px"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#ffffff"
                        strokeWidth="1"/>
                </svg>
            </button>
            <button className={styles.currentTrackButtons}>
                <svg width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     stroke="#ffffff"
                     strokeWidth="1">
                    <path d="M6 10H18"/>
                    <path d="M6 6H18"/>
                    <path d="M6 14H10"/>
                    <path d="M14 16H18"/>
                    <path d="M16 14L16 18"/>
                    <path d="M6 18H10"/>
                </svg>
            </button>
            <button className={styles.currentTrackButtons}>
                <svg width="24px"
                     height="24px"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     strokeWidth="1">
                    <path
                        d="M19 10.2679C20.3333 11.0377 20.3333 12.9623 19 13.7321L10 18.9282C8.66667 19.698 7 18.7358 7 17.1962L7 6.80385C7 5.26425 8.66667 4.302 10 5.0718L19 10.2679Z"
                        stroke="white"/>
                </svg>
            </button>
        </div>
    )
}