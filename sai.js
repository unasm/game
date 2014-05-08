/**
 * 这是个丢色子的游戏
 *    @name:       sai.js
 *    @author:     unasm<1264310280@qq.com>
 *    @since :     2014-03-22 09:22:06
 */
window.onload = function () {
    console.log("tesing");
    var cwidth = 400;
    var cheight = 400;
    var dicex = 50;
    var dicey = 50;
    var dicewidth = 100;
    var diceheight = 100;
    var radius = 3;
    var wl = 40 ,padding = 10;
    var ctx = document.getElementById('cvs').getContext('2d');
    (function init() {
        var ch = 1 + Math.floor(Math.random()*6);
        drawface(ch);
        console.log(ch);
        for (var i = 1; i < 7; ++i) {
            drawface(i);
        }
    })();
    /**
     * 传入具体的点，开始平铺绘制具体的点
     */
    function drawface(num) {
        switch (num) {
            case 1:
                drawRect( padding , padding , 1);
                break;
            case 2:
                drawRect( 2 * padding + wl,padding , 2);
                break;
            case 3:
                drawRect( 3 * padding + wl * 2 , padding , 3);
                break;
            case 4:
                drawRect( 4 * padding + wl * 3 , padding , 4);
                break;
            case 5:
                drawRect( 5 * padding + wl * 4 , padding , 5);
                break;
            case 6:
                drawRect( padding , 2 * padding + wl , 6);
                break;
            default:
                console.log("wrong");
        }
    };
    /**
     * 绘制具体的色子点
     * @param {num} stx 色子绘制起始的x点
     * @param {num} sty 色子绘制起始的y点
     * @param {num} num 色子的个数
     */
    function drawRect(stx , sty , num) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgb(2, 0 , 0)';
        ctx.strokeRect(stx ,  sty , wl , wl);
        switch (num) {
            case 1:
                drawPoint(stx + wl / 2 , sty + wl / 2 , 2);
            break;
            case 2:
                drawPoint(stx + wl / 2 , sty + wl / 3);
                drawPoint(stx + wl / 2 , sty + wl * 2 / 3);
            break;
            case 3:
                drawPoint(stx + wl / 2 , sty + wl / 3);
                drawPoint(stx + wl / 3 , sty + wl * 2 / 3);
                drawPoint(stx + wl / 3 * 2 , sty + wl * 2 / 3);
            break;
            case 4:
                drawPoint(stx + wl / 3 , sty + wl / 3);
                drawPoint(stx + wl / 3 , sty + wl * 2 / 3);
                drawPoint(stx + wl / 3 * 2 , sty + wl / 3);
                drawPoint(stx + wl / 3 * 2 , sty + wl * 2 / 3);
            break;
            case 5:
                drawPoint(stx + wl / 3 , sty + wl / 3);
                drawPoint(stx + wl / 3 , sty + wl * 2 / 3);
                drawPoint(stx + wl / 3 * 2 , sty + wl / 3);
                drawPoint(stx + wl / 3 * 2 , sty + wl * 2 / 3);
                drawPoint(stx + wl / 2 , sty + wl / 2);
            break;
            case 6:
                drawPoint(stx + wl / 3 , sty + wl / 3);
                drawPoint(stx + wl / 3 , sty + wl * 2 / 3);
                drawPoint(stx + wl / 3 , sty + wl / 2);
                drawPoint(stx + wl / 3 * 2 , sty + wl * 2 / 3);
                drawPoint(stx + wl / 3 * 2 , sty + wl / 2);
                drawPoint(stx + wl / 3 * 2 , sty + wl / 3);
            break;
            default:
                console.log("now");
        }
    }
    function drawPoint(centX,centY , bei ) {
        if(bei === undefined)
            bei = 1;
        ctx.fillStyle  = 'rgb(255 , 0,0)';
        ctx.arc(centX, centY , radius * bei ,2 * Math.PI, 0,true);
        ctx.fill();
        ctx.closePath();
    }
}
