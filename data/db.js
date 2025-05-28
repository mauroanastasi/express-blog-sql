const mysql = require(`mysql2`);

const connection = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `popimian999`,
    database: `db_blog`
});

connection.connect(() => {
    console.log(`Connected to MySQL`)
})

module.exports = connection;