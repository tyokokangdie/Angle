/**
 * Created by Administrator on 2017/2/17.
 */


$(function () {


    getData();


    function getData() {
        let getMsg = window.location.search.slice(1);
        let reg = /=([a-zA-Z0-9]+)/;
        let match = reg.exec(getMsg)[1];
        console.log(match);

        $.ajax({
            type: 'get',
            url: './data/productid='+match+'.json',
            datatype: 'json',
            success: function (info) {
                console.log(info);
                let html = template('template', info);
                $('.container').append(html);
            }
        });
    }
} );
