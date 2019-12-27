'use strict';

var response = require('./res');
var connection = require('./conn');

exports.serversx = function(req,res) {
    const first_name = req.body.first_name
    const last_name = req.body.last_name

    connection.query('INSERT INTO person (first_name, last_name) values (?,?)',
    [ first_name, last_name ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            return res.send({first_name})
        }
    });
}

exports.createUsers = function(req, res) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    connection.query('INSERT INTO person (first_name, last_name) values (?,?)',
    [ first_name, last_name ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.users = function(req, res) {
    connection.query('SELECT * FROM person', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            return res.status(200).json({
                success: true,
                item: rows
              });
        }
    });
};

exports.findUsers = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM person where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.searchUsers = function(req, res) {
    var user_id = req.query.user_id;
    connection.query('SELECT first_name FROM person where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateUsers = function(req, res) {
    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    connection.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?',
    [ first_name, last_name, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    var user_id = req.body.user_id;
    connection.query('DELETE FROM person WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};

exports.findUsersx = async function(req, res) {
    function findContact(id){
        return new Promise(resolve => {
            var query = 'SELECT * FROM contact where user_id = ?';
            connection.query(query,[ id ], function (error, rows, fields){
                if(error){
                    console.log(error)
                } else{
                    resolve(rows); //Kembalian berupa kontak data
                }
            });
        });
    }

    var user_id = req.params.user_id;
    let logs = await findContact(user_id);

    var query = 'SELECT * FROM person where id = ?';
    connection.query(query, [ user_id ], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            connection.end()        
            return response.ok({rows,logs}, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.Order = function(req, res) {
    const { id } = req.params;

   if (id) {
     switch (id) {
       case "123-yourorder-456":
         return res.status(200).json({
           success: true,
           item: "Lord of the Rings Bluray DVD Boxset"
         });
       case "456-someother-333":
         return res.status(200).json({
           success: true,
           item:
             "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin... Classical Music Piano Playlist Mix"
         });
       default:
        return res.status(200).json({
            success: true,
            item:
                "Not Found"
            })
     }
    } else {
        return res.status(200).json({
            success: false,
            item:
              "Not Found"
          });
    }
}