import { resolve } from 'path';

import sqlite3 from 'sqlite3';

sqlite3.verbose();

const bdSource = resolve('src/db/users.sqlite');

const db = new sqlite3.Database(bdSource, (dataBaseError) => {
  if (dataBaseError) {
    console.error(dataBaseError.message);

    throw dataBaseError;
  }

  console.log('Connected to the SQLite database.');

  db.run(`CREATE TABLE Users
          (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name  text,
              email text,
              city  text,
              phone text
          )`,
    (runSqlError) => {
      if (runSqlError) {
        console.error(runSqlError.message);

        return;
      }

      const insert = 'INSERT INTO Users (name, email, city, phone) VALUES (?,?,?,?)';

      db.run(insert, ['Олег', 'shilov-1@yandex.ru', 'Москва', '9654225982']);
    });
});
