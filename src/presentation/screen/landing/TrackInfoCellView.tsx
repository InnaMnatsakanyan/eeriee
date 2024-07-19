interface TrackInfoCellViewProps {
    name: string;
    duration: string;
}

export default function TrackInfoCellView({ name, duration }: TrackInfoCellViewProps) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{duration}</h1>
        </div>
    )
}