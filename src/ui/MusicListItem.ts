class MusicListItem extends eui.Component {
    private musicGroup: egret.tween.TweenGroup;
    private group: eui.Group;
    // 歌词作者
    private author: eui.Label;
    // 歌名
    private musicName: eui.Label;
    // 要播放的sound对象
    private soundDate: egret.Sound;
    // 要播放的音乐id
    private soundId: number;
    constructor(musicname: string,author: string) {
        
        super();
        this.skinName = "music_list_itemSkin";
        this.author.text = author;
        this.musicName.text = musicname;
    }
    protected childrenCreated(): void {
        this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onDestroy,this);
        this.group.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapGroup,this);
        // this.musicGroup.play(0);
    }
    private update(): void {
 
    }
    private tapGroup(): void {
        // 播放帧动画
        this.musicGroup.play(0);
    }
    private onDestroy(): void {

    }
    protected createChildren(): void {
        this.removeEventListener(egret.Event.ENTER_FRAME,this.update,this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onDestroy,this);
    }
}