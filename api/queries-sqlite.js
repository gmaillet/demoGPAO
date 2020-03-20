const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:');
db.run('CREATE TABLE jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, command VARCHAR(256), status VARCHAR(30), log VARCHAR(256))');

 const getFirstJobReady = (request, response) => {
   console.log('ici');
    db.all("SELECT * FROM jobs WHERE status='ready' LIMIT 1", (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results)
    })
  }

  const insertJob = (request, response) => {
    const { command, status, log } = request.body
    var stmt = db.prepare('INSERT INTO jobs (command, status, log) VALUES (?, ?, ?)');
    stmt.run([command, status, log], function(error, results) {
      if (error) {
        throw error
      }
      response.status(201).send(`Job added with ID: ${this.lastID}`)
    })
  }

  const updateJob = (request, response) => {
    const id = parseInt(request.params.id)
    const { status, log } = request.body
  
    var stmt = db.prepare('UPDATE jobs SET status = ?, log = ? WHERE id = ?');
    stmt.run([status, log, id], function(error, results) {
        if (error) {
          throw error
        }
        response.status(200).send(`Job modified`)
      }
    )
  }

  module.exports = {
    getFirstJobReady,
    insertJob,
    updateJob,
  }