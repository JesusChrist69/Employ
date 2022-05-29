var mysql = require('mysql');

var con = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: ''
});

// ! TENTO SUBOR MUSI BYT SERVER SIDE !

con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   checkDatabaseAndTables();
});

function checkDatabaseAndTables() {
   con.query("CREATE DATABASE IF NOT EXISTS employ", function(err, result) {
      if (err) throw err;
      console.log("DATABASE employ SUCCESSFULLY CREATED");
   });
   // con.query("CREATE TABLE IF NOT EXISTS jobs (job_title VARCHAR(128) NOT NULL, job_description TEXT NOT NULL, salary FLOAT NOT NULL, phone VARCHAR(12) NOT NULL, country TEXT NOT NULL, last_update TIMESTAMP NOT NULL)", function(err, result) {
   //    if (err) throw err;
   //    console.log("TABLE jobs SUCCESSFULLY CREATED");
   // });
}

export function getJobs()  {
   con.query("SELECT DISTINCT job_title FROM jobs", function(err, result) {
      if (err) throw err;
      const list = [];
      for (let i = 0; i < result.length; i++) {
         for (let obj in result[i]) {
            const job = {
                title: result[i][obj],
                link: "job_description"
            }
            list.push(job);
         }
      }
      return list;
   });
   return [];
}