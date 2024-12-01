import type { Database } from 'sqlite';
import sqlite3 from 'sqlite3';

export type Db = Database<sqlite3.Database, sqlite3.Statement>;

export type User = {
  name: string;
  email: string;
  city: string;
  phone: string;
};
