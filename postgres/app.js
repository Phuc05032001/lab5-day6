const Pool = require("pg").Pool; const pool = new Pool({
    user: "codeforgeek", host: "localhost",
    database: "users",
    password: "somepassword",
    port: 5432,
});

// read information from table
pool.query("SELECT * FROM profile ORDER BY id ASC", (error, results) => {
if (error) {
console.log(error); return;
}
console.log(results);
});

// add a new user profile. const name = "Shahid";
const email = "shahid@codeforgeek.com";

pool.query(
"INSERT INTO profile (name, email) VALUES ($1, $2)", [name, email],
(error, results) => { if (error) {
console.log(error); return;
}
console.log(results);
}
);
