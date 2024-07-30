const pool = require('../db.cjs');

// SQL requests
const CREATE_REQUEST = `INSERT INTO character (name, color, description) VALUES ($1, $2, $3) RETURNING * ;`;
const GET_BY_ID_REQUEST = 'SELECT * FROM character WHERE id=$1;';
const GET_ALL_REQUEST = 'TABLE character;';

// Controller itself
class Character {
    async createCharacter(req, res) {
        const response = await pool.query(CREATE_REQUEST, [
            'Incognito',
            '#222222',
            'Place for your character description...',
        ]);
        res.json(response.rows[0]);
    }

    async updateCharacter(req, res) {
        console.log('UPDATE REQUEST');
        const id = req.params.novel_id;

        // CREATING DATABASE REQUEST
        const params = [];
        let UPDATE_REQUEST = 'UPDATE character SET ';
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
        console.log(params);
        console.log('request generated');

        // ACTUAL REQUEST
        const result = await pool.query(UPDATE_REQUEST, params);
        console.log('request done');

        console.log(result.rows[0]);
        res.json(result.rows[0]);
    }
    async deleteNovel(req, res) {}
    async getCharacter(req, res) {
        const character_id = parseInt(req.params.novel_id);
        const response = await pool.query(GET_BY_ID_REQUEST, [character_id]);
        res.json(response.rows[0]);
    }
    async getAllCharacters(req, res) {
        const response = await pool.query(GET_ALL_REQUEST);
        res.json(response.rows);
    }
}

module.exports = new Character();
