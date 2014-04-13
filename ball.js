/**
 * 这是个碰碰球的游戏
 *    @name:       sai.js
 *    @author:     unasm<1264310280@qq.com>
 *    @since :     2014-03-22 09:22:06
 */
window.onload = function () {
    var doc = document;
    var spx = Number(ball.hori.value);
    var spy = Number(ball.vector.value);
    //盒子的高度和宽度，边的高度和宽度
    var boxHeight = 300 , boxWidth = 400 , wallWdith = 10,wallHeight = 10;
    var ballrad = 10;
    var ballx = 20,bally = 20;
        spx = 0.5;
        spy = 0.5;
    doc.getElementById('ball').onsubmit= function (event) {
        event = event || window.event;
        event.preventDefault();
        spx = -1;
        spy = 1;
        //spx = Number(ball.hori.value);
        //spy = Number(ball.vector.value);
    };
    var $this = this;
    (function init() {
        var stxy = 0;
        ctx = doc.getElementById('cvs').getContext('2d');
        //linewidth 指的是两边的加起来的值
        ctx.lineWidth = ballrad;//周围边的宽度
        //整个场地的xy值
        $this.innerStartx = stxy + ballrad / 2;
        $this.innerStarty = stxy + ballrad / 2;
        $this.innerWidth = boxWidth - ballrad ;
        $this.innerHeight = boxHeight - ballrad ;
        //球可以到达的最大的x ，y范围
        $this.ballminX =  $this.innerStartx + ballrad;
        $this.ballmaxX =  $this.innerWidth - ballrad / 2;
        $this.ballminY = $this.innerStarty + ballrad ;
        $this.ballmaxY = $this.innerHeight - ballrad / 2;

        ctx.fillStyle = "green";
        ctx.strokeRect(stxy,stxy, boxWidth , boxHeight);

        ctx.fillRect($this.innerStartx , $this.innerStarty , $this.innerWidth , $this.innerHeight );

        //避免开始不在活动区域内部的情况，以免出现bug
        ballx = Math.max($this.ballminX , ballx);
        ballx = Math.min($this.ballmaxX ,ballx);
        bally = Math.max(bally, $this.ballminY);
        bally = Math.min(bally, $this.ballmaxY);
        //ctx.strokeText('Hello,World!!' , 20 , 100);

        setInterval(moveball,10);
    })();
    function moveball () {
        ctx.clearRect($this.innerStartx , $this.innerStarty , $this.innerWidth , $this.innerHeight);
        ctx.beginPath();
        ctx.arc(ballx,bally,ballrad , 0 , Math.PI * 2 , true);
        ctx.fill();
        //对下一步进行检测,碰撞则扭转方向,开始就在强内部会出问题
        if( (ballx + spx > $this.ballmaxX) ||( ballx + spx < $this.ballminX)){
            spx = - spx;
        }
        if( (bally + spy > $this.ballmaxY ) || (bally + spy < $this.ballminY)){
            spy = -spy;
        }
        ballx += spx;
        console.log(ballx);
        bally += spy;
    }
}

