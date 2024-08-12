import {TrackData} from "../../../../client/src/data/model/TrackData";
import {LandingUITrackInfoCell} from "../landing/model/LandingUITrackInfoCell";

export class TrackInfoUIMapper {
    toUITrackCell(data: TrackData) : LandingUITrackInfoCell {
        return {
            name: data.track.name,
            duration: this.formatDuration(data.track.duration),
            url: data.track.url,
            artistName: data.track.artist.name,
            albumTitle: data.track.album.title,
            albumImage: data.track.album.image[3]
        } as LandingUITrackInfoCell;
    }

    // needs to be deleted and moved to a new file called trackDurationMapper.ts
    private formatDuration(ms: string): string {
        const totalSeconds = parseInt(ms, 10) / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${minutes}m ${seconds}s`;
    }
}