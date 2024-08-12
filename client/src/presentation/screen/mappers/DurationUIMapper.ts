export class DurationUIMapper {
    unixToMinuteSecond(unixTime) {
        const minutes = Math.floor(unixTime / 60);
        const seconds = unixTime % 60;
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${minutes}:${formattedSeconds}`;
    }
}