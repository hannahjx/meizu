var checkInput_up=(function (){
    var $number_down=document.querySelector('#number_down');
    var $number_list=document.querySelector('.number_list');
    var $yz=document.querySelector('.yz');
    var $yz2=document.querySelector('.yz2');
    var $box=document.querySelector('.box');
    var $form=document.querySelector('.form');
    var $error1=document.querySelector('.error1');
    var $error2=document.querySelector('.error2');
    var $username=document.querySelector('.txt');
    var $sub=document.querySelector('.sub');
    return{
        init(){
            this.event();
        },
        event(){
            var _this=this;
            var flag = true;
                $number_down.onclick=function(){
                    if(flag){
                        $box.style.display == 'block'
                        move($box,{width:300,height:200},500);
                        flag = false;
                    }
                    else if(!flag){                     
                        move($box,{width:0,height:0},500,function(){
                            $box.style.display == 'none';
                            flag = true;
                        })
                    }
                }
                document.onmousedown=function(){
                    if(!flag){                     
                        move($box,{width:0,height:0},500,function(){
                            $box.style.display == 'none';
                            flag = true;
                        })
                    }
                }
                $form['tel'].onblur=function(){
                    var reg=/^1[3456789]\d{9}$/;
                    if(reg.test(this.value)){
                        $error2.style.display='none';
                        $error1.style.display='none';
                    }else{
                        $error2.style.display='block';
                        $error1.style.display='none';                       
                    }
                    if(this.value==''){
                        $error1.style.display='block';
                        $error2.style.display='none';
                    }
                }
                $form['tel'].oninput=function(){
                    if(this.value!=''){
                        $error1.style.display="none";
                        // $error1.innerHTML=`<span class="title"><img class="left" src="images/sign_up/error-ico.png"/>内容不能为空<img class="right" src="images/sign_up/close-ico.png"/></span>`;
                    }
                }
                $yz.onclick=function(){
                    $yz2.style.display='block';
                    move($yz2,{width:255,height:42},200);
                }
                $sub.onclick=function(){
                    var _this = this;
                    let user=$username.value;
                    console.log(user);
                    
                    sendAjax('php/sign_up.php',{data:{
                        username:user
                    }}).then(res =>{                        
                        if(res.code==0){
                            $form['onsubmit'] = 'return';
                        }else{
                            $error1.style.display="block";
                            $error1.innerHTML=`<span class="title"><img class="left" src="images/sign_up/error-ico.png"/>手机号已存在,请直接登录<img class="right" src="images/sign_up/close-ico.png"/></span>`;
                            return false;
                        }
                    })
                    // if($error1.style.display == "none" && $error2.style.display == "none"){
                    //     $form['onsubmit'] = 'return';
                    // }
                }                        
        }
    }
}())
