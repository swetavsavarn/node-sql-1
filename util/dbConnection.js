const mysql = require('mysql');
const secret = require('./secretsDB');

 

var getConnection = async function() {
    try {
            let dbSecret = await secret.getSecrets(process.env.SECRET_NAME);
            let userName = JSON.parse(dbSecret).username;
            let password = JSON.parse(dbSecret).password;
            var connection = mysql.createConnection({
                host     : process.env.HOST,
                user     : userName,
                password : password,
                port     : process.env.PORT
              });
        return connection
        } catch(err) {
            console.log('error from getConnection',err)
        }
 
};

module.exports=getConnection