const { request, query } = require("express");
const connection = require("express-myconnection");
var todomodel=require("../model/todomodel");

var commonController={
    homeview:function(req,res,next) {
      todomodel.gettodolist(res.__pool)
      .then(function(result){
         
            res.render('index');
           }).catch(function(error){
          res.send({call:0,data:error})
      
      });
    },
  

      

      login:function(request,responce,next){
        var getData =request.body;
       
        todomodel.login(responce.__pool,getData)
        .then(function(result){
          console.log(result.length);
          if(result.length == 0){
            responce.send({call:0,data:"Invalid User"})
          }else{
            responce.redirect("/dashboard")
          }
       })
       .catch(function(error){
         responce.send({call:999,data:error});
    
   });
  }
};      
    module.exports=commonController;