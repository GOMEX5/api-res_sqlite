const sqlite3 = require('sqlite3');
const md5 = require('md5');

const DBSOURCE = "Books.sqlite";

const db = new sqlite3.Database(DBSOURCE, async (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('conectado ala db');
        await db.run(`CREATE TABLE books(
            id       INTEGER PRIMARY KEY AUTOINCREMENT,
            name     TEXT,
            autor    TEXT,
            edicion  INTEGER)`,
            (err)=>{
                if (err) {

                } else {
                    var insert = 'INSERT INTO books (name, autor, edicion) VALUES (?,?,?)';
                    db.run(insert, ["marvel","stan lee",5]);
                    db.run(insert, ["dc","warner",7]);
                }
        });
    }
});

module.exports = db;