/**
 * Created by acer-pc on 2017/2/17.
 */
$(function(){
    $("#loginSub").click(function(){
        // 判断用户名
        if($("input[name=username]").val() == 'null' || $("input[name=username]").val() == ""){
            $("#reminder").html("您输入的用户名为空");
            $("input[name=username]").focus();
            return false;
        }
        if(!checkeusername($("input[name=username]").val())){
            $("#reminder").html("用户名是否由3-10位的字母、数字和下划线组成");
            $("input[name=username]").focus();
            return false;
        }
        // 判断密码
        if($("input[name=password]").val() == 'null' || $("input[name=password]").val() == ""){
            $("#reminder").html("密码不能为空");
            $("input[name=password]").focus();
            return false;
        }
        if(!checkePWD($("input[name=password]").val())){
            $("#reminder").html("密码是由6-20位数字,英语字母,符号随意组成");
            $("input[name=username]").focus();
            return false;
        }
    });

// 验证用户名的函数
    function checkeusername(username){
        let str=username;
        // 验证用户名是否由3-10位的字母、数字和下划线组成的正则表达式如下：
        let Expression=/^(\w){3,10}$/;
        let objExp=new RegExp(Expression); //创建正则表达式对象
        if(objExp.test(str)==true){ //通过正则表达式验证
            return true;
        }else{
            return false;
        }
    }
});
// 验证密码的函数
function checkePWD(PWD){
    let str=PWD;
    // 密码是由6-20位数字,英语字母,符号随意组成；
    let Expression=/^[\w.]{6,20}$/;
    let objExp=new RegExp(Expression); //创建正则表达式对象
    if(objExp.test(str)==true){ //通过正则表达式验证
        return true;
    }else{
        return false;
    }
}