import styles from './LandingScreen.module.css';
import ListenNowButton from "../../components/ListenNowButton/ListenNowButton";

interface TopArtistCellViewProps {
    name: string;
    image: string;
}

export default function TopArtistCellView({ name, image }: TopArtistCellViewProps) {
    return (
        <div className={styles.topArtistCellOut}>
            <h3>Top Artist pick</h3>
            <div className={styles.topArtistCellIn}>
                <img src={image} alt={'img'}/>
                <div className={styles.topArtistInfo}>
                    <h1>{name}</h1>
                    <ListenNowButton/>
                </div>
            </div>
        </div>
    )
}