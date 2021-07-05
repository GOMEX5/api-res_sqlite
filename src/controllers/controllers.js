const db = require('../database/db');

exports.read = async (req,res) =>{
    var sql = "SELECT * FROM books"
    var params = []
    await db.all(sql, params, (err, user)=>{
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        } else {
            res.json({
                "menssage":"success",
                "data":user
            });
        }
    });
}

exports.listar = async (req,res) =>{
    var sql = "SELECT * FROM books WHERE id = ?"
    var params = [req.params.id]
    await db.all(sql, params, (err, user)=>{
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        } else {
            res.json({
                "menssage":"success",
                "data":user
            });
        }
    });
}

exports.create = async (req,res)=>{
    var sql = 'INSERT INTO books (name, autor, edicion) VALUES (?,?,?)';
    var data = {
        name: req.body.name,
        autor: req.body.autor,
        edicion: req.body.edicion
    }
    var params = [data.name, data.autor, data.edicion]
    await db.run(sql, params, (err, results)=>{
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        } else {
            res.json({
                "menssage":"success",
                "data":results
            });
        }
    });
}

exports.update = async (req,res) =>{
    var sql = 'UPDATE books SET name = ?, autor = ?, edicion = ? WHERE id = ?';
    var data = {
        name: req.body.name,
        autor: req.body.autor,
        edicion: req.body.edicion
    }
    var params = [data.name, data.autor, data.edicion,req.params.id]
    await db.run(sql, params, (err, results)=>{
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        } else {
            res.json({
                "menssage":"success",
                "data":results
            });
        }
    });
}

exports.delete = async (req,res) =>{
    var sql = 'DELETE FROM books WHERE id = ?';
    var params = req.params.id
    await db.run(sql, params, (err, results)=>{
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        } else {
            res.json({
                "menssage":"success",
                "data":results
            });
        }
    });
}