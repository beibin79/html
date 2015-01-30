var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dasb = (function (_super) {
    __extends(dasb, _super);
    function dasb() {
        _super.call(this);
        this.MaximumScore = 0;
        this.currScore = 0;
        this.gameStarted = false;
        this.timer = new egret.Timer(11000);
        this.oneSTimer = new egret.Timer(1000);
        this.timeRemain = 10;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        var stage = egret.MainContext.instance.stage;
        stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMouseHandler, this);
        var rect = new egret.Shape();
        rect.graphics.beginFill(0xffffff);
        rect.graphics.drawRect(0, 0, stage.width, stage.height);
        rect.graphics.endFill();
        this.addChild(rect);

        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeIsUp, this);
        this.oneSTimer.addEventListener(egret.TimerEvent.TIMER, this.oneSCount, this);
    }
    dasb.prototype.oneSCount = function () {
        this.timeRemain--;
        this.timerLabel.text = this.timeRemain + "s";
    };

    dasb.prototype.timeIsUp = function (event) {
        this.timer.stop();
        this.oneSTimer.stop();
        this.timeRemain = 10;
        this.timerLabel.text = "10s";
        this.gameEnd();
    };

    dasb.prototype.gameBegin = function () {
        this.currScore = 0;
        this.gameStarted = true;
        this.timer.start();
        this.timeRemain = 10;
        this.oneSTimer.start();

        console.log("game begins");
    };

    dasb.prototype.gameEnd = function () {
        this.gameStarted = false;
        if (this.currScore > this.MaximumScore) {
            this.MaximumScore = this.currScore;
        }
        this.currScore = 0;
        console.log("game ends");

        this.SB.graphics.beginFill(0xffffff * Math.random());

        //hide the SB
        this.SB.x = this.stage.stageWidth + 1000;
        this.SB.y = this.stage.stageHeight + 1000;

        this.txt.text = "现在得分： " + this.currScore + "\n 最高得分：" + this.MaximumScore;

        //pop up window!!!
        this.pop();
    };

    dasb.prototype.pop = function () {
        this.label.alpha = 1;
    };

    dasb.prototype.onMouseHandler = function (event) {
        console.log("clicked on" + event.localX + ", " + event.localY);

        //        if(this.SB.hitTestPoint(event.localX, event.localY, true)){
        //            console.log("Hit Local");
        //        }
        //
        //        if(this.SB.hitTestPoint(event.stageX, event.stageY, true)){
        //            console.log("Hit stage");
        //        }
        if (!this.gameStarted && this.label.hitTestPoint(event.stageX, event.stageY)) {
            this.label.alpha = 0;

            var height = this.stage.stageHeight;
            var width = this.stage.stageWidth;

            this.SB.x = Math.floor(width * Math.random()) - 100;
            if (this.SB.x < 0)
                this.SB.x += 100;

            this.SB.y = Math.floor(height * Math.random()) - 100;
            if (this.SB.y < 0)
                this.SB.y += 100;
        }

        //
        if (this.gameStarted == false && this.SB.hitTestPoint(event.localX, event.localY, true)) {
            this.gameBegin();
            this.gainOnePoint();
        } else if (this.gameStarted == true && this.SB.hitTestPoint(event.stageX, event.stageY, true)) {
            this.gainOnePoint();
        }
    };

    dasb.prototype.gainOnePoint = function () {
        this.currScore++;
        console.log("earn 1 point");
        this.txt.text = "现在得分： " + this.currScore + "\n 最高得分：" + this.MaximumScore;

        var height = this.stage.stageHeight;
        var width = this.stage.stageWidth;

        this.SB.x = Math.floor(width * Math.random()) - 100;
        if (this.SB.x < 0)
            this.SB.x += 100;

        this.SB.y = Math.floor(height * Math.random()) - 100;
        if (this.SB.y < 0)
            this.SB.y += 100;

        console.log(this.SB.x + "," + this.SB.y);
    };

    dasb.prototype.onAddToStage = function (event) {
        //for normal background
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");

        //for objects
        var height = this.stage.stageHeight;
        var width = this.stage.stageWidth;

        this.SB = new egret.Sprite();
        this.SB.graphics.beginFill(0xffffff * Math.random());
        this.SB.graphics.drawCircle(100, 100, 40);
        this.SB.graphics.endFill();
        this.SB.height = 200; //为什么要200才能受到 hit 检测器检测？
        this.SB.width = 200;
        this.addChild(this.SB);

        if (this.SB.hitTestPoint(110, 110, true)) {
            console.log("i know where the circle is!!");
        }

        this.txt = new egret.TextField();
        this.txt.text = "现在得分：000" + "\n最高得分：000"; //use this line to default txt.weight
        this.txt.text = "现在得分：" + this.currScore + "\n 最高得分：" + this.MaximumScore;
        this.txt.y = height - this.txt.height;
        this.txt.x = width / 2 - this.txt.width / 2;
        this.txt.textColor = 0xff4000;

        this.addChild(this.txt);

        this.label = new egret.TextField();
        this.label.text = "点击此处重玩游戏";
        this.label.alpha = 0;
        this.label.textColor = 0xff4000;
        this.label.x = this.stage.stageWidth / 2 - this.label.width / 2;
        this.label.y = this.stage.stageHeight / 2 - this.label.height / 2;
        this.addChild(this.label);

        this.timerLabel = new egret.TextField();
        this.timerLabel.text = "10s";
        this.timerLabel.x = width / 2 - this.timerLabel.width / 2;
        this.timerLabel.textColor = 0xff4000;
        this.addChild(this.timerLabel);
    };

    dasb.prototype.onGroupComp = function () {
        //        var bg:egret.Bitmap = new egret.Bitmap();
        //        bg.texture = RES.getRes("bgImage");
        //        this.addChild(bg);
        //        console.log("bg is already loaded!");
    };
    return dasb;
})(egret.DisplayObjectContainer);
