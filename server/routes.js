'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route("/api/order/:id")
        .get(todoList.Order);

    app.route("/api/listuser")
        .get(todoList.users);
    
    app.route('/users/:user_id')
        .get(todoList.findUsers);

    app.route('/fsearch')
        .get(todoList.searchUsers);

    app.route('/fusers')
        .post(todoList.createUsers);

    app.route('/fusers')
        .put(todoList.updateUsers);
    
    app.route('/fusers')
        .delete(todoList.deleteUsers);
    
    app.route('/find/:user_id')
        .get(todoList.findUsersx);

    //app.route('/')
        //.get(todoList.index);

    app.route('/fusers')
        .get(todoList.users);
};