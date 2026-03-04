/*
** EPITECH PROJECT, 2026
** epytodo-test
** File description:
** teapot router
*/

const express = require('express');
const router = express.Router();
const date = new Date().toLocaleDateString('en-CA');

router.get('/', (req, res) => {
    res.status(200).send(`${date}`);
});

module.exports = router;
