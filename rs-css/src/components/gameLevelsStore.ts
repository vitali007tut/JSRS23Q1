export default class GameLevelsStore {
    private readonly LEVEL: string = 'level';
    private readonly COMPLETE_LEVELS: string = 'complete levels';

    setLevelInStorage(level: string): void {
        localStorage.setItem(this.LEVEL, level);
    }
    getLevelFromLocalStorage(): string | null {
        return localStorage.getItem(this.LEVEL);
    }
    setCompleteLevelsInStorage(levelsArray: string): void {
        localStorage.setItem(this.COMPLETE_LEVELS, levelsArray);
    }
    getCompleteLevelsFromStorage(): string {
        const storageValue: string | null = localStorage.getItem(this.COMPLETE_LEVELS);
        if (storageValue) return storageValue;
        else throw new Error('storage');
    }
}
