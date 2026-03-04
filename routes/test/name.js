/*
** EPITECH PROJECT, 2026
** epytodo-test
** File description:
** teapot router
*/

const express = require('express');
const router = express.Router();

router.get('/:user', (req, res) => {
    const name = req.params.user;

    res.format({
        'text/html': () => {
            res.status(200).send(`<p>Hello ${name} !</p>`);
        },
        'text/plain': () => {
            res.status(200).send(`Hello ${name} !`);
        },
        'application/json': () => {
            res.status(200).json({ message: `Hello ${name} !` });
        },
        default: () => {
            res.status(406).send('Not Acceptable');
        }
    });
});

module.exports = router;
