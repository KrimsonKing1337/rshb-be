import path from 'path';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

import type { User } from 'types/@types.js';

sqlite3.verbose();

export async function apiPut(user: User) {
  const db = await open({
    filename: path.resolve('src/db/users.sqlite'),
    driver: sqlite3.Database,
  });

  const { name, email, city, phone } = user;

  const insert = 'INSERT INTO Users (name, email, city, phone) VALUES (?,?,?,?)';

  await db.run(insert, [name, email, city, phone]);

  await db.close();

  return true;
}
