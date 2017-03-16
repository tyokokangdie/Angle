/**
 * Created by tracy on 2017/3/10.
 */
window.onload = function () {

    let txt = document.getElementById("txt");
    console.log(txt);
    txt.onfocus = function () {
        if (this.value == "请输入关键字") {
            this.value = "";
        }
    };

    txt.onblur = function () {
        if (this.value == "") {
            this.value = "请输入关键字";
        }
    }

    initTab();


function initTab() {
    let parentBox = document.querySelector('.slide');
    let childBox = parentBox.querySelector('ul');
    let parentBoxWidth = parentBox.offsetWidth;
    let childBoxWidth = childBox.offsetWidth;
    console.log(parentBoxWidth);
    console.log(childBoxWidth);
    let maxX = 0;
    let minX = parentBoxWidth -childBoxWidth;
    //console.log(maxX);
    let distance = 100;
    let maxSwipt = maxX + distance;
    let minSwipt = minX - distance;
    console.log(minSwipt);
//第一步  1 让菜单滑动起来
    let startX = 0;
    let moveX = 0;
    let distanceX = 0;
    let isMove = false;

    let currX = 0;//记录当前定位

    //定义公用方法
    /*添加过度*/
    let addTransition = function () {
        childBox.style.webkitTransition = "all .2s";
        /*兼容*/
        childBox.style.transition = "all .2s";
    }
    /*删除过度*/
    let removeTransition = function () {
        childBox.style.webkitTransition = "none";
        /*兼容*/
        childBox.style.transition = "none";
    }
    /*设置定位*/
    let setTranslateX = function (x) {
        childBox.style.webkitTransform = "translateX(" + x + "px)";
        childBox.style.transform = "translateX(" + x + "px)";
    }

    //绑定事件
    childBox.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });
    childBox.addEventListener('touchmove', function (e) {
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX
        //console.log(distanceX);
        //清楚过度
        removeTransition();
        //设置定位
        //第二步 当划到一定的区间不能滑动
            console.log(maxSwipt);
        if((currX + distanceX)<maxSwipt && (currX + distanceX)>minSwipt){
            //alert(11);
        setTranslateX(currX + distanceX);
        }
    });
    window.addEventListener('touchend', function (e) {
        if((currX + distanceX)>maxX){
            currX = maxX;
            addTransition();
            setTranslateX(currX);
        }else if((currX + distanceX)<minX){
            currX = minX;
            addTransition();
            setTranslateX(currX);
        }
        else{
            currX = currX + distanceX;
        }

        startX = 0;
        moveX = 0;
        distanceX =0;
        isMove = 0;
    });


}}