class MusicNote extends eui.Image {
    // 该节点身上所携带的音乐id
    private musicId: number = -1;
    // 是否显示
    private isShow: boolean = true;
    // 携带的音乐文件
    private soundDate: egret.Sound;
    private soundChannel: egret.SoundChannel;
    // private bar: eui.Image;

    constructor(source: string) {
        super();
        this.source = source;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onLoad,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onUnload,this);
        this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
    }
    public setSoundDate(sound: egret.Sound,id: number): void {
        this.soundDate = sound;
        this.musicId = id;
    }
    // 帧循环
    private update(): void {
        this.y += 10;
    }
    private onLoad(): void {
        // 点击之后消失播放音乐文件
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapMusicNote,this);
    }

    private tapMusicNote(): void {
        if(!this.soundChannel) {
            // 从头开始播放1次
            this.soundChannel = this.soundDate.play(0,1);
            this.touchEnabled = false;
            egret.Tween.get(this).to({
                alpha: 0
            },400).call(() => {
                this.touchEnabled = true;
                if(this.parent && this.parent.contains(this)) {
                    this.parent.removeChild(this);
                }
            });
        }
    }
    private onUnload(): void {
        if(this.soundChannel) {
            // this.soundChannel.stop();
        }
        this.removeEventListener(egret.Event.ENTER_FRAME,this.update,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapMusicNote,this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onLoad,this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onUnload,this);
    }

}