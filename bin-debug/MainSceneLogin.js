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
/****
 *
 * 登录首页
 *
 */
var MainSceneLogin = (function (_super) {
    __extends(MainSceneLogin, _super);
    function MainSceneLogin() {
        var _this = _super.call(this) || this;
        _this.GameMain = null;
        // this.skin = "";
        _this.skinName = "MainScene";
        // this.skin\
        egret.Tween.get(_this.startBtn, { loop: true }).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 1000).call(function () {
            egret.Tween.get(_this.startBtn).to({
                scaleX: 1,
                scaleY: 1
            });
        }, 1000);
        return _this;
    }
    MainSceneLogin.prototype.createChildren = function () {
        console.log("mainScene is created");
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestory, this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tapDown, this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.tapUp, this);
        this.music_choose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseMusic, this);
    };
    // 选择歌曲
    MainSceneLogin.prototype.chooseMusic = function () {
    };
    // 播放帧动画
    MainSceneLogin.prototype.initFremeAnimation = function () {
        // spineboy_png,spineboy_json
        var jsonData = RES.getRes("ss_mc_json");
        var imgData = RES.getRes("ss_tex_png");
        for (var i = 0; i < 20; i++) {
            var mcFactory = new egret.MovieClipDataFactory(jsonData, imgData);
            var mc = new egret.MovieClip(mcFactory.generateMovieClipData("NewProject"));
            this.animGroup.addChild(mc);
            mc.x = Math.random() * 640;
            mc.y = Math.random() * 1136;
            mc.scaleX = 2;
            mc.scaleY = 2;
            mc.anchorOffsetX = mc.width * mc.scaleX / 2;
            mc.anchorOffsetY = mc.height * mc.scaleY / 2;
            mc.gotoAndPlay(1, -1);
        }
    };
    MainSceneLogin.prototype.childrenCreated = function () {
        console.log("-------------------->>>");
        // 旋转光盘
        egret.Tween.get(this.gp, { loop: true }).to({
            rotation: 360
        }, 3000);
        // 播放帧动画
        this.initFremeAnimation();
    };
    MainSceneLogin.prototype.tapUp = function () {
        this.startBtn.scaleX = 1.1;
        this.startBtn.scaleY = 1.1;
        this.GameMain = new GameMain();
        this.stage.addChild(this.GameMain);
        // 将当前的UI删除掉
        if (this.stage.contains(this)) {
            this.stage.removeChild(this);
        }
    };
    MainSceneLogin.prototype.tapDown = function () {
        this.startBtn.scaleX = 1;
        this.startBtn.scaleY = 1;
    };
    MainSceneLogin.prototype.onDestory = function () {
        egret.Tween.removeTweens(this.startBtn);
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tapDown, this);
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.tapUp, this);
    };
    return MainSceneLogin;
}(eui.Component));
__reflect(MainSceneLogin.prototype, "MainSceneLogin");
//# sourceMappingURL=MainSceneLogin.js.map