class GameMain extends eui.Component {
    // 游戏背景
    private bg: egret.Bitmap;
    private offsetX: number = 156;
    private offsetY: number = 160;
    // 音符数组
    private musicNoteArr: MusicNote[];
    // 音乐资源文件数组
    private musicSourceArr: string[];
    private startTime: number;

    // 钢琴键
    private bar: eui.Image;
    
    public constructor() {
        super();
       
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onDestroy,this);
        this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
        this.skinName = "GameMain_Skin";
    }
    private onAdd(): void {
        this.musicSourceArr = [];
        for(let i = 3; i < 23; i++) {
            this.musicSourceArr.push("sound_" + i + "_mp3");
        }
        for(let i = 0; i < 20; i++) {
            let randomChannel: number = this.createRandomNumber(0,4);
            let musicNoteItem: MusicNote = new MusicNote("game_sheet_json.game_sheet_music");
            let soundItem: egret.Sound = RES.getRes(this.musicSourceArr[i]);
            musicNoteItem.x = 160 * randomChannel + randomChannel * 1;
            musicNoteItem.y = 660 - i * 161;
            musicNoteItem.setSoundDate(soundItem,i);
            this.addChild(musicNoteItem);
        }
        let len: number = this.bar.parent.numChildren;
        this.bar.parent.setChildIndex(this.bar,len - 1);
        this.startTime = Date.now();

    }
    private createRandomNumber(min: number,max: number): number {
        let res: number = -1;
        res = Math.floor(Math.random() * (max - min) + min);
        return res;
    }
    private onDestroy(): void {

    }
    // 帧循环
    private update(): void {
        let curTime: number = Date.now();
        let dt = curTime - this.startTime;

    }
}