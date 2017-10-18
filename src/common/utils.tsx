
export class Utils {
    static lastId: number = 0;

    static NewId(prefix?: string): string {
        prefix = prefix || "id";
        this.lastId++;
        return `${prefix}${this.lastId}`;
    }

    static getParams(obj: any) {
        return obj.match.params;
    }
}
