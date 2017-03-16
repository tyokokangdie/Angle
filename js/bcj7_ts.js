/**
 * Created by acer-pc on 2017/2/14.
 */


$(function () {

    /*���ú���*/
    getData();

    //let
    /*��ȡ����*/

    function getData() {
        $.ajax({
            type: 'get',
            url: './data/title.json',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                let html = template("menuTpl", info)
                //console.log(html);

                $(".nav.nav-tabs").html(html);

                //console.log($('.nav.nav-tabs>li').data('titleid'));
                let html2 = template('tabPanTpl', info);
                //console.log(html2);
                $(".tab-content").html(html2);
                initTab();

                $('.tab-content ul').each(function (i, v) {
                    //let $box = $(".tab-content ul");
                    // console.log(v);
                    let $ul = $(v);
                    let title = $(v).data('titleid');
                    // console.log($box);
                      console.log(title);

                    $.ajax({
                        type: 'get',
                        url: './data/titleid=' + title+'.json',
                        dataType: 'json',
                        success: function (info) {
                            // console.log(info);
                            let html = template("menuTpl1", info)

                            //console.log(html);
                            $ul.html(html);
                            // $(".tab-content ul").html(html);
                        }
                    })
                })
            }
        });
    }

});

function initTab() {
    let parentBox = document.querySelector('.slide');
    let childBox = parentBox.querySelector('ul');
    let parentBoxWidth = parentBox.offsetWidth;
    let childBoxWidth = childBox.offsetWidth;
    //console.log(parentBoxWidth);
    console.log(childBoxWidth);
    let maxX = 0;
    let minX = parentBoxWidth -childBoxWidth;
    //console.log(maxX);
    let distance = 100;
    let maxSwipt = maxX + distance;
    let minSwipt = minX - distance;
    console.log(minSwipt);
//��һ��  1 �ò˵���������
    let startX = 0;
    let moveX = 0;
    let distanceX = 0;
    let isMove = false;

    let currX = 0;//��¼��ǰ��λ

    //���幫�÷���
    /*��ӹ���*/
    let addTransition = function () {
        childBox.style.webkitTransition = "all .2s";
        /*����*/
        childBox.style.transition = "all .2s";
    }
    /*ɾ������*/
    let removeTransition = function () {
        childBox.style.webkitTransition = "none";
        /*����*/
        childBox.style.transition = "none";
    }
    /*���ö�λ*/
    let setTranslateX = function (x) {
        childBox.style.webkitTransform = "translateX(" + x + "px)";
        childBox.style.transform = "translateX(" + x + "px)";
    }

    //���¼�
    childBox.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });
    childBox.addEventListener('touchmove', function (e) {
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX
        //console.log(distanceX);
        //�������
        removeTransition();
        //���ö�λ
        //�ڶ��� ������һ�������䲻�ܻ���
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


}


