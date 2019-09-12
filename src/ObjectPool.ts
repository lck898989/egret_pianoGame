/***
 * 
 * 对象池
 * 
 */
class ObjectPool {
    private _pool: Array<eui.Image>;
    private _imgSource: string;
    public constructor() {
        this._pool = [];
    }
    public put(item: eui.Image): boolean {
        this._pool.push(item);
        return true;
    }
    public setImgSource(source: string): void {
        this._imgSource = source;
    }
    public cap(): eui.Image {
        let item = this._pool.pop();
        if(!item) {
            // 每创建一个新的对象将其放入对象池中去
            item = new eui.Image();
            item.source = this._imgSource;
            this.put(item);
        }
        return item;
    }
}