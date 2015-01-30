var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //        console.log("i am here...");
        //
        //        var stage:egret.Stage = egret.MainContext.instance.stage;
        //        stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMouseHandler, this);
        //
        //
        //        console.log("onAddToStage half...");
        //
        //        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeIsUp, this);
        //
        //
        //        console.log("onAddToStage finished");
    }
    //    private MaximumScore = 0;
    //    private currScore = 0;
    //    private gameStarted = false;
    //    private SB;
    //    private timer:egret.Timer = new egret.Timer(10000);
    //
    //    private timeIsUp(event:egret.TimerEvent):void
    //    {
    //        this.timer.stop();
    //        this.gameEnd();
    //    }
    //
    //
    //    private gameBegin()
    //    {
    //        this.currScore = 0;
    //        this.gameStarted = true;
    //    }
    //
    //
    //    private gameEnd()
    //    {
    //        this.gameStarted = false;
    //        if(this.currScore > this.MaximumScore){
    //            this.MaximumScore = this.currScore;
    //        }
    //        this.currScore = 0;
    //    }
    //
    //    private onMouseHandler(event:egret.TouchEvent):void
    //    {
    //        var stageX:number = event.stageX;
    //        var stageY:number = event.stageY;
    //        var localX:number = event.localX;
    //        var localY:number = event.localY;
    //        var target:any = event.target;
    //        var currentTarget:any = event.currentTarget;
    //        if(!this.gameStarted && currentTarget.isEqual(this.SB)){
    //            this.gameBegin();
    //        }else if(this.gameStarted && currentTarget.isEqual(this.SB)){
    //            this.currScore++;
    //        }
    //
    //
    //    }
    HelloWorld.prototype.onAddToStage = function (event) {
        //for normal background
        //        this.SB= new egret.Sprite();
        //        this.SB.graphics.beginFill(0xffffff * Math.random() );
        //        this.SB.graphics.drawCircle(40, 40, 10);
        //        this.SB.graphics.endFill();
        //        this.addChild(this.SB);
        var temp = new egret.Shape();
        temp.graphics.beginFill(0xffffff * Math.random());
        temp.graphics.drawCircle(40, 40, 10);
        temp.graphics.endFill();
        temp.width = 40;
        temp.height = 40;
        temp.x = 100;
        temp.y = 100;
        this.addChild(temp);
    };
    return HelloWorld;
})(egret.DisplayObjectContainer);
