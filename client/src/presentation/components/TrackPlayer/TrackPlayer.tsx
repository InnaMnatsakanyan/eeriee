import React, {useEffect, useRef, useState} from 'react';
import styles from './TrackPlayer.module.css';
import {Track} from "../../../data/model/TracksData";

interface TrackPlayerProps {
    track: Track | null;
    onClose: () => void;
}

const TrackPlayer: React.FC<TrackPlayerProps> = ({ track, onClose }) => {
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                const audio = audioRef.current;
                const currentTime = audioRef.current?.currentTime
                const duration = audioRef.current?.duration
                const progress = (currentTime / (duration || 1)) * 100;
                setProgress(progress);
            }
        };

        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    if (!track) return null;

    return (
        <div className={styles.player}>
            <div className={styles.trackInfo}>
                <img src={track.album_image} alt={track.album_name} className={styles.albumImage}/>
                <div className={styles.trackDetails}>
                    <h4>{track.name}</h4>
                    <h5>{track.artist_name}, {track.album_name}</h5>
                </div>
                <button className={styles.currentTrackButtons}>
                    <svg width="24px"
                         height="24px"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         strokeWidth="1">
                        <path
                            d="M7 13.7321C5.66667 12.9623 5.66667 11.0377 7 10.2679L16 5.0718C17.3333 4.302 19 5.26425 19 6.80385L19 17.1962C19 18.7358 17.3333 19.698 16 18.9282L7 13.7321Z"
                            stroke="#ffffff" strokeWidth="1" strokeLinejoin="round"/>
                        <path d="M4 19L4 5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round"
                              strokeLinejoin="round"/>
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
                            d="M5 7C5 5.89543 5.89543 5 7 5H8C9.10457 5 10 5.89543 10 7V17C10 18.1046 9.10457 19 8 19H7C5.89543 19 5 18.1046 5 17V7Z"
                            stroke="#ffffff" strokeWidth="1" strokeLinejoin="round"/>
                        <path
                            d="M14 7C14 5.89543 14.8954 5 16 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H16C14.8954 19 14 18.1046 14 17V7Z"
                            stroke="#ffffff" strokeWidth="1" strokeLinejoin="round"/>
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
                            d="M17 10.2679C18.3333 11.0377 18.3333 12.9623 17 13.7321L8 18.9282C6.66667 19.698 5 18.7358 5 17.1962L5 6.80385C5 5.26425 6.66667 4.302 8 5.0718L17 10.2679Z"
                            stroke="#ffffff" strokeWidth="1" strokeLinejoin="round"/>
                        <path d="M20 5V19" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className={styles.currentTrackButtons}>
                    <svg width="24px"
                         height="24px"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         strokeWidth="1">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                              stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <audio className={styles.audioDefPlayer} ref={audioRef} controls autoPlay src={track.audio}/>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progress}
                        style={{width: `${progress}%`}}
                    />
                </div>
                <button className={styles.currentTrackButtons}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         aria-labelledby="addToListIconTitle" stroke="#ffffff" strokeWidth="1" strokeLinecap="round"
                         strokeLinejoin="round" color="#ffffff"><title id="addToListIconTitle">Add To List</title>
                        <path d="M6 10H18"/>
                        <path d="M6 6H18"/>
                        <path d="M6 14H10"/>
                        <path d="M14 16H18"/>
                        <path d="M16 14L16 18"/>
                        <path d="M6 18H10"/>
                    </svg>
                </button>
                <button className={styles.currentTrackButtons} onClick={onClose}>
                    <svg width="30px"
                         height="30px"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         strokeWidth="1">
                        <path
                            d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                            fill="#ffffff"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default TrackPlayer;
