/****
 * 
 * 登录首页
 *
 */
class MainSceneLogin extends eui.Component {
    private GameMain: GameMain = null;
    private startBtn: eui.Image;
    private gp: eui.Image;
    private music_choose: eui.Image;
    private animGroup: eui.Group;
    private group: eui.Group;
    // 选择音乐group
    private music_group: eui.Group;

    public constructor() {
        super();
        // this.skin = "";
        this.skinName = "MainScene";
        // this.skin\
        egret.Tween.get(this.startBtn,{loop: true}).to({
            scaleX: 1.1,
            scaleY: 1.1
        },1000).call(() => {
            egret.Tween.get(this.startBtn).to({
                scaleX: 1,
                scaleY: 1
            })
        },1000);
    }
    protected createChildren(): void {
        console.log("mainScene is created");
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onDestory,this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tapDown,this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_END,this.tapUp,this);
        this.music_group.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.chooseMusicDown,this);
        this.music_group.addEventListener(egret.TouchEvent.TOUCH_END,this.chooseMusicUP,this);
        
    }
    // 选择歌曲
    private chooseMusicDown(): void {
        this.music_group.scaleX = 1.1;
        this.music_group.scaleY = 1.1;
        // 弹出选择音乐的scrollview

    }
    // 选择歌曲
    private chooseMusicUP(): void {
        this.music_group.scaleX = 1;
        this.music_group.scaleY = 1;
    }
    // 播放帧动画
    private initFremeAnimation(): void{
        // spineboy_png,spineboy_json
        let jsonData = RES.getRes("ss_mc_json");
        let imgData = RES.getRes("ss_tex_png");
        for(let i = 0; i < 20; i++) {
            let mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( jsonData, imgData );
            let mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("NewProject"));
            this.animGroup.addChild(mc);
            mc.x = Math.random() * 640;
            mc.y = Math.random() * 1136;
            mc.scaleX = 2;
            mc.scaleY = 2;
            mc.anchorOffsetX = mc.width * mc.scaleX / 2;
            mc.anchorOffsetY = mc.height * mc.scaleY / 2;
            mc.gotoAndPlay(1,-1);
        }
    }
    protected childrenCreated(): void { 
        console.log("-------------------->>>");
        // 旋转光盘
        egret.Tween.get(this.gp,{loop: true}).to({
            rotation: 360
        },3000);
        // 播放帧动画
        this.initFremeAnimation();
    }
    private tapUp(): void {
        this.startBtn.scaleX = 1.1;
        this.startBtn.scaleY = 1.1;
        this.GameMain = new GameMain();
        this.stage.addChild(this.GameMain);
        // 将当前的UI删除掉
        if(this.stage.contains(this)) {
            this.stage.removeChild(this);
        }
    }
    private tapDown(): void {
        this.startBtn.scaleX = 1;
        this.startBtn.scaleY = 1;
    }
    private onDestory(): void {
        // 去除所有动画文件
        egret.Tween.removeTweens(this.startBtn);
        egret.Tween.removeTweens(this.gp);
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tapDown,this);
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_END,this.tapUp,this);
        this.music_group.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.chooseMusicDown,this);
        this.music_group.removeEventListener(egret.TouchEvent.TOUCH_END,this.chooseMusicUP,this);
    }
    
}