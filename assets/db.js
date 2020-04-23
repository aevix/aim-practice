const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the chinook database.');
    });

var data = [];

module.exports = {
// db.serialize(() => {
//     //Queries scheduled here will be serialized.
//     // db.run('CREATE TABLE scores(name text, score integer)')
//     //   .run(`INSERT INTO scores(name, score)
//     //         VALUES('Yuhyun', 99),
//     //               ('April', 40),
//     //               ('Eddie', 10)`)
//         db.each(`SELECT name, score FROM scores`, (err, row) => {
//         if (err){
//             throw err;
//         }
//         return row;
//     });
// });
data: data,

getName: () => {
    db.each(`SELECT name, score FROM scores`, (err, row) => {
            if (err){
                throw err;
            }
        data.push(row);
        })

},



enterData: function (name,score){
    // db.run(`INSERT INTO scores(name, score)
    //         VALUES(name,score)`)
    data.push({name: name, score: score});
}



// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
};