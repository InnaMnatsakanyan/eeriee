import {LandingUITrackInfoCell} from "./model/LandingUITrackInfoCell";

export default function TrackInfoCellView(current: LandingUITrackInfoCell) {
    return (
        <div>
            {current.name}
        </div>
)
}