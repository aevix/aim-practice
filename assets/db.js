const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
    });


module.exports = {
create: ()=> {
    db.run('CREATE TABLE if not exists scores(name TEXT, score INTEGER)');
    // db.close();
},

data: () => {
    return new Promise((resolve,reject) => {
        db.all(`
        SELECT 
            name, score 
        FROM 
            scores 
        ORDER BY 
            score DESC
        LIMIT 
            10
        `, (err, rows) => {
                if (err){
                    throw err;
                }
            resolve(rows);
            });   
    })
},


del: () => {
    db.run('DELETE FROM scores');
    console.log('db formatted!');
},

enterData: function (name,score){
    return new Promise((resolve, reject) => {
        const newLocal = `INSERT INTO scores(name, score)
                VALUES(?,?)`;
        db.run(newLocal,[name,score]);
        db.all(`
        SELECT 
            name, score 
        FROM 
            scores 
        ORDER BY 
            score DESC
        LIMIT 
            10
        `, (err, rows) => {
                if (err){
                    throw err;
                }
            resolve(rows);
            })
    });
}




};
// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });