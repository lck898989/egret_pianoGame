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
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.offsetX = 156;
        _this.offsetY = 160;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onDestroy, _this);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update, _this);
        _this.skinName = "GameMain_Skin";
        return _this;
    }
    GameMain.prototype.onAdd = function () {
        this.musicSourceArr = [];
        for (var i = 3; i < 23; i++) {
            this.musicSourceArr.push("sound_" + i + "_mp3");
        }
        for (var i = 0; i < 20; i++) {
            var randomChannel = this.createRandomNumber(0, 4);
            var musicNoteItem = new MusicNote("game_sheet_json.game_sheet_music");
            var soundItem = RES.getRes(this.musicSourceArr[i]);
            musicNoteItem.x = 160 * randomChannel + randomChannel * 1;
            musicNoteItem.y = 660 - i * 161;
            musicNoteItem.setSoundDate(soundItem, i);
            this.addChild(musicNoteItem);
        }
        var len = this.bar.parent.numChildren;
        this.bar.parent.setChildIndex(this.bar, len - 1);
        this.startTime = Date.now();
    };
    GameMain.prototype.createRandomNumber = function (min, max) {
        var res = -1;
        res = Math.floor(Math.random() * (max - min) + min);
        return res;
    };
    GameMain.prototype.onDestroy = function () {
    };
    // 帧循环
    GameMain.prototype.update = function () {
        var curTime = Date.now();
        var dt = curTime - this.startTime;
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain");
//# sourceMappingURL=GameMain.js.map