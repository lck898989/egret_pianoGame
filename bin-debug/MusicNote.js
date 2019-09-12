var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MusicNote = (function (_super) {
    __extends(MusicNote, _super);
    // private bar: eui.Image;
    function MusicNote(source) {
        var _this = _super.call(this) || this;
        // 该节点身上所携带的音乐id
        _this.musicId = -1;
        // 是否显示
        _this.isShow = true;
        _this.source = source;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onUnload, _this);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    MusicNote.prototype.setSoundDate = function (sound, id) {
        this.soundDate = sound;
        this.musicId = id;
    };
    // 帧循环
    MusicNote.prototype.update = function () {
        this.y += 10;
    };
    MusicNote.prototype.onLoad = function () {
        // 点击之后消失播放音乐文件
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapMusicNote, this);
    };
    MusicNote.prototype.tapMusicNote = function () {
        var _this = this;
        if (!this.soundChannel) {
            // 从头开始播放1次
            this.soundChannel = this.soundDate.play(0, 1);
            this.touchEnabled = false;
            egret.Tween.get(this).to({
                alpha: 0
            }, 400).call(function () {
                _this.touchEnabled = true;
                if (_this.parent && _this.parent.contains(_this)) {
                    _this.parent.removeChild(_this);
                }
            });
        }
    };
    MusicNote.prototype.onUnload = function () {
        if (this.soundChannel) {
            // this.soundChannel.stop();
        }
        this.removeEventListener(egret.Event.ENTER_FRAME, this.update, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapMusicNote, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onUnload, this);
    };
    return MusicNote;
}(eui.Image));
__reflect(MusicNote.prototype, "MusicNote");
//# sourceMappingURL=MusicNote.js.map