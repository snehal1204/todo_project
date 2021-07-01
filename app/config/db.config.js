const mysql=require ("mysql2");
const myConnection=require("express-myconnection");
const optionDB={
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'logintable',


};
module.exports={
    mysql:mysql,
    myConnection:myConnection,
    optionDB :optionDB,
    
    
}