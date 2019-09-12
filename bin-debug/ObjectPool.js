var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/***
 *
 * 对象池
 *
 */
var ObjectPool = (function () {
    function ObjectPool() {
        this._pool = [];
    }
    ObjectPool.prototype.put = function (item) {
        this._pool.push(item);
        return true;
    };
    ObjectPool.prototype.setImgSource = function (source) {
        this._imgSource = source;
    };
    ObjectPool.prototype.cap = function () {
        var item = this._pool.pop();
        if (!item) {
            // 每创建一个新的对象将其放入对象池中去
            item = new eui.Image();
            item.source = this._imgSource;
            this.put(item);
        }
        return item;
    };
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map