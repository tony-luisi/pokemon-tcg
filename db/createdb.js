var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db/auth.sqlite'
  },
  useNullAsDefault: true
})

// https://www.sqlite.org/lang_droptable.html
var dropSql = 'DROP TABLE IF EXISTS users;'

// https://www.sqlite.org/lang_createtable.html
// See also: https://www.sqlite.org/datatype3.html
var createSql = [
  'CREATE TABLE users (',
  '  id INTEGER PRIMARY KEY ASC,',
  '  email VARCHAR(255) NOT NULL UNIQUE,',
  '  password_hash VARCHAR(255) NOT NULL',
  ');'
].join(' ')

knex.raw(dropSql).then(function (resp) {
  return knex.raw(createSql)
}).then(function (resp) {
  process.exit()
})
