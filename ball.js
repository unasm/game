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
    var ballrad = 8;
    var ballx = 20,bally = 20;
    doc.getElementById('ball').onsubmit= function (event) {
        event = event || window.event;
        event.preventDefault();
        spx = Number(ball.hori.value);
        spy = Number(ball.vector.value);
    };
    (function init() {
        ctx = doc.getElementById('cvs').getContext('2d');
        ctx.lineWidth = ballrad;
        ctx.strokeRect(0,0, boxWidth , boxHeight);
        ctx.fillStyle = "green";
        ctx.fillRect(wallWdith - ballrad , wallHeight - ballrad ,boxWidth -wallWdith + ballrad / 2, boxHeight - wallHeight + ballrad / 2);
        //ctx.strokeText('Hello,World!!' , 20 , 100);
        //ctx.fillStyle = "rgb(100,200,200)";
        //ctx.clearRect(wallWdith  - ballrad ,wallHeight  - ballrad  ,boxWidth - 2 * wallWdith,boxHeight - 2 * wallHeight );
        //setInterval(moveball,10);
    })();
    function moveball () {
        ctx.beginPath();
        ctx.arc(ballx,bally,ballrad , 0 , Math.PI * 2 , true);
        ctx.fill();
        ballx += spx;
        bally += spy;
    }
}

