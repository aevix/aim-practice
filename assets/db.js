const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
    });

var data = [];

module.exports = {
create: ()=> {
    db.run('CREATE TABLE if not exists scores(name TEXT, score INTEGER)');
    // db.close();
},

data: data,

getName: () => {
    db.each(`
    SELECT 
        name, score 
    FROM 
        scores 
    ORDER BY 
        score DESC
    LIMIT 
        10
    `, (err, row) => {
            if (err){
                throw err;
            }
        console.log(row);
        data.push(row);
        })

},



enterData: function (name,score){
    const newLocal = `INSERT INTO scores(name, score)
            VALUES(?,?)`;
    db.run(newLocal,[name,score]);
    data.push({name: name, score: score});
}




};
// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });