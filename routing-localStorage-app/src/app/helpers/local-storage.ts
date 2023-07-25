export class LocalStorage {
    Get(key: any): any {
        return key in localStorage ?
            JSON.parse(localStorage[key]) :
            null;
    }
    Set(key: string, value: any): void {
        localStorage[key] = JSON.stringify(value);
    };
}
