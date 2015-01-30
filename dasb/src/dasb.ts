
class dasb extends egret.DisplayObjectContainer
{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        var stage:egret.Stage = egret.MainContext.instance.stage;
        stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMouseHandler, this);
        var rect:egret.Shape = new egret.Shape();
        rect.graphics.beginFill(0xffffff);
        rect.graphics.drawRect(0,0,stage.width,stage.height);
        rect.graphics.endFill();
        this.addChild(rect);

        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeIsUp, this);
        this.oneSTimer.addEventListener(egret.TimerEvent.TIMER, this.oneSCount, this);
    }

    private MaximumScore:number = 0;
    private currScore:number = 0;
    private gameStarted:boolean = false;
    private SB:egret.Sprite;
    private timer:egret.Timer = new egret.Timer(11000);
    private oneSTimer:egret.Timer = new egret.Timer(1000);
    private timeRemain:number = 10;
    private txt:egret.TextField;
    private timerLabel:egret.TextField;

    private oneSCount()
    {
        this.timeRemain--;
        this.timerLabel.text = this.timeRemain + "s";
    }


    private timeIsUp(event:egret.TimerEvent):void
    {
        this.timer.stop();
        this.oneSTimer.stop();
        this.timeRemain = 10;
        this.timerLabel.text = "10s";
        this.gameEnd();
    }


    private gameBegin()
    {
        this.currScore = 0;
        this.gameStarted = true;
        this.timer.start();
        this.timeRemain = 10;
        this.oneSTimer.start();

        console.log("game begins");
    }


    private gameEnd()
    {
        this.gameStarted = false;
        if(this.currScore > this.MaximumScore){
            this.MaximumScore = this.currScore;
        }
        this.currScore = 0;
        console.log("game ends");

        this.SB.graphics.beginFill(0xffffff * Math.random());

        //hide the SB
        this.SB.x = this.stage.stageWidth + 1000;
        this.SB.y = this.stage.stageHeight + 1000;

        this.SB.graphics.endFill();


        this.txt.text = "现在得分： " + this.currScore +"\n 最高得分：" + this.MaximumScore;

        var ms = this.MaximumScore;

        //this is a block
        WeixinApi.ready(function(api:WeixinApi){

            alert("WeixinAPI ready after gaming!!");

            var info:WeixinShareInfo = new WeixinShareInfo();
            info.title = "欢迎玩耍打烧饼！大家快来打烧饼啊！！！~";
            info.desc =  "我的最高分是" + ms + "，你们能超过我吗？";
            info.link = "umich.edu/~libe/dasb/launcher/release.html";
            info.imgUrl = "umich.edu/~libe/dog.jpg";

            api.shareToFriend(info);
            api.shareToTimeline(info);
        })

        //pop up window!!!
        this.pop();

    }


    private label:egret.TextField;
    private pop()
    {
        this.label.alpha = 1;
    }

    private onMouseHandler(event:egret.TouchEvent):void
    {
        console.log("clicked on" + event.localX +", " + event.localY);

//        if(this.SB.hitTestPoint(event.localX, event.localY, true)){
//            console.log("Hit Local");
//        }
//
//        if(this.SB.hitTestPoint(event.stageX, event.stageY, true)){
//            console.log("Hit stage");
//        }
        if(!this.gameStarted && this.label.hitTestPoint(event.stageX, event.stageY))
        //注意这里判断没有 true
        {
            this.label.alpha = 0;

            var height = this.stage.stageHeight;
            var width = this.stage.stageWidth;

            this.SB.x = Math.floor(width * Math.random()) - 100;
            if(this.SB.x < 0) this.SB.x += 100;

            this.SB.y = Math.floor(height * Math.random()) - 100;
            if(this.SB.y < 0) this.SB.y += 100;

        }
//
        if(this.gameStarted==false && this.SB.hitTestPoint(event.localX, event.localY, true)){
            this.gameBegin();
            this.gainOnePoint();
        }else if(this.gameStarted==true && this.SB.hitTestPoint(event.stageX, event.stageY, true)){
            this.gainOnePoint();
        }
    }

    private gainOnePoint()
    {
        this.currScore++;
        console.log("earn 1 point");
        this.txt.text = "现在得分： " + this.currScore +"\n 最高得分：" + this.MaximumScore;

        var height = this.stage.stageHeight;
        var width = this.stage.stageWidth;

        this.SB.x = Math.floor(width * Math.random()) - 100;
        if(this.SB.x < 0) this.SB.x += 100;

        this.SB.y = Math.floor(height * Math.random()) - 100;
        if(this.SB.y < 0) this.SB.y += 100;

        console.log(this.SB.x + "," + this.SB.y);
    }




    private onAddToStage(event:egret.Event)
    {
        //for normal background
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");

        //for objects
        var height = this.stage.stageHeight;
        var width = this.stage.stageWidth;

        this.SB= new egret.Sprite();
        this.SB.graphics.beginFill(0xffffff * Math.random());
        this.SB.graphics.drawCircle(100, 100, 40);
        this.SB.graphics.endFill();
        this.SB.height = 200; //为什么要200才能受到 hit 检测器检测？
        this.SB.width = 200;
        this.addChild(this.SB);

        if(this.SB.hitTestPoint(110, 110, true)){
            console.log("i know where the circle is!!");
        }

        this.txt = new egret.TextField();
        this.txt.text = "现在得分：000" + "\n最高得分：000"; //use this line to default txt.weight
        this.txt.text = "现在得分：" + this.currScore +"\n 最高得分：" + this.MaximumScore;
        this.txt.y = height - this.txt.height;
        this.txt.x = width/2 - this.txt.width/2;
        this.txt.textColor = 0xff4000;

        this.addChild(this.txt);



        this.label = new egret.TextField();
        this.label.text = "点击此处重玩游戏";
        this.label.alpha = 0;
        this.label.textColor = 0xff4000;
        this.label.x = this.stage.stageWidth / 2 - this.label.width/2;
        this.label.y = this.stage.stageHeight/2 - this.label.height/2;
        this.addChild(this.label);


        this.timerLabel = new egret.TextField();
        this.timerLabel.text = "10s";
        this.timerLabel.x = width/2 - this.timerLabel.width/2;
        this.timerLabel.textColor = 0xff4000;
        this.addChild(this.timerLabel);

        WeixinApi.ready(function(api:WeixinApi){

            alert("WeixinAPI ready in prep!!");

            var info:WeixinShareInfo = new WeixinShareInfo();
            info.title = "欢迎玩耍打烧饼！大家快来打烧饼啊！！！~";
            info.desc =  "我发现了一个好游戏~打烧饼~卧槽怎么这么傻的名字";
            info.link = "umich.edu/~libe/dasb/launcher/release.html";
            info.imgUrl = "umich.edu/~libe/dog.jpg";

            api.shareToFriend(info);
            api.shareToTimeline(info);


        })

    }


    private onGroupComp() {
//        var bg:egret.Bitmap = new egret.Bitmap();
//        bg.texture = RES.getRes("bgImage");
//        this.addChild(bg);
//        console.log("bg is already loaded!");
    }








}


