import {ArtistTrackData} from "../../../../data/model/ArtistTrackData";
import {LandingUITrackInfoCell} from "../model/LandingUITrackInfoCell";

export class TrackInfoUIMapper {
    toUITrackCell(data: ArtistTrackData) : LandingUITrackInfoCell {
        return {
            name: data.track.name,
            duration: this.formatDuration(data.track.duration),
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