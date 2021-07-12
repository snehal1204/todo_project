//  alert('Hello')
$(document).ready(function(){
     $('#submit-id').click(function(event){
        event.preventDefault();
        var sendData = {
            userName:$('#userName').val(),
            userPassword:$('#userPassword').val()
        }
        var ajaxData = {
            url:'login',
            type:"post",
            data:sendData
        }

        $.ajax(ajaxData)
        .done(function(serverResponse){
           // console.log(serverResponse);
           if(serverResponse.call == 1){
               window.location.assign("/dashboard");
           }else{
               alert("Invalid Username Or Password");
           }
        }).fail(function(error){
            console.log(error);
        });
     });
 });