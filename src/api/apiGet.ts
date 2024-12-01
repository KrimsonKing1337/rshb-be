import path from 'path';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

sqlite3.verbose();

export async function apiGet() {
  const db = await open({
    filename: path.resolve('src/db/users.sqlite'),
    driver: sqlite3.Database,
  });

  const result = await db.all(`SELECT * from Users`);

  await db.close();

  return result;
}
