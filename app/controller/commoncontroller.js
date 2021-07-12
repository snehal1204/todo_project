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
          if(result.length == 0){
           responce.send({call:0})
          }else{
            responce.send({call:1})
          }
       })
       .catch(function(error){
         responce.send({call:999,data:error});
    
   });
  },
    dashboard:function(req,res){
      res.render('dashboard');
    }
};      
    module.exports=commonController;