const { request } = require("express");

var todomodel={
    gettodolist:function(pool){
        return new Promise(function(resolve,reject){
            var query=`SELECT * FROM logintable`;
            pool.query(query,function(error,result){
                if(error){
                    reject(error);
                  }
                    else{
                      resolve(result)
                    }
            });
        });
    },
    login:function(pool,checkData){
       return new Promise(function(resolve,reject){
        //  var UserName=request.body.UserName;
        //  var password=request.body.password;
        //  if(UserName && password){
         var query='SELECT * FROM logintable WHERE userName=? AND password=?';
          
         pool.query(query,[checkData.userName,checkData.userPassword],function(error,result){
           if(error){
              reject(error);
             }
               else{
                 resolve(result)
               }
       });
  
      });
    }
    }
     module.exports=todomodel;