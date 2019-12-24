'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route("/api/order/:id")
        .get(todoList.Order);

    app.route("/api/listuser")
        .get(todoList.users);
    
    app.route('/users/:user_id')
        .get(todoList.findUsers);

    app.route('/search')
        .get(todoList.searchUsers);

    app.route('/users')
        .post(todoList.createUsers);

    app.route('/users')
        .put(todoList.updateUsers);
    
    app.route('/users')
        .delete(todoList.deleteUsers);
    
    app.route('/find/:user_id')
        .get(todoList.findUsersx);

    //app.route('/')
        //.get(todoList.index);

    //app.route('/users')
      //  .get(todoList.users);
};