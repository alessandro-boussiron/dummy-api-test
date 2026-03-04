/*
** EPITECH PROJECT, 2026
** epytodo-test
** File description:
** register
*/

const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// DB
require('dotenv').config();
const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.DB_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('error', (err) => {
    console.error(`Erreur inattendue lors du lancement de la connexion à la db :\n${toString(err)}`)
})

router.post('/', async (req, res) => {
    const type = req.get('Content-type');
    if (!type.includes('application/json')) {
        return res.status(400).send(JSON.stringify('msg', 'Not a valid type'));
    }
    const { email, password, name, firstname } = req.body;
    if (!email || !password || !name || !firstname ) {
        return res.status(400).send(JSON.stringify('msg', 'missing field'))
    }
    try {
        const checkUser = await pool.query('SELECT id FROM "user" WHERE email = $1', [email]);
        if (checkUser.rowCount > 0) {
            return res.status(400).send(JSON.stringify('msg', 'account already exists'))
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send(JSON.stringify('msg', 'server error'));
    }
    try {
            const query = `INSERT INTO "user" (email, password, name, firstname)
            VALUES ($1, $2, $3, $4)
            RETURNING id;`;
            const hashed_password = bcrypt(password, process.env.PW_SALT);
            const result = await pool.query(query, email, hashed_password, name, firstname);
            const id = result.rows[0];
            const data = {
                user : {
                    id: id.id,
                    email: email
                }
            };
            const token = await jwt.sign(data, process.env.JWT_SECRET);
            return res.status(201).send(JSON.stringify('token', `${token}`))
    } catch (err) {
        console.error(err);
        return res.status(500).send(JSON.stringify('msg', 'server error'));
    }
        
});

module.exports = router;