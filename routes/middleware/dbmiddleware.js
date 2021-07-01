var middleware={
    mysqlconnection:function(req,res,next){
        req.getConnection(function(error,connection){
            if(error){
                res.send(error);
            }else{
                res.__pool=connection;
                next();
            }
        });
    },
};

module.exports=middleware;