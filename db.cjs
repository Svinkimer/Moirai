const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'moirai',
    user: 'postgres',
    password: 'admin',
    port: 5432,
});

module.exports = pool;
