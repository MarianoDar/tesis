// db.js

import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'mardar346',
    port: 3306,
    database: 'estudiom'
});