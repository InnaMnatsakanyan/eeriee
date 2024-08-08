export class durationUIMapper {
    private formatDuration(ms: string): string {
        const totalSeconds = parseInt(ms, 10) / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${minutes}m ${seconds}s`;
    }
}