export default class GameLevelsStore {
    private readonly LEVEL_KEY: string = 'level';
    private readonly COMPLETE_LEVELS_KEY: string = 'complete levels';
    private static instanceStorage = new GameLevelsStore();
    public static getInstance() {
        return this.instanceStorage;
    }

    setLevelInStorage(level: string): void {
        localStorage.setItem(this.LEVEL_KEY, level);
    }
    getLevelFromLocalStorage(): string | null {
        return localStorage.getItem(this.LEVEL_KEY);
    }
    setCompleteLevelsInStorage(levelsArray: string): void {
        localStorage.setItem(this.COMPLETE_LEVELS_KEY, levelsArray);
    }
    getCompleteLevelsFromStorage(): string {
        const storageValue: string | null = localStorage.getItem(this.COMPLETE_LEVELS_KEY);
        if (storageValue) return storageValue;
        else throw new Error('storage');
    }
}
