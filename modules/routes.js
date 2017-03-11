/*!
    * Copyright 2016 ozkary.com
    * http://ozkary.com/ by Oscar Garcia
    * Licensed under the MIT license. Please see LICENSE for more information.
    *
    * ozkary.passport
    * azure ad authentication - server app routes
    * ozkary.com
    * ver. 1.0.0
    *
    * Created By oscar garcia 
    *
    * Update/Fix History
    *   ogarcia 10/01/2016 initial implementation
    *
    */
module.exports.init = function (app, __dirname) {
           
    //add the route for login/out handlers    
    app.get('/login', login)
    app.get('/logout', logout)

    //login 
    function login (req, res){
        //not implemented
    }  
    
    // logout
    function logout (req, res) {
    
        res.redirect('/');                
    }
 
};