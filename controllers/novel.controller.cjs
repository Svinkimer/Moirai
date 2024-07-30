// CREATE TABLE Novel (
// 	id 	SERIAL PRIMARY KEY,
// 	title VARCHAR(70),
// 	description VARCHAR(3000),
// 	horizontal_poster varchar(100),
// 	vertical_poster varchar(100)
// );
const pool = require('../db.cjs');
const CREATE_REQUEST =
    'INSERT INTO NOVEL (TITLE, DESCRIPTION, HORIZONTAL_POSTER, VERTICAL_POSTER) VALUES ($1, $2, $3, $4) RETURNING *;';
const GET_BY_ID_REQUEST = 'SELECT * FROM NOVEL WHERE ID=$1;';
const GET_ALL_REQUEST = 'TABLE NOVEL;';
// const UPDATE_START = 'UPDATE novel SET ';

class Novel {
    async createNovel(req, res) {
        const response = await pool.query(CREATE_REQUEST, [
            'Novel title',
            'Enter your description',
            'default',
            'default',
        ]);
        res.json(response.rows[0]);
    }

    async updateNovel(req, res) {
        console.log('UPDATE REQUEST');
        console.log(req);
        console.log('updating');
        const id = req.params.novel_id;

        // CREATING DATABASE REQUEST
        const params = [];
        let UPDATE_REQUEST = 'UPDATE novel SET ';
        const args = Object.entries(req.body);
        console.log(args);
        if (args.length == 0) {
            res.send('Object should not be empty to update');
            return null;
        }

        args.forEach((val, key) => {
            console.log(val);
            UPDATE_REQUEST += `${val[0]} = $${key + 1} `;
            params.push(val[1]);
        });
        UPDATE_REQUEST += `WHERE id = $${args.length + 1} RETURNING *;`;
        params.push(id);
        console.log(UPDATE_REQUEST);
        console.log('request generated');

        // ACTUAL REQUEST
        const result = await pool.query(UPDATE_REQUEST, params);
        console.log('request done');

        console.log(result.rows[0]);
        res.json(result.rows[0]);
    }
    async deleteNovel(req, res) {}
    async getNovell(req, res) {
        const novel_id = parseInt(req.params.novel_id);
        const response = await pool.query(GET_BY_ID_REQUEST, [novel_id]);
        res.json(response.rows[0]);
    }
    async getAllNovells(req, res) {
        const response = await pool.query(GET_ALL_REQUEST);
        res.json(response.rows);
    }
}

module.exports = new Novel();
